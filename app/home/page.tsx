'use client'

import Header from '@/components/Header'
import { Search, ChevronRight } from 'lucide-react'

const curatedPicks = [
  {
    id: 1,
    title: 'មីតាហ្គ្លីយ៉ាតែល្អិតល្អន់',
    subtitle: 'ការជ្រើសរើសពិសេសរបស់មេចុងភៅ',
    badge: 'ពិសេសតាមរដូវ',
    badgeColor: 'bg-tertiary',
    image: '🍝',
  },
  {
    id: 2,
    title: 'បឺហ្គឺវ៉ាហ្គ្យូ',
    subtitle: 'សាច់ជ្រើសរើសពីអ្នកកាប់សាច់',
    badge: 'លក់ដាច់បំផុត',
    badgeColor: 'bg-red-500',
    image: '🍔',
  },
]

const genres = [
  { name: 'ភីហ្សា', icon: '🍕' },
  { name: 'បឺហ្គឺ', icon: '🍔' },
  { name: 'សាឡាដ', icon: '🥗' },
  { name: 'សូស៊ី', icon: '🍣' },
]

const trending = [
  {
    id: 1,
    name: 'បាទីសាម៉ុនស្ទីលណតឌីក',
    description: 'សាម៉ុនស្ទូបជាមួយទឹកជ្រលក់យ៉ាអួតដែលមានក្លិនស្រស់ និងបន្លែសរីរាង្គ...',
    price: 18.50,
    badge: 'បញ្ជាក់ជាសរីរាង្គ',
    badgeIcon: '🌿',
  },
  {
    id: 2,
    name: 'ប៊ូរ៉ាតាស្ទ្រូហ្វ ខ្មៅ',
    description: 'នំបុ័ងដុតថ្មជាមួយប៊ូរ៉ាតាក្រែម និងស្ទ្រូហ្វខ្មៅស្រស់...',
    price: 24.00,
    badge: 'ជម្រើសមេចុងភៅ',
    badgeIcon: '⭐',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-5 py-6 space-y-8">
        {/* របារស្វែងរក */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="ស្វែងរករសជាតិតាមរដូវ..."
            className="input-search pl-14"
          />
        </div>

        {/* ការជ្រើសរើសពិសេស */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-headline font-bold">ការជ្រើសរើសពិសេស</h2>
            <button className="text-coral font-body text-sm font-medium hover:text-coral-light transition-colors">
              មើលទាំងអស់
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {curatedPicks.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 bg-dark-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="relative h-72 bg-gradient-to-br from-amber-900/40 to-dark-card flex items-center justify-center text-9xl">
                  {item.image}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="text-center">
                      <p className="text-amber-200/60 text-xs tracking-widest mb-1">ម្ហូបឆ្នើម</p>
                      <p className="text-amber-100 text-3xl font-headline font-bold tracking-wider">ម្ហូបឆ្នើម</p>
                      <p className="text-amber-200/80 text-sm tracking-widest">ការងារសុវត្ថិភាព</p>
                    </div>
                  </div>
                  <span className={`absolute bottom-4 left-4 ${item.badgeColor} text-dark text-xs font-body font-bold px-3 py-1 rounded-full`}>
                    {item.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-headline font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-body">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ស្វែងរកប្រភេទ */}
        <section>
          <h2 className="text-2xl font-headline font-bold mb-5">ស្វែងរកប្រភេទ</h2>
          <div className="grid grid-cols-4 gap-4">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="flex flex-col items-center gap-3 p-4 bg-dark-card rounded-2xl hover:bg-dark-card/80 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-900/30 to-dark rounded-full flex items-center justify-center text-3xl">
                  {genre.icon}
                </div>
                <span className="text-xs font-body font-bold tracking-wide">{genre.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* កំពុងពេញនិយម */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-headline font-bold">កំពុងពេញនិយម</h2>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-coral"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>

          <div className="space-y-4">
            {trending.map((item) => (
              <div
                key={item.id}
                className="bg-dark-card rounded-3xl p-4 flex items-center gap-4 hover:bg-dark-card/80 transition-all cursor-pointer"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-amber-800/40 to-dark-card rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                  🥘
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs">{item.badgeIcon}</span>
                    <span className="text-xs font-body font-bold text-tertiary tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-headline font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-xs font-body line-clamp-2">{item.description}</p>
                  <p className="text-coral text-xl font-headline font-bold mt-2">${item.price.toFixed(2)}</p>
                </div>
                <button className="btn-primary px-4 py-2 text-sm flex-shrink-0">
                  +
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
