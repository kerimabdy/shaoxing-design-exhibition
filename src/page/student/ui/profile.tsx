import React from "react";
import Image from "next/image";
import { StudentQuery } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";


export const StudentPageProfile = (props: StudentQuery) => {
  return <div>
    <div className="relative flex  flex-col md:flex-row divide-x divide-zinc-800">
      <div className="w-full md:w-2/4 max-w-screen-md p-6">
        <div data-tina-field={tinaField(props.student, 'heroImg')} className="aspect-[3/4] sticky top-6 rounded-xl overflow-hidden">
          <Image fill src={props.student.heroImg || ""} alt="student image" className=" object-cover" />
        </div>
      </div>
      <div className="flex-grow ">
        <div className="relative w-full mx-auto max-w-screen-md p-6">
          <div data-tina-field={tinaField(props.student, 'name')} className=" flex gap-4 items-baseline">
            <h2 className='text-6xl leading-none '>{props.student?.name}</h2>
            <span className='text-zinc-500 text-xl'>({props.student?.name})</span>
          </div>
          <div className="mt-6">
            <p data-tina-field={tinaField(props.student, 'selfEvaluation')} className="text-zinc-300 text-xl ">
              {props.student?.selfEvaluation}
            </p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6   grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">籍贯</h4>
          <div className=" flex-grow">
            <p data-tina-field={tinaField(props.student, 'hometown')} className='text-zinc-500 text-xl'>{props.student?.hometown}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">电话号码</h4>
          <div className=" flex-grow">
            <p data-tina-field={tinaField(props.student, 'phoneNumber')} className='text-zinc-500 text-xl'>{props.student?.phoneNumber}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">邮箱</h4>
          <div className=" flex-grow">
            <p data-tina-field={tinaField(props.student, 'email')} className='text-zinc-500 text-xl'>{props.student?.email}</p>
          </div>
        </div>

        {props.student.skills && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">掌握技能</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {props.student?.skills.map(item => {
                return <li key={item?.label}>
                  <h6 data-tina-field={item && tinaField(item)}><span className='block px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-1.5 pb-2 text-zinc-500 text-base'>{item?.label}</span></h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {props.student.practicalExperiences && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">能力实践经验</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {props.student?.practicalExperiences.map(item => {
                return <li key={item?.label}>
                  <h6 data-tina-field={item && tinaField(item)} className="text-zinc-500 text-xl ">{item?.label}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {props.student.personalAwards && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">个人获奖</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {props.student?.personalAwards.map(item => {
                return <li key={item?.label}>
                  <h6 data-tina-field={item && tinaField(item)} className="text-zinc-500 text-xl ">{item?.label}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}



      </div>
    </div>
  </div>
}