"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Student, StudentConnectionQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

export const StudentGroupPageStudentsList = ({ students }: { students: Student[] }) => {
  return <div>
    <div className="w-full border-t border-zinc-800 ">
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="flex flex-wrap justify-between gap-4 items-end">
          <h2 className='text-6xl leading-none '>学生</h2>
          <span className='px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-2 text-zinc-500 text-base '>{students?.length} 学生</span>
        </div>
        <div className="absolute -bottom-[100.5px] -right-[100.5px] ">
          <Image alt="star icon" unoptimized src='https://res.cloudinary.com/abdykerim/image/upload/v1708863014/uploads/image/star_zd40tc.svg' width={200} height={200}></Image>
        </div>
        <div className="absolute -bottom-[100.5px] -left-[100.5px] ">
          <Image alt="star icon" unoptimized src='https://res.cloudinary.com/abdykerim/image/upload/v1708863014/uploads/image/star_zd40tc.svg' width={200} height={200}></Image>
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-4 border-t border-zinc-800 px-8'>
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {students && students.map(student => {
            return (
              <Link data-tina-field={student && tinaField(student, 'name')} key={student?.studentId} href={`/students/${student?._sys.breadcrumbs.join('/')}`}>
                <div className='w-full flex flex-col gap-2' >
                  <div className='bg-orange-500 relative overflow-hidden rounded-xl w-full aspect-[3/4]'>
                    <Image unoptimized fill src={student?.heroImg || ""} alt="student image" className=" object-cover" />
                  </div>
                  <p className='text-zinc-500 text-xl leading-none'>{student?.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  </div>
}