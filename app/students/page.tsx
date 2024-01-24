import { StudentGroupPageStudentsList } from "@/src/page/group/ui/students-list";
import { studentProfiles } from "@/src/entities/students/info";

export default function StudentsPage() {
  return <main className="pt-6">
    <StudentGroupPageStudentsList students={studentProfiles} />
  </main>
}