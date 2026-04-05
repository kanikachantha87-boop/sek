'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const drinks = [
    { emoji: '💧', name: 'ទឹកស្អាត', sub: 'Water', color: 'from-blue-800 to-blue-950', border: 'border-blue-600/30', nutrients: 'H₂O · អេឡិចត្រូលីត', content: 'ជាភេសជ្ជៈដ៏ល្អបំផុតសម្រាប់រាងកាយ។ ជួយបំពេញជាតិទឹក គ្រប់គ្រងសីតុណ្ហភាពរាងកាយ និងជួយដល់ការដំណើរការរបស់គ្រប់សរីរាង្គ។' },
    { emoji: '🍵', name: 'តែបៃតង', sub: 'Green Tea', color: 'from-green-800 to-green-950', border: 'border-green-600/30', nutrients: 'Catechins · Antioxidants', content: 'សម្បូរទៅដោយសារធាតុប្រឆាំងអុកស៊ីតកម្ម ជួយបង្កើនការដុតបំផ្លាញជាតិខ្លាញ់ ការពារជំងឺបេះដូង និងជួយដល់ការចងចាំ។' },
    { emoji: '🥛', name: 'ទឹកដោះគោ', sub: 'Milk', color: 'from-slate-600 to-slate-900', border: 'border-slate-500/30', nutrients: 'កាល់ស្យូម · វីតាមីន D · Protein', content: 'ជាប្រភពកាល់ស្យូម និងវីតាមីន D ដ៏ល្អ ជួយពង្រឹងឆ្អឹង និងធ្មេញ ល្អសម្រាប់កុមារដែលកំពុងលូតលាស់។' },
    { emoji: '🍊', name: 'ទឹកផ្លែឈើស្រស់', sub: 'Fresh Juice', color: 'from-orange-700 to-orange-950', border: 'border-orange-500/30', nutrients: 'វីតាមីន C · Fiber', content: 'ទឹកផ្លែឈើស្រស់ (គ្មានស្ករបន្ថែម) ផ្តល់វីតាមីន និងជាតិរ៉ែ ជួយពង្រឹងប្រព័ន្ធភាពស៊ាំ និងផ្តល់ថាមពល។' },
    { emoji: '🫖', name: 'តែឱសថ', sub: 'Herbal Tea', color: 'from-amber-800 to-amber-950', border: 'border-amber-600/30', nutrients: 'Flavonoids · ប្រឆាំងរលាក', content: 'តែឱសថដូចជា តែខ្ញី តែក្រូចឆ្មារ ជួយបំបាត់ការឈឺក្រពះ ជួយដល់ដំណេក និងបន្ថយស្ត្រេស។' },
    { emoji: '🥤', name: 'ទឹកដូង', sub: 'Coconut Water', color: 'from-cyan-700 to-cyan-950', border: 'border-cyan-500/30', nutrients: 'ប៉ូតាស្យូម · Electrolytes', content: 'ជាអេឡិចត្រូលីតធម្មជាតិ ជួយបំពេញជាតិទឹក និងជាតិរ៉ែបានយ៉ាងលឿន ល្អសម្រាប់ក្រោយការហាត់ប្រាណ។' },
    { emoji: '🫐', name: 'ទឹកស្ម័រទ្ធី', sub: 'Smoothie', color: 'from-purple-700 to-purple-950', border: 'border-purple-500/30', nutrients: 'Fiber · វីតាមីន · Protein', content: 'ស្ម័រទ្ធីផ្លែឈើ និងបន្លែ ផ្តល់សារធាតុចិញ្ចឹមច្រើន ជួយដល់ការរំលាយអាហារ និងផ្តល់ថាមពលយូរអង្វែង។' },
    { emoji: '☕', name: 'កាហ្វេ (ក្នុងកម្រិតសមស្រប)', sub: 'Coffee (moderate)', color: 'from-stone-700 to-stone-950', border: 'border-stone-500/30', nutrients: 'Caffeine · Antioxidants', content: 'ការផឹកកាហ្វេក្នុងកម្រិតសមស្រប (១-២ ពែងក្នុងមួយថ្ងៃ) ជួយបង្កើនការផ្តោតអារម្មណ៍ និងមានសារធាតុប្រឆាំងអុកស៊ីតកម្ម។' },
]

export default function HealthyDrinkPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">ភេសជ្ជៈជំនួយសុខភាព</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-4">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">💧</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ល្អសម្រាប់សុខភាព</p>
                    <h2 className="text-2xl font-headline font-bold">ភេសជ្ជៈជំនួយសុខភាព</h2>
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
                        <div className="bg-white/10 rounded-2xl px-3 py-1.5 inline-block mb-3">
                            <p className="text-white/80 text-xs font-body">💊 {d.nutrients}</p>
                        </div>
                        <p className="font-body text-sm text-white/85 leading-relaxed">{d.content}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}
