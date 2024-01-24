import React from "react"
import Image from "next/image"

interface StudentsGroupPageHeroProps {
  name: String;
}

export const StudentsGroupPageHero: React.FC<StudentsGroupPageHeroProps> = ({ name }) => {
  return <div>
    <div className="pt-32 md:pt-52 flex flex-col items-center">
      <Image alt="Shaoxing University Stamp" className="rotating" unoptimized src='/image/university-stamp.svg' width={200} height={200}></Image>
      <h1 className='text-[20vw] leading-none mt-4'>{name}</h1>
      <span className='text-zinc-500 text-2xl mt-6'>({name}班)</span>
    </div>

    <div>
      <div className=" w-full border-t border-zinc-800 px-8 ">
        <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
          <div className="flex flex-wrap gap-4 items-baseline">
            <h2 className='text-6xl leading-none '>过程</h2>
            <span className='text-zinc-500 text-xl'>(过程)</span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
          <div className="bg-zinc-900 overflow-hidden relative rounded-xl w-full aspect-video">
            <video muted playsInline controls src={`/groups/${name}/intro-vid.mp4`} className="object-fit absolute w-full h-full top-0 left-0 right-0 bottom-0"></video>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className=" w-full border-t border-zinc-800 px-8 ">
        <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
          <div className="flex flex-wrap gap-4 items-baseline">
            <h2 className='text-6xl leading-none '>效果</h2>
            <span className='text-zinc-500 text-xl'>(效果)</span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
          <div className="bg-zinc-900 overflow-hidden relative rounded-xl w-full aspect-video">
            <video muted loop playsInline controls src={`/groups/${name}/result-vid.mp4`} className="object-fit absolute w-full h-full top-0 left-0 right-0 bottom-0"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
}