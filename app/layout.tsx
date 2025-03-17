import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup AI',
  description: 'Created with create-next-stack',
  generator: 'Krishna Kant',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
