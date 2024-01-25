"use client"
import React from "react";
import { CoursePageCourseTopics } from "./ui/course-topics";
import { CourseIntro } from "../main/ui/course-intro";
import { MainPageContentQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { MainPageStamp } from "../main/ui/stamp";


export const CoursePage = (props: {
  data: MainPageContentQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  return <div className="pt-24">
    {data.pages.blocks?.map(block => {
      switch (block?.__typename) {
        case "PagesBlocksCourseIntroduction":
          return <CourseIntro key={block.__typename} {...block} />
        case "PagesBlocksStamp":
          return <MainPageStamp key={block.__typename} {...block} />
      }
    })
    }
    <CoursePageCourseTopics {...data.topicConnection} />
  </div>
}