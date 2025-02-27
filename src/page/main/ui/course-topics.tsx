'use client'
import React, { useEffect, useRef } from 'react';
import Reeller from 'reeller';
import gsap from 'gsap';
import Image from 'next/image';
import { MainPageContentQuery, Topic } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';



export const MainPageClassTopics = (props: MainPageContentQuery['topicConnection']) => {


  const indexToSplit = 10;
  const classTopics = props.edges
  const original = classTopics?.map(topic => topic?.node) as Topic[]
  const firstHalf = original.splice(0, indexToSplit);
  const secondHalf = original;

  return <div className='flex flex-col gap-4 py-8 border-t border-zinc-800'>
    <TopicsReeler topics={firstHalf} reversed></TopicsReeler>
    <TopicsReeler topics={secondHalf}></TopicsReeler>
  </div>
}



interface TopicsReelerProps {
  topics: Topic[];
  reversed?: boolean
}

const TopicsReeler = ({ reversed = false, topics }: TopicsReelerProps) => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Reeller.registerGSAP(gsap);
    if (typeof window !== "undefined") {
      const reeller = new Reeller({
        container: container.current,
        wrapper: wrapper.current,
        itemSelector: '.my-reel-item',
        reversed: reversed,
        speed: 100,
      });
    }
  }, [reversed]);

  return <div ref={container} className="w-full overflow-hidden">
    <div ref={wrapper} className="flex gap-6">
      {topics.map(item => {
        return (
          <div data-tina-field={tinaField(item, 'title')} className='my-reel-item flex flex-col gap-2' key={item?.title}>
            <div className='bg-orange-500 overflow-hidden relative rounded-xl w-96 max-w-[80vw] aspect-[4/3]'>
              <Image unoptimized src={item?.heroImg || ''} className='object-cover' fill alt={item?.title} />
            </div>
            <span className='text-zinc-500 text-xl leading-none'>({item?.title})</span>
          </div>
        )
      })}
    </div>
  </div>
}