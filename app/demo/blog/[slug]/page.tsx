import BlogPage from "@/src/pages/demo/blog";
import client from "@/tina/__generated__/client";
import { Metadata, ResolvingMetadata } from "next";
import { useTina } from "tinacms/dist/react";

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
  const result = await client.queries.post({ relativePath: `${params.slug}.md` })

  return {
    title: result.data.post.title,
  }
}

export default async function Blog({
  params,
}: Props) {

  const result = await client.queries.post({ relativePath: `${params.slug}.md` })
  return <BlogPage {...result} />
}

