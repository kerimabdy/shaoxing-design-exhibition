import { StudentGroupPage } from "@/src/page/group";
import client from "@/tina/__generated__/client";
import { Metadata, ResolvingMetadata } from "next";

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
  const result = await client.queries.studentGroup({ relativePath: `${params.slug}.md` })

  return {
    title: `${result.data.studentGroup.name} 班`,
  }
}

export default async function AppStudentGroupPage({
  params,
}: Props) {
  const result = await client.queries.studentGroup({ relativePath: `${params.slug}.md` })

  return (
    <main>
      <StudentGroupPage {...result} ></StudentGroupPage>
    </main>
  )
}