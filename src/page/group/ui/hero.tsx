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



    {props.studentGroup.videos && props.studentGroup.videos.map((video, index) => {
      return <div key={`${video?.name} ${index}`} data-tina-field={video && tinaField(video)}>
        <div className=" w-full border-t border-zinc-800 px-8 ">
          <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
            <div className="flex flex-wrap gap-4 items-baseline">
              <h2 className='text-6xl leading-none '>{video?.name}</h2>
              <span className='text-zinc-500 text-xl'>({video?.name})</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
            <div className="bg-zinc-900 overflow-hidden relative rounded-xl w-full aspect-video">
              <video muted playsInline controls src={video?.video || ""} className="object-fit absolute w-full h-full top-0 left-0 right-0 bottom-0"></video>
            </div>
          </div>
        </div>
      </div>
    })}
  </div>
}