import React from "react";
import { StudentPageProfile } from "./ui/profile";
import { StudentProfile } from "@/src/entities/students/types";

interface StudentPageProps {
  student: StudentProfile
}

export const StudentPage: React.FC<StudentPageProps> = ({ student }) => {
  return <div className="pt-24">
    <StudentPageProfile student={student} />
  </div>
}