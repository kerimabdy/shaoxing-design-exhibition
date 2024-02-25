import { StudentPage } from "@/src/page/student/intex";
import { GetServerSidePropsContext } from "next";
import client from "@/tina/__generated__/client";
import { StudentQuery } from "@/tina/__generated__/types";
import Head from "next/head";


export default function AppStudentPage(result: {
  data: StudentQuery
  variables: {}
  query: string
}) {
  return (
    <main>
      <Head><title>{`${result.data.student.name} 学生`}</title></Head>
      <StudentPage {...result}></StudentPage>
    </main>
  )
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context?.params?.["slug"] || ""
  const result = await client.queries.student({ relativePath: `${slug}.md` })
  return {
    props: result
  }
}