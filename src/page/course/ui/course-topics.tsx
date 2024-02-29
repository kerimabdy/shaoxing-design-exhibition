import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/shared/components/ui/accordion";
import React from "react";
import Image from "next/image";
import { MainPageContentQuery, Topic } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";



export const CoursePageCourseTopics = (props: MainPageContentQuery["topicConnection"]) => {
  const courseTopics = props.edges?.map(topic => topic?.node) as Topic[]
  return <div className=" w-full border-t border-zinc-800 px-8 pb-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800">
      <div className="absolute pointer-events-none -top-[100.5px] -right-[100.5px] ">
        <Image alt="star icon" className="pointer-events-none" unoptimized src='https://res.cloudinary.com/abdykerim/image/upload/v1708863014/uploads/image/star_zd40tc.svg' width={200} height={200}></Image>
      </div>
      <div className="absolute pointer-events-none -top-[100.5px] -left-[100.5px] ">
        <Image alt="star icon" className="pointer-events-none" unoptimized src='https://res.cloudinary.com/abdykerim/image/upload/v1708863014/uploads/image/star_zd40tc.svg' width={200} height={200}></Image>
      </div>
      <Accordion type="single" collapsible>
        {courseTopics.map(item => {
          return <AccordionItem data-tina-field={tinaField(item, "title")} key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <div className='bg-orange-500 overflow-hidden mb-6 relative rounded-xl w-full aspect-[4/3]'>
                <Image unoptimized src={item.heroImg || ""} className='object-cover' fill alt={item.title} />
              </div>
              <p>{item.description}</p>            </AccordionContent>
          </AccordionItem>
        })}
      </Accordion>
    </div>

  </div>
}


