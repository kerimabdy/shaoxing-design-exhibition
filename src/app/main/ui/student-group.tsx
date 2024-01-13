'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Reeller from "reeller";
import gsap from 'gsap';

Reeller.registerGSAP(gsap);

const classTopics = [
  "书籍装帧概念",
  "设计程序",
  "书籍装帧形式",
  "印后",
  "装帧艺术",
  "欣赏",
  "书装设计",
  "五感设计",
  "书装的版面设计",
  "书装实例",
  "书装插图设计",
  "制作实操",
  "书籍设计中容易被忽视的环节",
  "何谓书籍设计",
  "书籍设计的“玄关”",
  "书籍设计的形式与文化",
  "从形式到内容",
  "书籍形式美、内容美、意蕴美",
  "版式设计的法则与模式",
  "书籍封面视觉要素",
  "文字的表情与应用",
  "书籍封面视觉表现",
  "图形、图片魅力",
  "书脊是书籍的第二张脸"
];

export const MainPageStudentGroup = () => {
  return <div className=" w-full border-t border-zinc-800 px-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <div className="flex flex-wrap justify-between gap-4 items-end">
        <h4 className='text-6xl leading-none '>211</h4>
        <span className='px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-2 text-zinc-500 text-base '>211班：24 学生</span>
      </div>
      <div className="mt-10">
        <Link href={""}>
          <div style={{'boxShadow': '0px 0px 36px 0px rgba(255, 255, 255, 0.32)' }} className="bg-white text-zinc-900 rounded-xl flex items-center justify-center hover:scale-[1.01] active:scale-[0.98] transition ease-out  py-2 px-4 ">
            <span className="text-xl leading-none">看一看</span>
          </div>
          
        </Link>
      </div>

      <div className="absolute -bottom-[100.5px] -right-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <div className="absolute -bottom-[100.5px] -left-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
    </div>

    <div className='flex flex-col gap-4 py-8 border-t border-zinc-800'>
      <StudentsReel reversed/>
    </div>

  </div>
}

interface StudentsReelProps {
  reversed?: boolean
}

const StudentsReel = ({reversed = false}: StudentsReelProps) => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

   useEffect(() => {
    if (typeof window !== "undefined") {
      const reeller = new Reeller({
        container: container.current,
        wrapper: wrapper.current,
        itemSelector: '.my-reel-item',
        reversed: reversed,
        speed: 100,
      });
    }
  }, []);

  return <div ref={container} className="w-full overflow-hidden">
    <div ref={wrapper} className="flex gap-6">
      {classTopics.map(item => {
        return (
          <div className='my-reel-item flex flex-col gap-2' key={item}>
            <div className='bg-orange-500 rounded-xl w-96 max-w-[80vw] aspect-[2/3]'></div>
          </div>
        )
      })}
    </div>
  </div>
}