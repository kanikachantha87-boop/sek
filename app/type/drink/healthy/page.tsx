'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const drinks = [
    {
        emoji: '💧',
        name: 'ទឹកស្អាត',
        sub: 'Natural Water',
        color: 'from-blue-800 to-blue-950',
        border: 'border-blue-600/30',
        nutrients: 'H₂O · អេឡិចត្រូលីត',
        intro: 'ទឹកគឺជាភេសជ្ជៈដ៏សំខាន់បំផុតសម្រាប់ជីវិត និងជាគ្រឹះនៃសុខភាពល្អ។',
        benefits: [
            'ជួយសម្រួលដល់ការរំលាយអាហារ និងបញ្ចេញជាតិពុលពីក្នុងខ្លួន',
            'រក្សាសំណើមដល់ស្បែក ធ្វើឱ្យស្បែកមានពន្លឺ និងស្រស់ថ្លា',
            'ជួយឱ្យខួរក្បាលដំណើរការបានល្អ និងកាត់បន្ថយអាការៈឈឺក្បាល',
        ],
    },
    {
        emoji: '🍵',
        name: 'តែបៃតង',
        sub: 'Green Tea',
        color: 'from-green-800 to-green-950',
        border: 'border-green-600/30',
        nutrients: 'Polyphenols · Catechins · L-theanine',
        intro: 'តែបៃតងសម្បូរទៅដោយសារធាតុប្រឆាំងអុកស៊ីតកម្ម ដែលហៅថា Polyphenols និង Catechins។',
        benefits: [
            'ជួយសម្រកទម្ងន់ — បង្កើនការដុតរំលាយអាហារ (Metabolism)',
            'ការពារបេះដូង — កាត់បន្ថយកម្រិតកូឡេស្តេរ៉ុលអាក្រក់ និងការពារសរសៃឈាម',
            'ពង្រឹងខួរក្បាល — L-theanine ជួយឱ្យអារម្មណ៍ស្ងប់ និងបង្កើនការចងចាំ',
        ],
    },
    {
        emoji: '🍋',
        name: 'ទឹកក្រូចឆ្មារក្ដៅ',
        sub: 'Warm Lemon Water',
        color: 'from-yellow-700 to-yellow-950',
        border: 'border-yellow-500/30',
        nutrients: 'វីតាមីន C · Citric Acid · Alkaline',
        intro: 'ការញ៉ាំទឹកក្រូចឆ្មារនៅពេលព្រឹក គឺជាទម្លាប់ដ៏ល្អបំផុតសម្រាប់សុខភាព។',
        benefits: [
            'សម្បូរវីតាមីន C — ជួយពង្រឹងប្រព័ន្ធការពាររាងកាយ ប្រឆាំងនឹងជំងឺផ្តាសាយ',
            'តុល្យភាព pH — ជួយធ្វើឱ្យរាងកាយមានតុល្យភាពអាល់កាឡាំង',
            'ជំនួយការរំលាយអាហារ — ជួយជំរុញឱ្យថ្លើមផលិតទឹកប្រមាត់',
        ],
    },
    {
        emoji: '🥤',
        name: 'ទឹកផ្លែឈើ និងបន្លែស្រស់',
        sub: 'Fresh Smoothies / Juices',
        color: 'from-lime-700 to-lime-950',
        border: 'border-lime-500/30',
        nutrients: 'វីតាមីន · ជាតិរ៉ែ · Fiber',
        intro: 'ការកិនបន្លែបៃតង (ដូចជា ស្ពៃជើងទា ឬការ៉ុត) រួមជាមួយផ្លែឈើ ផ្តល់នូវវីតាមីន និងជាតិរ៉ែយ៉ាងច្រើន។',
        benefits: [
            'ការ៉ុត — ជំនួយភ្នែក និងស្បែក',
            'ផ្លែបឺរ — ផ្តល់ខ្លាញ់ល្អដល់បេះដូង និងខួរក្បាល',
            'មើមឆៃថាវក្រហម (Beetroot) — ជួយបញ្ចុះសម្ពាធឈាម និងបង្កើនកម្លាំងសាច់ដុំ',
        ],
    },
    {
        emoji: '🥥',
        name: 'ទឹកដូង',
        sub: 'Coconut Water',
        color: 'from-cyan-700 to-cyan-950',
        border: 'border-cyan-500/30',
        nutrients: 'Electrolytes · ប៉ូតាស្យូម · ម៉ាញ៉េស្យូម',
        intro: 'ទឹកដូងគឺជា "ភេសជ្ជៈកីឡា" ពីធម្មជាតិ ដែលសម្បូរទៅដោយអេឡិចត្រូលីត (Electrolytes)។',
        benefits: [
            'បំពេញជាតិទឹក — ល្អបំផុតសម្រាប់អ្នកហាត់ប្រាណ ឬអ្នកដែលបាត់បង់ជាតិទឹកខ្លាំង',
            'ប៉ូតាស្យូមខ្ពស់ — ជួយរក្សាសម្ពាធឈាមឱ្យមានស្ថិរភាព',
            'ការពារបញ្ហាក្រកដុំសាច់ដុំ',
        ],
    },
    {
        emoji: '🫖',
        name: 'ទឹកខ្ញី',
        sub: 'Ginger Tea',
        color: 'from-amber-700 to-amber-950',
        border: 'border-amber-500/30',
        nutrients: 'Gingerol · ប្រឆាំងរលាក · ប្រឆាំងចង្អោរ',
        intro: 'ខ្ញីគឺជាឱសថបុរាណដែលមានប្រសិទ្ធភាពខ្ពស់សម្រាប់បញ្ហាក្នុងពោះ។',
        benefits: [
            'កាត់បន្ថយការចង្អោរ — ល្អសម្រាប់អ្នកពុលឡាន ឬស្ត្រីមានផ្ទៃពោះ',
            'ប្រឆាំងការរលាក — ជួយកាត់បន្ថយការឈឺចាប់សន្លាក់ និងសាច់ដុំ',
            'ជំនួយក្រពះ — បំបាត់ការហើមពោះ និងខ្យល់ក្នុងពោះ',
        ],
    },
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

            <main className="px-5 py-6 space-y-5">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">💧</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ល្អសម្រាប់សុខភាព</p>
                    <h2 className="text-2xl font-headline font-bold">ភេសជ្ជៈជំនួយសុខភាព</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">ភេសជ្ជៈ ៦ ប្រភេទដែលល្អបំផុត</p>
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
                        <p className="font-body text-sm text-white/80 leading-relaxed mb-3 italic">{d.intro}</p>
                        <div className="space-y-1.5">
                            <p className="text-white/60 text-xs font-body font-bold tracking-wider mb-2">អត្ថប្រយោជន៍៖</p>
                            {d.benefits.map((b, j) => (
                                <div key={j} className="flex items-start gap-2">
                                    <span className="text-white/60 mt-0.5 flex-shrink-0 text-xs">✦</span>
                                    <p className="font-body text-sm text-white/85 leading-snug">{b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}
