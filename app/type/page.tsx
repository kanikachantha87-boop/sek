'use client'

import Header from '@/components/Header'

export default function TypePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="px-5 py-6">
        <div className="text-center py-20">
          <div className="text-8xl mb-6">🍴</div>
          <h2 className="text-3xl font-headline font-bold mb-4">Type of Food</h2>
          <p className="text-gray-400 font-body">
            Browse by food categories
          </p>
        </div>
      </main>
    </div>
  )
}
