'use client'

import { Users, Target, Eye } from 'lucide-react'

const sections = [
  {
    id: 1,
    label: 'អំពីសកម្មភាពក្រុម',
    emoji: '👥',
    icon: Users,
    gradient: 'from-blue-800 to-blue-950',
    border: 'border-blue-600/40',
    content: 'ក្រុមរបស់យើងធ្វើការជាមួយគ្នាដើម្បីផ្សព្វផ្សាយចំណេះដឹងអំពីសុវត្ថិភាពអាហារ និងសុខភាពដល់កុមារ និងគ្រួសារនៅទូទាំងប្រទេស។',
  },
  {
    id: 2,
    label: 'បេសកកម្ម',
    emoji: '🎯',
    icon: Target,
    gradient: 'from-coral/80 to-red-950',
    border: 'border-coral/40',
    content: 'បេសកកម្មរបស់យើងគឺលើកកម្ពស់ការយល់ដឹងអំពីចំណីអាហារដែលមានសុវត្ថិភាព ដើម្បីការពារសុខភាពកុមារ និងកាត់បន្ថយជំងឺដែលបណ្តាលមកពីអាហារ។',
  },
  {
    id: 3,
    label: 'ចក្ខុវិស័យ',
    emoji: '🌟',
    icon: Eye,
    gradient: 'from-purple-800 to-purple-950',
    border: 'border-purple-600/40',
    content: 'ចក្ខុវិស័យរបស់យើងគឺឃើញសង្គមមួយដែលកុមារគ្រប់រូបទទួលបានអាហារដែលមានសុវត្ថិភាព មានជីវជាតិ និងមានសុខភាពល្អ។',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="flex items-center justify-between px-5 py-4">
          <button className="text-coral hover:text-coral-light transition-colors">
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

      <main className="px-5 py-6 space-y-5">
        {/* ចំណងជើង */}
        <div className="text-center py-4">
          <div className="text-6xl mb-3">🍽️</div>
          <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">អំពីយើង</p>
          <h2 className="text-3xl font-headline font-bold">SafeEat</h2>
          <p className="text-gray-400 font-body text-sm mt-1">ស្វែងយល់អំពីក្រុម និងគោលដៅរបស់យើង</p>
        </div>

        {/* Button ៣ */}
        {sections.map((s) => (
          <button
            key={s.id}
            className={`w-full bg-gradient-to-br ${s.gradient} border ${s.border} rounded-3xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all shadow-xl text-left`}
          >
            <span className="text-5xl flex-shrink-0">{s.emoji}</span>
            <div>
              <h3 className="font-headline font-bold text-xl text-white mb-1">{s.label}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{s.content}</p>
            </div>
          </button>
        ))}
      </main>
    </div>
  )
}
