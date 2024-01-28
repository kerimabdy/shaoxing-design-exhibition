"use client"
import React from "react";
import { StudentPageProfile } from "./ui/profile";
import { StudentPageProject } from "./ui/project";
import { StudentQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


export const StudentPage = (props: {
  data: StudentQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  return <div className="pt-24">
    <StudentPageProfile {...data} />
    {data.student.projects?.map(project => <StudentPageProject key={project?.label} {...project} />)
    }
  </div>
}     