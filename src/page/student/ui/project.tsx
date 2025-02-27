import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/shared/components/ui/carousel'
import Image from "next/image";
import { StudentQuery } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

interface StudentPageProjectProp {
  label?: string | null | undefined;
  video?: string | null | undefined;
  qr?: string | null | undefined;
  images?: ({
    __typename: "StudentProjectsImages";
    image?: string | null | undefined;
  } | null)[] | null | undefined;
}

export const StudentPageProject = (props: StudentPageProjectProp) => {
  return <div className="w-full">
    <div className=" w-full border-y border-zinc-800 px-8">
      <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
        <div data-tina-field={props.label && tinaField(props, 'label')} className="flex flex-wrap gap-4 items-baseline">
          <h2 className='text-6xl leading-none '>{props?.label}</h2>
          <span className='text-zinc-500 text-xl'>({props?.label})</span>
        </div>
      </div>
    </div>
    <Carousel className="w-full my-6">
      <CarouselContent className="  [&>:first-child]:ml-[12.5%] [&>:last-child]:mr-[12.5%]">
        {props.images && props.images.map((image, i) => (
          <CarouselItem className="basis-3/4" key={image?.image || i}>
            <div className="px-1">
              <div data-tina-field={image && tinaField(image)} className="bg-zinc-900 overflow-hidden rounded-xl aspect-video relative">
                <Image unoptimized src={image?.image || ""} alt={image?.image || ""} fill className="object-contain" />
              </div>
            </div>
          </CarouselItem>
        ))}

        {props.video && <CarouselItem className="basis-3/4">
          <div className="px-1">
            <div data-tina-field={props.video && tinaField(props, 'video')} className="bg-zinc-900 overflow-hidden rounded-xl aspect-video relative">
              <video muted playsInline controls src={props?.video || ""} className="object-cover"></video>
            </div>
          </div>
        </CarouselItem>}

        {props.qr && <CarouselItem className="basis-3/4 last:ml-[12.5%]">
          <div className="px-1">
            <div data-tina-field={props.qr && tinaField(props, 'qr')} className="bg-zinc-900 overflow-hidden flex justify-center items-center rounded-xl aspect-video relative">
              <Image unoptimized width={200} height={200} src={props?.qr || ""} alt='qr code' className="max-w-52 max-h-full object-contain w-full rounded-lg" />
            </div>
          </div>
        </CarouselItem>
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
}