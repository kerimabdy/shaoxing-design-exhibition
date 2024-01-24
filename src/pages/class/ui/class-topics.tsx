import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/shared/components/ui/accordion";
import React from "react";
import Image from "next/image";
import { classTopics } from "@/src/entities/class/info";



export const ClassPageClassTopics = () => {
  return <div className=" w-full border-t border-zinc-800 px-8 pb-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800">
      <div className="absolute -top-[100.5px] -right-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <div className="absolute -top-[100.5px] -left-[100.5px] ">
        <Image alt="star icon" unoptimized src='/image/star.svg' width={200} height={200}></Image>
      </div>
      <Accordion type="single" collapsible>
        {classTopics.map(item => {
          return <AccordionItem key={item.name} value={item.name}>
            <AccordionTrigger>{item.name}</AccordionTrigger>
            <AccordionContent>
              <div className='bg-orange-500 overflow-hidden mb-6 relative rounded-xl w-full aspect-[4/3]'>
                <Image src={`/class-images/${item.image}`} className='object-cover' fill alt={item.name} />
              </div>
              <p>{item.description}</p>            </AccordionContent>
          </AccordionItem>
        })}
      </Accordion>
    </div>

  </div>
}


