import Image from "next/image";
import React from "react";

export const MainPageStamp = () => {
  return <div className="w-full border-t border-zinc-800 px-8 ">
    <div className="flex justify-center relative w-full mx-auto max-w-screen-md border-x border-zinc-800 p-6">
      <Image alt="Shaoxing University Stamp" unoptimized src='/image/university-stamp.svg' width={200} height={200}></Image>
    </div>
  </div>
}