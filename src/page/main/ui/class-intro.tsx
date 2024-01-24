import Image from "next/image";
import React from "react";

export const ClassIntro = () => {
  return <div className=" w-full border-t border-zinc-800 px-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <div className="flex flex-wrap gap-4 items-baseline">
        <h2 className='text-6xl leading-none '>课程介绍</h2>
        <span className='text-zinc-500 text-xl'>(课程介绍)</span>
      </div>
      <div className="mt-6">
        <p className="text-zinc-300 text-xl text-justify">
          欢迎参加我们的“书籍设计与排版”课程展览。在这里，我们通过学生们的最终项目来庆祝他们的创造力和技巧的顶点。从大胆的排版到动感的封面设计，每件作品都是他们设计旅程的一瞥。请享受探索这些精心制作的叙事。
        </p>
      </div>
    </div>

  </div>
}