import React from "react";
import { StudentPageProfile } from "./ui/profile";
import { StudentProfile } from "@/src/entities/students/types";
import { StudentPageProject } from "./ui/project";

interface StudentPageProps {
  student: StudentProfile
}

export const StudentPage: React.FC<StudentPageProps> = ({ student }) => {
  return <div className="pt-24">
    <StudentPageProfile student={student} />
    {student.projects?.map(project => <StudentPageProject key={project.name} project={project} studentNameID={`${student.name}${student.studentNumber}`} />)}
  </div>
}