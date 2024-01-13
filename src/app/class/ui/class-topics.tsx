import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/shared/components/ui/accordion";
import React from "react";
import Image from "next/image";

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


export const ClassPageClassTopics = () => {
  return <div className=" w-full border-t border-zinc-800 px-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800">
      <div className="absolute -top-[100.5px] -right-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <div className="absolute -top-[100.5px] -left-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <Accordion type="single" collapsible>
        {classTopics.map(item => {
          return <AccordionItem key={item} value={item}>
            <AccordionTrigger>{item}</AccordionTrigger>
            <AccordionContent>
              我们感谢您花时间探索我们的作品。这个网站由绍兴大学艺术学院的一名同学倾心打造，是对我们学生想象力和勤奋的致敬。您的兴趣荣耀了我们的努力，并为我们自豪地成为其一部分的充满活力的设计爱好者社区做出了贡献            </AccordionContent>
          </AccordionItem>
        })}
      </Accordion>
    </div>

  </div>
}


