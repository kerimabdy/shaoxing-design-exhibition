"use client"
import React from "react";
import { StudentsGroupPageHero } from "./ui/hero";
import { StudentGroupPageStudentsList } from "./ui/students-list";
import { Group } from "@/src/entities/groups/types";
import { Student, StudentGroupQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


interface StudentGroupPage {
  group: Group;
}

export const StudentGroupPage = (props: {
  data: StudentGroupQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  const students: Student[] = data?.studentGroup?.students?.map(student => student?.student as Student) || [] as Student[]
  return <main>
    <StudentsGroupPageHero {...data} />
    <StudentGroupPageStudentsList students={students} />
  </main>
}