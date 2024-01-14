import { StudentPage } from "@/src/app/student/intex";

export default function AppStudentPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <StudentPage></StudentPage>
    </main>
  )
}