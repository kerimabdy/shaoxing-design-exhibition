import { MainPage } from '@/src/page/main';
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


// 14.407vw
// main - page
export default async function Home({
  params,
}: Props) {

  const result = await client.queries.mainPageContent({ relativePath: `main.md` })
  return (
    <main>
      <MainPage {...result}></MainPage>
    </main>
  )
}
