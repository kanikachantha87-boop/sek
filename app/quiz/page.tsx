'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { ArrowRight, Check } from 'lucide-react'

const cuisines = [
  {
    id: 'italian',
    name: 'Italian',
    tag: 'ITALIAN',
    subtitle: 'THE CLASSIC',
    image: '🍝',
    gradient: 'from-amber-900/40 to-dark-card',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    tag: 'JAPANESE',
    subtitle: 'PURE ARTISTRY',
    image: '🍣',
    gradient: 'from-red-900/40 to-dark-card',
  },
  {
    id: 'mexican',
    name: 'Mexican',
    tag: 'MEXICAN',
    subtitle: 'BOLD & SPICY',
    image: '🌮',
    gradient: 'from-green-900/40 to-dark-card',
    selected: true,
  },
  {
    id: 'thai',
    name: 'Thai',
    tag: 'THAI',
    subtitle: 'EXOTIC BALANCE',
    image: '🍜',
    gradient: 'from-orange-900/40 to-dark-card',
  },
]

export default function QuizPage() {
  const [selected, setSelected] = useState<string>('mexican')
  const progress = 60

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="px-5 py-6">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">
                FLAVOR DIMENSIONS
              </p>
              <p className="text-lg font-headline">
                Question 03, <span className="text-coral">{progress}%</span> Complete
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-headline font-bold text-coral">0m</div>
            </div>
          </div>
          <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-coral to-coral-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-3xl font-headline font-bold mb-2 leading-tight">
            What's your favorite cuisine tonight?
          </h2>
          <p className="text-gray-400 text-sm font-body italic">
            តើអ្នកចូលចិត្តម្ហូបអ្វីនៅយប់នេះ
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {cuisines.map((cuisine) => {
            const isSelected = selected === cuisine.id
            
            return (
              <button
                key={cuisine.id}
                onClick={() => setSelected(cuisine.id)}
                className={`relative group ${isSelected ? 'scale-105' : 'hover:scale-102'} transition-transform duration-200`}
              >
                <div className={`
                  rounded-3xl overflow-hidden shadow-xl
                  ${isSelected ? 'ring-4 ring-tertiary' : 'ring-2 ring-transparent hover:ring-gray-700'}
                  transition-all duration-200
                `}>
                  {/* Card Content */}
                  <div className={`relative h-56 bg-gradient-to-br ${cuisine.gradient} p-4 flex flex-col`}>
                    {/* Tag */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{cuisine.id === 'italian' ? '🍴' : cuisine.id === 'japanese' ? '✨' : cuisine.id === 'mexican' ? '🔥' : '🍲'}</span>
                        <span className="text-coral text-xs font-body font-bold tracking-wider">
                          {cuisine.tag}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 bg-tertiary rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center text-7xl my-2">
                      {cuisine.image}
                    </div>

                    {/* Title */}
                    <div className="mt-auto">
                      <p className="text-gray-400 text-xs font-body tracking-wider mb-1">
                        {cuisine.subtitle}
                      </p>
                      <h3 className="text-2xl font-headline font-bold">
                        {cuisine.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Selected Glow Effect */}
                {isSelected && (
                  <div className="absolute inset-0 bg-tertiary/10 rounded-3xl blur-xl -z-10" />
                )}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <button className="w-full btn-primary flex items-center justify-center gap-3 text-lg">
          <span>Next Step</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Step Indicator */}
        <p className="text-center text-gray-500 text-xs font-body tracking-wider mt-6">
          STEP 3 OF 5 • បន្តការជួញ
        </p>
      </main>
    </div>
  )
}
