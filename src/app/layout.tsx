import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import MenuBar from '../../components/MenuBar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
 
    <html lang="en">
    <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <title>Casa Nostra || Our Home</title>
      </head>
      <body>
        <MenuBar />
        {children}
        <Analytics />
        </body>
    </html>
    </>
  )
}
