import React from "react"
import { MainPageHero } from "./ui/hero"
import { MainPageClassTopics } from "./ui/class-topics"
import { MainPageClassIntro } from "./ui/class-intro"
import { MainPageStudentGroup } from "./ui/student-group"
import { MainPageStamp } from "./ui/stamp"


export const MainPage = () => {
  return (
    <div>
      <MainPageHero/>
      <MainPageClassTopics/>
      <MainPageClassIntro/>
      <MainPageStamp/>
      <MainPageStudentGroup/>
      <MainPageStudentGroup/>
    </div>
  )
}