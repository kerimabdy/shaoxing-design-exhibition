import { StudentPage } from "@/src/app/student/intex";
import { studentProfiles } from "@/src/entities/students/info";
import { StudentProfile } from "@/src/entities/students/types";

const findStudent = (studentNumber: string): StudentProfile | undefined => {
  return studentProfiles.find(student => student.studentNumber === studentNumber);
};

export default function AppStudentPage({ params }: { params: { slug: string } }) {

  const student = findStudent(params.slug);

  return (
    <main>
      {student && <StudentPage student={student}></StudentPage>}

    </main>
  )
}