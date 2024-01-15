import React from "react"
import Image from "next/image"

interface StudentsGroupPageHeroProps {
  name: String;
}

export const StudentsGroupPageHero: React.FC<StudentsGroupPageHeroProps> = ({ name }) => {
  return <div>
    <div className="pt-32 md:pt-52 flex flex-col items-center">
      <Image alt="Shaoxing University Stamp" unoptimized src='/image/university-stamp.svg' width={200} height={200}></Image>
      <h1 className='text-[20vw] leading-none mt-4'>{name}</h1>
      <span className='text-zinc-500 text-2xl mt-6'>({name}班)</span>
    </div>

    <div className="px-8 mt-20 md:mt-32">
      <div className="bg-zinc-900 relative rounded-xl w-full aspect-video">
        <video muted loop playsInline autoPlay controls src={`/groups/${name}/intro-vid.mp4`} className="object-fit absolute w-full h-full top-0 left-0 right-0 bottom-0"></video>      </div>
    </div>
  </div>
}