'use client'
import React, { useEffect, useRef } from "react";

export const NoiseLayer = () => {
  return <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden opacity-10 z-30 pointer-events-none">
    <div className="shake" style={{
      backgroundImage: `url(/noise.png)`,
      backgroundSize: "auto",
      backgroundPosition: "left top",
      backgroundRepeat: "repeat",
      position: "absolute",
      inset: "-200%",
      width: "400%",
      height: "400%",
    }}></div>
  </div>
}