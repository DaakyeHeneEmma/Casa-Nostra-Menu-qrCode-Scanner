import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import MenuBar from '../../components/MenuBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <MenuBar />
        {children}
        <Analytics />
        </body>
    </html>
  )
}
