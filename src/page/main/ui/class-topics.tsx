'use client'
import React, { useEffect, useRef } from 'react';
import Reeller from 'reeller';
import gsap from 'gsap';
import { classTopics } from '@/src/entities/class/info';
import Image from 'next/image';
import { ClassTopics } from '@/src/entities/class/types';

Reeller.registerGSAP(gsap);


export const MainPageClassTopics = () => {
  const indexToSplit = 10;
  const original = [...classTopics]
  const firstHalf = original.splice(0, indexToSplit);
  const secondHalf = original;
  return <div className='flex flex-col gap-4 py-8 border-t border-zinc-800'>
    <TopicsReeler topics={firstHalf} reversed></TopicsReeler>
    <TopicsReeler topics={secondHalf}></TopicsReeler>
  </div>
}



interface TopicsReelerProps {
  topics: ClassTopics[];
  reversed?: boolean
}

const TopicsReeler = ({ reversed = false, topics }: TopicsReelerProps) => {
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
      {topics.map(item => {
        return (
          <div className='my-reel-item flex flex-col gap-2' key={item.name}>
            <div className='bg-orange-500 overflow-hidden relative rounded-xl w-96 max-w-[80vw] aspect-[4/3]'>
              <Image src={`/class-images/${item.image}`} className='object-cover' fill alt={item.name} />
            </div>
            <span className='text-zinc-500 text-xl leading-none'>({item.name})</span>
          </div>
        )
      })}
    </div>
  </div>
}