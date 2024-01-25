import { PagesQuery } from "@/tina/__generated__/types";
import Image from "next/image";
import React from "react";
import { tinaField } from "tinacms/dist/react";


export const CourseIntro = (props: {
  __typename: "PagesBlocksCourseIntroduction";
  title?: string | null | undefined;
  description?: string | null | undefined;
}) => {
  return <div className=" w-full border-t border-zinc-800 px-8">
    <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <div data-tina-field={tinaField(props, "title")} className="flex flex-wrap gap-4 items-baseline">
        <h2 className='text-6xl leading-none '>{props?.title}</h2>
        <span className='text-zinc-500 text-xl'>({props?.title})</span>
      </div>
      <div className="mt-6">
        <p data-tina-field={tinaField(props, "description")} className="text-zinc-300 text-xl text-justify">
          {props?.description}
        </p>
      </div>
    </div>

  </div>
}