import { MainPage } from '@/src/page/main';
import client from '@/tina/__generated__/client';
import { MainPageContentQuery } from '@/tina/__generated__/types';

// 14.407vw
// main - page
export default function Home(result: {
  data: MainPageContentQuery
  variables: {}
  query: string
}) {
  return (
    <main>
      {/* <p>hello</p> */}
      <MainPage {...result}></MainPage>
    </main>
  )
}


export async function getStaticProps() {
  const result = await client.queries.mainPageContent({ relativePath: `main.md` })
  return {
    props: result
  }
}