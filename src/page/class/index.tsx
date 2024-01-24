import React from "react";
import { ClassIntro } from "../main/ui/class-intro";
import { ClassPageClassTopics } from "./ui/class-topics";

export const ClassPage = () => {
  return <div className="pt-24">
    <ClassIntro />
    <ClassPageClassTopics />
  </div>
}