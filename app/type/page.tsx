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
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: 'បន្លែ', icon: '🥦', gradient: 'from-green-900/60 to-dark-card' },
            { label: 'នំខ្មែរ', icon: '🍮', gradient: 'from-amber-900/60 to-dark-card' },
            { label: 'ភេសជ្ជៈ', icon: '🧃', gradient: 'from-blue-900/60 to-dark-card' },
            { label: 'ផ្លែឈើ', icon: '🍓', gradient: 'from-red-900/60 to-dark-card' },
          ].map((btn) => (
            <button
              key={btn.label}
              className={`bg-gradient-to-br ${btn.gradient} rounded-3xl p-6 flex flex-col items-center justify-center gap-4 border border-coral/20 hover:border-coral hover:scale-105 transition-all shadow-lg h-40`}
            >
              <span className="text-5xl">{btn.icon}</span>
              <span className="font-headline font-bold text-xl">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* ក្រឡាប្រភេទ */}
        <div className="grid grid-cols-2 gap-4">
          {foodTypes.map((type) => (
            <button
              key={type.name}
              className="bg-dark-card rounded-3xl p-6 flex flex-col items-center gap-2 hover:bg-dark-card/80 hover:scale-105 transition-all shadow-lg"
            >
              <h3 className="font-headline font-bold text-lg">{type.name}</h3>
              <p className="text-coral text-xs font-body">{type.count}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
