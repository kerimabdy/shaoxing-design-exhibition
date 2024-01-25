import { CoursePage } from "@/src/page/course";
import client from '@/tina/__generated__/client';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const result = await client.queries.mainPageContent({ relativePath: `main.md` })

  return {
    title: result.data.pages.title,
  }
}


export default async function AppClassPage({
  params,
}: Props) {

  const result = await client.queries.mainPageContent({ relativePath: `course.md` })
  return <main><CoursePage {...result} /></main>
}