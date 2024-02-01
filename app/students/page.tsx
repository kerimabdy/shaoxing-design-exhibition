import { StudentGroupPageStudentsList } from "@/src/page/group/ui/students-list";
import { StudentsListPage } from "@/src/page/students";
import client from "@/tina/__generated__/client";

export const Metadata = () => {
  return {
    title: '学生'
  }
}


export default async function StudentsPage() {
  const result = await client.queries.studentConnection();
  return <main className="pt-6">
    <StudentsListPage {...result} />
  </main>
}