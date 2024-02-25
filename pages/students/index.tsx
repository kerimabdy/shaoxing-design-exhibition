import { StudentsListPage } from "@/src/page/students";
import client from "@/tina/__generated__/client";
import { StudentConnectionQuery } from "@/tina/__generated__/types";
import Head from "next/head";


export default function StudentsPage(result: {
  data: StudentConnectionQuery
  variables: {}
  query: string
}) {
  return <main className="pt-6">
    <Head>
      <title>学生</title>
    </Head>
    <StudentsListPage {...result} />
  </main>
}

export async function getStaticProps() {
  const result = await client.queries.studentConnection();
  return {
    props: result
  }
}