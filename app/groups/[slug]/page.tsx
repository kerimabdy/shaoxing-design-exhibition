import { StudentGroupPage } from "@/src/app/group";


export default function AppStudentGroupPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <StudentGroupPage></StudentGroupPage>
    </main>
  )
}