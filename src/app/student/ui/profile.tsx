import React from "react";
import { StudentProfile } from "../../../entities/students/types";
import Image from "next/image";


interface StudentPageProfileProps {
  student: StudentProfile
}

export const StudentPageProfile: React.FC<StudentPageProfileProps> = ({ student }) => {
  return <div>
    <div className="relative flex  flex-col md:flex-row divide-x divide-zinc-800">
      <div className="w-full md:w-2/4 max-w-screen-md p-6">
        <div className="aspect-[3/4] sticky top-6 rounded-xl overflow-hidden">
          <Image fill src={`/students/${student.name}${student.studentNumber}/个人照片.jpg`} alt="student image" className=" object-cover" />
        </div>
      </div>
      <div className="flex-grow ">
        <div className="relative w-full mx-auto max-w-screen-md p-6">
          <div className=" flex gap-4 items-baseline">
            <h2 className='text-6xl leading-none '>{student?.name}</h2>
            <span className='text-zinc-500 text-xl'>({student?.name})</span>
          </div>
          <div className="mt-6">
            <p className="text-zinc-300 text-xl ">
              {student?.selfEvaluation}
            </p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6   grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">籍贯</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{student?.hometown}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">电话号码</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{student?.phoneNumber}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">邮箱</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{student?.email}</p>
          </div>
        </div>

        {student.skills && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">掌握技能</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {student?.skills.map(item => {
                return <li key={item}>
                  <h6><span className='block px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-1.5 pb-2 text-zinc-500 text-base'>{item}</span></h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {student.practicalExperience && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">能力实践经验</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {student?.practicalExperience.map(item => {
                return <li key={item}>
                  <h6 className="text-zinc-500 text-xl ">{item}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {student.personalAwards && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">能力实践经验</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {student?.personalAwards.map(item => {
                return <li key={item}>
                  <h6 className="text-zinc-500 text-xl ">{item}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}



      </div>
    </div>
  </div>
}