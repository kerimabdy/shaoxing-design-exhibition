import RootLayout from '@/src/app/layouts/layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout></>
}