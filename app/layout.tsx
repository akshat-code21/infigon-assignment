import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infigon Assignment',
  description: 'Infigon'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
