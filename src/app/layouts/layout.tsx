import type { Metadata } from 'next'
import { Noto_Sans_SC } from 'next/font/google'
import localFont from 'next/font/local'
import "@/src/app/styles/globals.css"
import { Navigation } from '@/src/app/navigation'
import { NoiseLayer } from '@/src/shared/components/ui/noise'

const noto = Noto_Sans_SC({
  variable: '--font-noto',
  subsets: ['latin']
})
// Font files can be colocated inside of `app`
const unboundedSans = localFont({
  src: '../../../public/font/UnboundedSans.woff2',
  variable: '--font-unbound',
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={`${noto.variable} ${unboundedSans.variable} relative`}>
      <Navigation />
      {children}
      <NoiseLayer />
    </div>
  )
}
