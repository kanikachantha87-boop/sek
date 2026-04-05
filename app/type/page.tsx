'use client'

import Header from '@/components/Header'

const foodTypes = [
  { icon: '🍕', name: 'ភីហ្សា', count: '១២ ម្ហូប' },
  { icon: '🍔', name: 'បឺហ្គឺ', count: '០៨ ម្ហូប' },
  { icon: '🍣', name: 'សូស៊ី', count: '១៥ ម្ហូប' },
  { icon: '🥗', name: 'សាឡាដ', count: '១០ ម្ហូប' },
  { icon: '🍜', name: 'មីស៊ុប', count: '០៩ ម្ហូប' },
  { icon: '🍰', name: 'នំបង្អែម', count: '០៦ ម្ហូប' },
  { icon: '🥩', name: 'សាច់អាំង', count: '១១ ម្ហូប' },
  { icon: '🍱', name: 'ម្ហូបជប៉ុន', count: '០៧ ម្ហូប' },
]

export default function TypePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-5 py-6 pb-24">
        {/* ចំណងជើង */}
        <div className="mb-8">
          <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ស្វែងរក</p>
          <h2 className="text-3xl font-headline font-bold">ប្រភេទម្ហូប</h2>
          <p className="text-gray-400 font-body text-sm mt-1">ជ្រើសរើសប្រភេទដែលអ្នកចូលចិត្ត</p>
        </div>

        {/* ប៊ូតុងប្រភេទ */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-6">
          {[
            { label: 'បន្លែ', icon: '🥦' },
            { label: 'នំខ្មែរ', icon: '🍮' },
            { label: 'ភេសជ្ជៈ', icon: '🧃' },
            { label: 'ផ្លែឈើ', icon: '🍓' },
          ].map((btn) => (
            <button
              key={btn.label}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-dark-card rounded-full border border-coral/30 hover:border-coral hover:bg-coral/10 transition-all text-sm font-body font-medium"
            >
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* ក្រឡាប្រភេទ */}
        <div className="grid grid-cols-2 gap-4">
          {foodTypes.map((type) => (
            <button
              key={type.name}
              className="bg-dark-card rounded-3xl p-6 flex flex-col items-center gap-3 hover:bg-dark-card/80 hover:scale-105 transition-all shadow-lg group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-900/40 to-dark rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-inner">
                {type.icon}
              </div>
              <div className="text-center">
                <h3 className="font-headline font-bold text-lg">{type.name}</h3>
                <p className="text-coral text-xs font-body mt-1">{type.count}</p>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
