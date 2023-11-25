import { Plus_Jakarta_Sans } from "@next/font/google"
import './globals.css'
import SupabaseProvider from "@/providers/SupabaseProvider"


export const metadata = {

  title: 'Arogya Sarthi',
  description: 'The Smart healthcare locating system',
}
const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body className=" bg-amber-50">
        <main className="">
          <SupabaseProvider>
            {children}
          </SupabaseProvider>

        </main>
      </body>
    </html>
  )
}
