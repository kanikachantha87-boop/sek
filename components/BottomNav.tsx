'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Utensils, Camera, HelpCircle, Info } from 'lucide-react'

const navItems = [
  { href: '/home', icon: Home, label: 'HOME' },
  { href: '/type', icon: Utensils, label: 'TYPE' },
  { href: '/scanner', icon: Camera, label: 'SCANNER' },
  { href: '/quiz', icon: HelpCircle, label: 'QUIZ' },
  { href: '/about', icon: Info, label: 'ABOUT' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-gray-800 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? 'text-coral' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-body font-medium tracking-wider">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
