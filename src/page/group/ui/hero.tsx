import React from "react"
import Image from "next/image"
import { StudentGroupQuery } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

interface StudentsGroupPageHeroProps {
  name: String;
}

export const StudentsGroupPageHero = (props: StudentGroupQuery) => {
  return <div>
    <div className="py-32 md:pt-52 flex flex-col items-center">
      <Image data-tina-field={tinaField(props.studentGroup, "stamp")} alt="Shaoxing University Stamp" className="rotating" unoptimized src={props.studentGroup.stamp || ""} width={200} height={200}></Image>
      <h1 data-tina-field={tinaField(props.studentGroup, "name")} className='text-[20vw] leading-none mt-4'>{props.studentGroup.name}</h1>
      <span className='text-zinc-500 text-2xl mt-6'>({props.studentGroup.name}班)</span>
    </div>
  </div>
}