import { StudentPage } from "@/src/page/student/intex";
import { Metadata, ResolvingMetadata } from "next";
import client from "@/tina/__generated__/client";


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const result = await client.queries.student({ relativePath: `${params.slug}.md` })

  return {
    title: result.data.student.name,
  }
}

export default async function AppStudentPage({
  params,
}: Props) {
  const result = await client.queries.student({ relativePath: `${params.slug}.md` })
  return (
    <main>
      <StudentPage {...result}></StudentPage>
    </main>
  )
}