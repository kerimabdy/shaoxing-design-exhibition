import React from "react";
import { MainPageContentQuery, Topic } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";



export const VideoSection = (props: { __typename: "PagesBlocksVideoSection"; videos?: ({ __typename: "PagesBlocksVideoSectionVideos"; name?: string | null | undefined; video?: string | null | undefined; } | null)[] | null | undefined; key: "PagesBlocksVideoSection"; }) => {
  return <div className="">
    {
      props?.videos?.map((video, index) => {
        return <div key={`${video?.name} ${index}`} data-tina-field={video && tinaField(video)}>
          <div className=" w-full border-t border-zinc-800 px-8 ">
            <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
              <div className="flex flex-wrap gap-4 items-baseline">
                <h2 className='text-6xl leading-none '>{video?.name}</h2>
                <span className='text-zinc-500 text-xl'>({video?.name})</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 px-8">
            <div className="relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
              <div className="bg-zinc-900 overflow-hidden relative rounded-xl w-full aspect-video">
                <video muted playsInline controls src={video?.video || ""} className="object-fit absolute w-full h-full top-0 left-0 right-0 bottom-0"></video>
              </div>
            </div>
          </div>
        </div>
      })
    }
  </div>
}


