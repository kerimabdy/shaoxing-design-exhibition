import React from "react";
import { StudentsGroupPageHero } from "./ui/hero";
import { StudentGroupPageStudentsList } from "./ui/students-list";
import { Group } from "@/src/entities/groups/types";


interface StudentGroupPage {
  group: Group;
}

export const StudentGroupPage: React.FC<StudentGroupPage> = ({ group }) => {

  return <main>
    <StudentsGroupPageHero name={group.name} />
    <StudentGroupPageStudentsList students={group.students} />
  </main>
}