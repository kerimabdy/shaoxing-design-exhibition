"use client"
import React from "react";
import { Student, StudentConnectionQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { StudentGroupPageStudentsList } from "../group/ui/students-list";

export const StudentsListPage = (props: {
  data: StudentConnectionQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  const students = data?.studentConnection?.edges?.map(student => {
    return student?.node as Student
  }) || [] as Student[]
  return <div className="mt-16 ">
    <StudentGroupPageStudentsList students={students} />
  </div>


}