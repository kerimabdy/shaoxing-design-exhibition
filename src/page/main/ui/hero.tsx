import { MainPageContentQuery } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"


export const MainPageHero = (props: MainPageContentQuery['pages']) => {
  return <div className='hero min-h-screen w-full flex justify-center items-center'>
    <div data-tina-field={tinaField(props)} className='flex flex-col items-center padding-8 gap-2'>
      <h1 className='text-[14.407vw] leading-none '>{props.title}</h1>
      <span className='text-zinc-500 text-2xl'>({props.title})</span>
    </div>
  </div>
}