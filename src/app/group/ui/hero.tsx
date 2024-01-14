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
      <div className="bg-orange-500 rounded-xl w-full aspect-video"></div>
    </div>
  </div>
}