'use client'
import React, { useEffect, useRef } from 'react';
import Reeller from 'reeller';
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


export const MainPageClassTopics = () => {
   return <div className='flex flex-col gap-4 py-8 border-t border-zinc-800'>
      <TopicsReeler reversed></TopicsReeler>
      <TopicsReeler ></TopicsReeler>
   </div>
}



interface TopicsReelerProps {
  reversed?: boolean
}

const TopicsReeler = ({reversed = false}: TopicsReelerProps) => {
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
            <div className='bg-orange-500 rounded-xl w-96 max-w-[80vw] aspect-[4/3]'></div>
            <span className='text-zinc-500 text-xl leading-none'>({item})</span>
          </div>
        )
      })}
    </div>
  </div>
}