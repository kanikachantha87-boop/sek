'use client'

import { Settings, Camera, X, Play } from 'lucide-react'

const curators = [
  { name: 'នាយកផ្នែករចនា', image: '👨‍🍳' },
  { name: 'ប្រធានផ្នែកម្ហូប', image: '👨‍🍳' },
  { name: 'អ្នករចនា UX', image: '👩‍💼' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-peach text-dark pb-24">
      <header className="sticky top-0 z-40 bg-light-peach border-b border-coral/20">
        <div className="flex items-center justify-between px-5 py-4">
          <button className="text-dark hover:text-coral transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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

      <main className="px-6 py-8 space-y-8">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-6 bg-dark rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center text-7xl">
              👨‍🍳
            </div>
          </div>
          <div className="text-coral/60 text-xs tracking-[0.3em] font-body font-light mb-2">
            សិល្បៈ
          </div>
          <h2 className="font-headline text-5xl font-bold leading-tight">
            <span className="text-gray-300">លើកកម្ពស់</span>
            <br />
            <span className="text-gray-300">សិល្បៈ </span>
            <span className="text-coral">ម្ហូប</span>
            <span className="text-gray-300">។</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-900/90 to-dark-burgundy text-light-peach rounded-3xl p-8 shadow-xl">
          <h3 className="font-headline text-2xl font-bold mb-4">បេសកកម្មរបស់យើង</h3>
          <p className="font-body text-sm leading-relaxed text-light-peach/90">
            នៅ កន្លែងធ្វើម្ហូប យើងជឿថាការចម្អិនម្ហូបគឺច្រើនជាងការរៀបចំ។
            វាជាការសន្ទនារវាងវប្បធម៌ ធម្មជាតិ និងការច្នៃប្រឌិត។
            វេទិការបស់យើងភ្ជាប់គម្លាតរវាងភាពងាយស្រួលឌីជីថល និងព្រលឹងសិប្បករ
            ដើម្បីផ្តល់អំណាចដល់មេចុងភៅក្នុងផ្ទះឱ្យស្វែងរកទេពកោសល្យខ្លួនឯង។
          </p>
        </div>

        <div className="bg-gradient-to-br from-coral-light to-coral text-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="w-5 h-5" />
            <span className="font-body text-xs tracking-widest opacity-90">កំណែចាស់</span>
          </div>
          <div className="font-headline text-4xl font-bold">១.០.០</div>
        </div>

        <section>
          <h3 className="font-headline text-3xl font-bold text-center mb-8 text-dark">
            អ្នករៀបចំ
          </h3>
          <div className="space-y-8">
            {curators.map((curator, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-dark mb-4 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-6xl grayscale">
                    {curator.image}
                  </div>
                </div>
                <div className="text-coral/60 text-xs tracking-[0.3em] font-body font-medium">
                  {curator.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
          <p className="text-coral/60 text-xs tracking-[0.3em] font-body font-medium mb-6">
            ចូលរួមជាមួយយើង
          </p>
          <div className="flex justify-center gap-6">
            <button className="w-14 h-14 bg-gradient-to-br from-amber-900 to-dark-burgundy rounded-full flex items-center justify-center text-coral hover:scale-110 transition-transform shadow-lg">
              <Camera className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 bg-gradient-to-br from-amber-900 to-dark-burgundy rounded-full flex items-center justify-center text-coral hover:scale-110 transition-transform shadow-lg">
              <X className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 bg-gradient-to-br from-amber-900 to-dark-burgundy rounded-full flex items-center justify-center text-coral hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
