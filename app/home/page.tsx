'use client'

import Header from '@/components/Header'
import { Search, ShieldCheck, Stethoscope, Heart, AlertTriangle } from 'lucide-react'

const mainButtons = [
  {
    id: 1,
    label: 'សុវត្ថិភាពចំណីអាហារ',
    icon: ShieldCheck,
    gradient: 'from-green-800 to-green-950',
    border: 'border-green-600/40',
    iconColor: 'text-green-400',
    emoji: '🛡️',
  },
  {
    id: 2,
    label: 'ជំងឺផ្សេងៗ',
    icon: Stethoscope,
    gradient: 'from-red-800 to-red-950',
    border: 'border-red-600/40',
    iconColor: 'text-red-400',
    emoji: '🏥',
  },
  {
    id: 3,
    label: 'អត្ថប្រយោជន៍នៃសុខភាព',
    icon: Heart,
    gradient: 'from-pink-800 to-pink-950',
    border: 'border-pink-600/40',
    iconColor: 'text-pink-400',
    emoji: '💪',
  },
  {
    id: 4,
    label: 'ផលវិបាកដែលកើតឡើងអំពីចំណីអាហារ',
    icon: AlertTriangle,
    gradient: 'from-amber-800 to-amber-950',
    border: 'border-amber-600/40',
    iconColor: 'text-amber-400',
    emoji: '⚠️',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-5 py-6 space-y-6 pb-24">
        {/* របារស្វែងរក */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="ស្វែងរករសជាតិតាមរដូវ..."
            className="input-search pl-14"
          />
        </div>

        {/* ចំណងជើង */}
        <div>
          <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ស្វែងយល់</p>
          <h2 className="text-3xl font-headline font-bold">ព័ត៌មានសុខភាព</h2>
          <p className="text-gray-400 font-body text-sm mt-1">ជ្រើសរើសប្រធានបទដែលអ្នកចង់ដឹង</p>
        </div>

        {/* Button ធំ ៤ */}
        <div className="grid grid-cols-2 gap-4">
          {mainButtons.map((btn) => (
            <button
              key={btn.id}
              className={`bg-gradient-to-br ${btn.gradient} border ${btn.border} rounded-3xl p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl h-44`}
            >
              <span className="text-5xl">{btn.emoji}</span>
              <span className="font-headline font-bold text-sm text-center leading-snug text-white">
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
