import { StudentGroupPage } from "@/src/page/group";
import client from "@/tina/__generated__/client";
import { StudentGroupQuery } from "@/tina/__generated__/types";
import { GetServerSidePropsContext, Metadata, ResolvingMetadata } from "next";
import Head from "next/head";

export default function AppStudentGroupPage(result: {
  data: StudentGroupQuery
  variables: {}
  query: string
}) {

  return (
    <main>
      <Head><title>{`${result.data.studentGroup.name} 班`}</title></Head>
      <StudentGroupPage {...result} ></StudentGroupPage>
    </main>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context?.params?.["slug"] || ""
  const result = await client.queries.studentGroup({ relativePath: `${slug}.md` })
  return {
    props: result
  }
}