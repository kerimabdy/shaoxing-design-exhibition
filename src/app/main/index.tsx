import React from "react"
import { MainPageHero } from "./ui/hero"
import { MainPageClassTopics } from "./ui/class-topics"
import { MainPageClassIntro } from "./ui/class-intro"
import { MainPageStudentGroup } from "./ui/student-group"
import { MainPageStamp } from "./ui/stamp"
import { groups } from "@/src/entities/groups/info"


export const MainPage = () => {
  return (
    <div>
      <MainPageHero />
      <MainPageClassTopics />
      <MainPageClassIntro />
      <MainPageStamp />
      {groups.map(group => {
        return <MainPageStudentGroup key={group.name} group={group} />
      })}
    </div>
  )
}