import React from "react";
import { StudentsGroupPageHero } from "./ui/hero";
import { StudentGroupPageStudentsList } from "./ui/students-list";

export const StudentGroupPage = () => {
  return <main>
    <StudentsGroupPageHero />
    <StudentGroupPageStudentsList />
  </main>
}