import Image from "next/image";
import React from "react";
import { tinaField } from "tinacms/dist/react";

export const MainPageStamp = (props: {
  __typename: "PagesBlocksStamp";
  image?: string | null | undefined;
}) => {
  return <div className="w-full border-t border-zinc-800 px-8 ">
    <div data-tina-field={tinaField(props)} className="flex justify-center  relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <Image alt="Shaoxing University Stamp" className="rotating" unoptimized src={props.image || ""} width={200} height={200}></Image>
    </div>
  </div>
}