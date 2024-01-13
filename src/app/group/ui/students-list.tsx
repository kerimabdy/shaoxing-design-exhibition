import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export const StudentGroupPageStudentsList = () => {
  return <div className="mt-16 w-full border-t border-zinc-800 px-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <div className="flex flex-wrap justify-between gap-4 items-end">
        <h4 className='text-6xl leading-none '>学生</h4>
        <span className='px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-2 text-zinc-500 text-base '>24 学生</span>
      </div>
      <div className="absolute -bottom-[100.5px] -right-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <div className="absolute -bottom-[100.5px] -left-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
    </div>

    <div className='flex flex-col gap-4 border-t border-zinc-800'>
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {classTopics.map(item => {
            return (
              <div className='w-full flex flex-col gap-2' key={item}>
                <div className='bg-orange-500 rounded-xl w-full aspect-[3/4]'></div>
                <span className='text-zinc-500 text-xl leading-none'>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  </div>
}