'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const drinks = [
    { emoji: '🥤', name: 'ភេសជ្ជៈកាបូន (Soda)', sub: 'Carbonated Drinks', color: 'from-red-800 to-red-950', border: 'border-red-600/30', risk: 'ជាតិស្ករខ្ពស់ · អាស៊ីត', content: 'មានជាតិស្ករខ្ពស់ណាស់ (ប្រហែល ១០ ស្លាបព្រា ក្នុង ១ កំប៉ុង) ធ្វើឱ្យធ្មេញពុក បង្កជំងឺទឹកនោមផ្អែម និងធ្វើឱ្យឡើងទម្ងន់។' },
    { emoji: '⚡', name: 'ភេសជ្ជៈប៉ូវកម្លាំង', sub: 'Energy Drinks', color: 'from-yellow-700 to-yellow-950', border: 'border-yellow-500/30', risk: 'Caffeine ខ្ពស់ · ស្ករ', content: 'មាន Caffeine ខ្ពស់ណាស់ ធ្វើឱ្យបេះដូងលោតលឿន ឡើងសម្ពាធឈាម និងបង្កការគេងមិនលក់ ជាពិសេសសម្រាប់កុមារ និងក្មេងជំទង់។' },
    { emoji: '🧋', name: 'ភេសជ្ជៈស្ករច្រើន', sub: 'Sugary Drinks', color: 'from-pink-800 to-pink-950', border: 'border-pink-600/30', risk: 'ជាតិស្ករ · កាឡូរី', content: 'ភេសជ្ជៈដូចជា ទឹកក្រូចកំប៉ុង ភេសជ្ជៈផ្អែម មានជាតិស្ករ និងកាឡូរីខ្ពស់ ធ្វើឱ្យឡើងទម្ងន់ និងបង្កជំងឺទឹកនោមផ្អែម។' },
    { emoji: '🍺', name: 'ភេសជ្ជៈមានជាតិអាល់កុល', sub: 'Alcoholic Drinks', color: 'from-amber-800 to-amber-950', border: 'border-amber-600/30', risk: 'អាល់កុល · ជាតិពុល', content: 'ការផឹកអាល់កុលច្រើន ធ្វើឱ្យខូចថ្លើម ខូចប្រព័ន្ធប្រសាទ បង្កជំងឺមហារីក និងប៉ះពាល់ដល់ទំនាក់ទំនងគ្រួសារ។' },
    { emoji: '🧃', name: 'ទឹកផ្លែឈើកំប៉ុង (ដែលមានស្ករ)', sub: 'Packaged Juice', color: 'from-orange-800 to-orange-950', border: 'border-orange-600/30', risk: 'ស្ករបន្ថែម · Preservatives', content: 'ទោះបីហៅថា "ទឹកផ្លែឈើ" ប៉ុន្តែភាគច្រើនមានស្ករបន្ថែម និងសារធាតុថែរក្សា ដែលមិនល្អសម្រាប់សុខភាព ជាពិសេសសម្រាប់កុមារ។' },
    { emoji: '☕', name: 'កាហ្វេច្រើនពេក', sub: 'Excessive Coffee', color: 'from-stone-800 to-stone-950', border: 'border-stone-600/30', risk: 'Caffeine ច្រើន · ស្ត្រេស', content: 'ការផឹកកាហ្វេច្រើនពេក (លើស ៤ ពែង/ថ្ងៃ) ធ្វើឱ្យបេះដូងលោតលឿន ឡើងសម្ពាធឈាម ស្ត្រេស និងគេងមិនលក់។' },
    { emoji: '🥛', name: 'ភេសជ្ជៈទឹកដោះគោរសជាតិ (ស្ករច្រើន)', sub: 'Flavored Milk', color: 'from-rose-800 to-rose-950', border: 'border-rose-600/30', risk: 'ស្ករ · ជាតិខ្លាញ់', content: 'ទឹកដោះគោរសជាតិ (សូកូឡា ស្ត្រប៊ឺរី) ភាគច្រើនមានស្ករ និងជាតិខ្លាញ់ខ្ពស់ ដែលអាចបង្កឱ្យឡើងទម្ងន់ ប្រសិនបើផឹកច្រើន។' },
]

const tips = [
    'ជៀសវាងភេសជ្ជៈដែលមានជាតិស្ករ ឬ Caffeine ខ្ពស់',
    'ជ្រើសរើសទឹកស្អាត ឬទឹកផ្លែឈើស្រស់ជំនួស',
    'អានស្លាកផ្លាកមុននឹងទិញ ពិនិត្យបរិមាណស្ករ',
    'កុំឱ្យកុមារផឹកភេសជ្ជៈប៉ូវកម្លាំង ឬ Soda',
]

export default function HarmfulDrinkPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">ភេសជ្ជៈប៉ះពាល់សុខភាព</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-4">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">⚠️</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">គ្រោះថ្នាក់</p>
                    <h2 className="text-2xl font-headline font-bold">ភេសជ្ជៈគ្រឿងកំប៉ុង</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">ប្រភេទដែលប៉ះពាល់ដល់សុខភាព</p>
                </div>

                {drinks.map((d, i) => (
                    <div key={i} className={`bg-gradient-to-br ${d.color} border ${d.border} rounded-3xl p-5 shadow-xl`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{d.emoji}</span>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-white">{d.name}</h3>
                                <p className="text-white/60 text-xs font-body">{d.sub}</p>
                            </div>
                        </div>
                        <div className="bg-red-500/20 rounded-2xl px-3 py-1.5 inline-block mb-3">
                            <p className="text-red-300 text-xs font-body">⚠️ {d.risk}</p>
                        </div>
                        <p className="font-body text-sm text-white/85 leading-relaxed">{d.content}</p>
                    </div>
                ))}

                <div className="bg-gradient-to-br from-green-900 to-green-950 border border-green-500/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-lg text-white mb-3">💡 ដំបូន្មានការពារ</h3>
                    <ul className="space-y-2">
                        {tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/85 text-sm font-body">
                                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}
