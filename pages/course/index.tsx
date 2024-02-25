import { CoursePage } from "@/src/page/course";
import client from '@/tina/__generated__/client';
import { MainPageContentQuery } from "@/tina/__generated__/types";
import Head from "next/head";


export default function AppClassPage(result: {
  data: MainPageContentQuery
  variables: {}
  query: string
}) {


  return <main>
    <Head><title>{result.data.pages.title}</title></Head>
    <CoursePage {...result} />
  </main>
}

export async function getStaticProps() {
  const result = await client.queries.mainPageContent({ relativePath: `course.md` })

  return {
    props: result
  }
}