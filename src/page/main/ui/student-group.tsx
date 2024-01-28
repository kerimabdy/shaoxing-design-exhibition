'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Reeller from "reeller";
import gsap from 'gsap';
import { Group } from "@/src/entities/groups/types";
import { StudentProfile } from "@/src/entities/students/types";

Reeller.registerGSAP(gsap);


interface MainPageStudentGroupProps {
  group: Group
}

export const MainPageStudentGroup: React.FC<MainPageStudentGroupProps> = ({ group }) => {
  return <div>
    <div className=" w-full border-t border-zinc-800 px-8">
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="flex flex-wrap justify-between gap-4 items-end">
          <h2 className='text-6xl leading-none '>{group.name}</h2>
          <span className='px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-2 text-zinc-500 text-base '>{group.name}班：{group.students.length} 学生</span>
        </div>
        <div className="mt-10">
          <Link href={`/groups/${group.name}`}>
            <div style={{ 'boxShadow': '0px 0px 36px 0px rgba(255, 255, 255, 0.32)' }} className="bg-white text-zinc-900 rounded-xl flex items-center justify-center hover:scale-[1.01] active:scale-[0.98] transition ease-out  py-2 px-4 ">
              <span className="text-xl leading-none">看一看</span>
            </div>

          </Link>
        </div>

        <div className="absolute -bottom-[100.5px] -right-[100.5px] ">
          <Image alt="star icon" unoptimized src='uploads/image/star.svg' width={200} height={200}></Image>
        </div>
        <div className="absolute -bottom-[100.5px] -left-[100.5px] ">
          <Image alt="star icon" unoptimized src='uploads/image/star.svg' width={200} height={200}></Image>
        </div>
      </div>

    </div>

    <div className='flex flex-col gap-4 py-8 border-t border-zinc-800'>
      <StudentsReel reversed students={group.students} />
    </div>
  </div>
}

interface StudentsReelProps {
  reversed?: boolean,
  students: StudentProfile[]
}

const StudentsReel = ({ reversed = false, students }: StudentsReelProps) => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const reeller = new Reeller({
        container: container.current,
        wrapper: wrapper.current,
        itemSelector: '.my-reel-item',
        reversed: reversed,
        speed: 100,
      });
    }
  }, []);

  return <div ref={container} className="w-full overflow-hidden">
    <div ref={wrapper} className="flex gap-6">
      {students.map(student => {
        return (
          <div className='my-reel-item flex flex-col gap-2' key={student.studentNumber}>
            <div className='bg-orange-500 relative overflow-hidden rounded-xl w-96 max-w-[80vw] aspect-[2/3]'>
              <Image fill src={`/students/${student.name}${student.studentNumber}/个人照片.jpg`} alt="student image" className=" object-cover" />
            </div>
          </div>
        )
      })}
    </div>
  </div>
}