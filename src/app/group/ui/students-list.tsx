import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StudentProfile } from "@/src/entities/students/types";

interface StudentGroupPageStudentsListProps {
  students: StudentProfile[]
}

export const StudentGroupPageStudentsList: React.FC<StudentGroupPageStudentsListProps> = ({ students }) => {
  return <div>
    <div className="mt-16 w-full border-t border-zinc-800 ">
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="flex flex-wrap justify-between gap-4 items-end">
          <h2 className='text-6xl leading-none '>学生</h2>
          <span className='px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-2 text-zinc-500 text-base '>{students.length} 学生</span>
        </div>
        <div className="absolute -bottom-[100.5px] -right-[100.5px] ">
          <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
        </div>
        <div className="absolute -bottom-[100.5px] -left-[100.5px] ">
          <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-4 border-t border-zinc-800 px-8'>
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {students.map(student => {
            return (
              <Link key={student.studentNumber} href={`/students/${student.studentNumber}`}>
                <div className='w-full flex flex-col gap-2' >
                  <div className='bg-orange-500 rounded-xl w-full aspect-[3/4]'></div>
                  <p className='text-zinc-500 text-xl leading-none'>{student.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  </div>
}