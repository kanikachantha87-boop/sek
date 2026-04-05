'use client'

import Header from '@/components/Header'
import { Search, ChevronRight } from 'lucide-react'

const curatedPicks = [
  {
    id: 1,
    title: 'Artisan Truffle Tagliatelle',
    subtitle: "Chef's Signature Selection",
    badge: 'SEASONAL SPECIAL',
    badgeColor: 'bg-tertiary',
    image: '🍝',
  },
  {
    id: 2,
    title: 'The Wagyu Burger',
    subtitle: 'Butcher Premium Blend',
    badge: 'BEST SELLER',
    badgeColor: 'bg-red-500',
    image: '🍔',
  },
]

const genres = [
  { name: 'PIZZA', icon: '🍕' },
  { name: 'BURGER', icon: '🍔' },
  { name: 'SALAD', icon: '🥗' },
  { name: 'SUSHI', icon: '🍣' },
]

const trending = [
  {
    id: 1,
    name: 'The Nordic Salmon Bowl',
    description: 'Smoked Atlantic salmon with dill-infused yogurt dressing and organic...',
    price: 18.50,
    badge: 'ORGANIC CERTIFIED',
    badgeIcon: '🌿',
  },
  {
    id: 2,
    name: 'Black Truffle Burrata',
    description: 'Stone-baked crust topped with creamy burrata and fresh black...',
    price: 24.00,
    badge: "CHEF'S CHOICE",
    badgeIcon: '⭐',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="px-5 py-6 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for seasonal flavors..."
            className="input-search pl-14"
          />
        </div>

        {/* Curated Picks */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-headline font-bold">Curated Picks</h2>
            <button className="text-coral font-body text-sm font-medium hover:text-coral-light transition-colors">
              View All
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
                      <p className="text-amber-200/60 text-xs tracking-widest mb-1">GOURMET</p>
                      <p className="text-amber-100 text-4xl font-headline font-bold tracking-wider">GOURMET</p>
                      <p className="text-amber-200/80 text-sm tracking-widest">SAFE WORK</p>
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

        {/* Explore Genres */}
        <section>
          <h2 className="text-2xl font-headline font-bold mb-5">Explore Genres</h2>
          <div className="grid grid-cols-4 gap-4">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="flex flex-col items-center gap-3 p-4 bg-dark-card rounded-2xl hover:bg-dark-card/80 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-900/30 to-dark rounded-full flex items-center justify-center text-3xl">
                  {genre.icon}
                </div>
                <span className="text-xs font-body font-bold tracking-wider">{genre.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Trending Now */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-headline font-bold">Trending Now</h2>
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
                <button className="btn-primary px-6 py-2 text-sm flex-shrink-0">
                  Add
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
