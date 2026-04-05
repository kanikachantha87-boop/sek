'use client'

import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
      <div className="flex items-center justify-between px-5 py-4">
        <button className="text-coral hover:text-coral-light transition-colors">
          <Menu className="w-7 h-7" />
        </button>

        <h1 className="font-headline text-2xl font-bold text-coral italic">
          កន្លែងធ្វើម្ហូប
        </h1>

        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-coral">
          <div className="w-full h-full bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center text-white font-headline font-bold text-xs">
            ម្ហូប
          </div>
        </div>
      </div>
    </header>
  )
}
