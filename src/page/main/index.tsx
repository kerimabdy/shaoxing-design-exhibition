'use client'
import React from "react"
import { MainPageHero } from "./ui/hero"
import { MainPageClassTopics } from "./ui/course-topics"
import { CourseIntro } from "./ui/course-intro"
import { MainPageStudentGroup } from "./ui/student-group"
import { MainPageStamp } from "./ui/stamp"
import { MainPageContentQuery, StudentGroup } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"


export const MainPage = (props: {
  data: MainPageContentQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)

  const studentGroups = data.studentGroupConnection?.edges?.map(studentGroup => studentGroup?.node as StudentGroup) || []
  return (
    <div>
      <MainPageHero {...data.pages} />
      <MainPageClassTopics {...data.topicConnection} />
      {data.pages.blocks?.map(block => {
        switch (block?.__typename) {
          case "PagesBlocksCourseIntroduction":
            return <CourseIntro key={block.__typename} {...block} />
          case "PagesBlocksStamp":
            return <MainPageStamp key={block.__typename} {...block} />
        }
      })
      }

      {studentGroups && studentGroups.map(group => {
        return <MainPageStudentGroup key={group.name} {...group} />
      })}
    </div>
  )
}