'use client'
import React from "react"
import { MainPageHero } from "./ui/hero"
import { MainPageClassTopics } from "./ui/class-topics"
import { ClassIntro } from "./ui/class-intro"
import { MainPageStudentGroup } from "./ui/student-group"
import { MainPageStamp } from "./ui/stamp"
import { groups } from "@/src/entities/groups/info"
import { MainPageContentQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"


export const MainPage = (props: {
  data: MainPageContentQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  return (
    <div>
      <MainPageHero {...data.mainPage} />
      <MainPageClassTopics {...data.topicConnection} />
      <ClassIntro />
      <MainPageStamp />
      {groups.map(group => {
        return <MainPageStudentGroup key={group.name} group={group} />
      })}
    </div>
  )
}