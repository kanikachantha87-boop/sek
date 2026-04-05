import type { Metadata } from 'next'
import './globals.css'
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: 'Culinary Atelier',
  description: 'Elevating the Art of Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark min-h-screen">
        <div className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-dark via-dark-burgundy to-dark pb-20">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
