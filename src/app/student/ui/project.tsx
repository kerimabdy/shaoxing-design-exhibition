import { StudentProject } from "@/src/entities/students/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/shared/components/ui/carousel'
import Image from "next/image";

interface StudentPageProjectProp {
  studentNameID?: string;
  project: StudentProject
}

export const StudentPageProject: React.FC<StudentPageProjectProp> = ({ studentNameID, project }) => {
  return <div className="w-full">
    <div className=" w-full border-y border-zinc-800 px-8">
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div className="flex flex-wrap gap-4 items-baseline">
          <h2 className='text-6xl leading-none '>{project.name}</h2>
          <span className='text-zinc-500 text-xl'>({project.name})</span>
        </div>
      </div>
    </div>
    <Carousel className="w-full my-6">
      <CarouselContent>
        {project.images?.map((image) => (
          <CarouselItem className="basis-3/4" key={image}>
            <div className="px-1">
              <div className="overflow-hidden rounded-xl aspect-video relative">
                <Image src={`/students/${studentNameID}/softcover/${image}`} alt={image} fill className="object-cover" />
              </div>
            </div>
          </CarouselItem>
        ))}

        <CarouselItem className="basis-3/4">
          <div className="px-1">
            <div className="overflow-hidden rounded-xl aspect-video relative">
              <video muted playsInline controls src={`/students/${studentNameID}/softcover/video.mp4`} className="object-cover"></video>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-3/4">
          <div className="px-1">
            <div className="overflow-hidden flex justify-center items-center border-2 border-zinc-500 rounded-xl aspect-video relative">
              <Image width={200} height={200} src={`/students/${studentNameID}/softcover/qr.png`} alt='qr code' className="w-52 h-52 rounded-lg" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
}