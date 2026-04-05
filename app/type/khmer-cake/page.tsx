'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const cakes = [
    {
        emoji: '🫓',
        name: 'នំអន្សមជ្រូក',
        sub: 'Nom Ansom Chrouk',
        color: 'from-green-800 to-green-950',
        border: 'border-green-600/30',
        ingredients: 'អង្ករដំណើប · សណ្តែកខៀវ · សាច់ជ្រូកបីជាន់ · ម្រេច · អំបិល',
        benefits: [
            'ផ្តល់ថាមពលខ្លាំងពីកាបូអ៊ីដ្រាត (អង្ករ) និងប្រូតេអ៊ីន (សាច់ និងសណ្តែក)',
            'ការប្រើម្រេចជួយកម្ចាត់ខ្យល់ក្នុងក្រពះ និងជួយដល់ការរំលាយអាហារ',
        ],
    },
    {
        emoji: '🍌',
        name: 'នំអន្សមចេក',
        sub: 'Nom Ansom Chek',
        color: 'from-yellow-700 to-yellow-950',
        border: 'border-yellow-500/30',
        ingredients: 'អង្ករដំណើប · ចេកណំវ៉ាទុំ · ខ្ទិះដូង · សណ្តែកខ្មៅ',
        benefits: [
            'ចេកណំវ៉ាសម្បូរប៉ូតាស្យូម ជួយដល់ដំណើរការបេះដូង និងសាច់ដុំ',
            'សណ្តែកខ្មៅផ្តល់ជាតិសរសៃខ្ពស់ ជួយការពារការទល់លាមក',
        ],
    },
    {
        emoji: '🌴',
        name: 'នំអាកោត្នោត',
        sub: 'Nom Akor Tnot',
        color: 'from-amber-700 to-amber-950',
        border: 'border-amber-500/30',
        ingredients: 'ម្សៅអង្ករ · សាច់ត្នោតទុំ · ស្ករត្នោត · ទឹកដូង',
        benefits: [
            'សាច់ត្នោតទុំមានសារធាតុប្រឆាំងអុកស៊ីតកម្ម ជួយសម្រួលដល់ការបន្ទោបង់',
            'ស្ករត្នោតផ្តល់ជាតិរ៉ែ និងដែក ជួយដល់ការបង្កើតគ្រាប់ឈាម',
        ],
    },
    {
        emoji: '🫔',
        name: 'នំគម',
        sub: 'Nom Kom',
        color: 'from-lime-700 to-lime-950',
        border: 'border-lime-500/30',
        ingredients: 'ម្សៅដំណើប · ស្នូលសណ្តែក ឬស្នូលដូងលាយស្ករត្នោត',
        benefits: [
            'ម្សៅដំណើបជួយឱ្យឆ្អែតបានយូរ',
            'ស្នូលដូងផ្តល់អាស៊ីតឡូរិក ជួយពង្រឹងប្រព័ន្ធភាពស៊ាំ និងធ្វើឱ្យស្បែកមានសំណើម',
        ],
    },
    {
        emoji: '🎃',
        name: 'នំល្ពៅ',
        sub: 'Nom Lpov',
        color: 'from-orange-700 to-orange-950',
        border: 'border-orange-500/30',
        ingredients: 'សាច់ល្ពៅ · ម្សៅអង្ករ · ខ្ទិះដូង · ស្ករ',
        benefits: [
            'ល្ពៅសម្បូរវីតាមីន A និង Beta-carotene ល្អខ្លាំងសម្រាប់ភ្នែក',
            'ជួយពង្រឹងកោសិកាការពាររាងកាយ',
        ],
    },
    {
        emoji: '🫙',
        name: 'នំគ្រក់',
        sub: 'Nom Krok',
        color: 'from-teal-700 to-teal-950',
        border: 'border-teal-500/30',
        ingredients: 'ម្សៅអង្ករ · ខ្ទិះដូង · ស្លឹកខ្ទឹម',
        benefits: [
            'ជាអាហារសម្រន់ដែលមានតុល្យភាព',
            'ស្លឹកខ្ទឹមជួយកម្ចាត់បាក់តេរីក្នុងពោះវៀន និងជួយដល់ប្រព័ន្ធដកដង្ហើម',
        ],
    },
    {
        emoji: '🌿',
        name: 'នំត្រាវ',
        sub: 'Nom Trav',
        color: 'from-emerald-700 to-emerald-950',
        border: 'border-emerald-500/30',
        ingredients: 'មើមត្រាវ · ម្សៅ · ខ្ទិះដូង · ស្ករ',
        benefits: [
            'មើមត្រាវសម្បូរ Fiber និងកាបូអ៊ីដ្រាតទាប ល្អសម្រាប់អ្នកគ្រប់គ្រងទម្ងន់',
            'ជួយសម្រួលដល់ការរំលាយអាហារ',
        ],
    },
    {
        emoji: '⚪',
        name: 'នំក្រូច',
        sub: 'Nom Krouch',
        color: 'from-slate-700 to-slate-950',
        border: 'border-slate-500/30',
        ingredients: 'ម្សៅដំណើប · ស្នូលសណ្តែកខៀវ · ល្ង',
        benefits: [
            'ល្ងសម្បូរជាតិកាល់ស្យូម ជួយឱ្យឆ្អឹងរឹងមាំ',
            'ខ្លាញ់ល្អក្នុងល្ងជួយដល់ខួរក្បាល',
        ],
    },
    {
        emoji: '🟡',
        name: 'នំគ្រាប់ខ្នុរ',
        sub: 'Nom Krob Khnor',
        color: 'from-yellow-800 to-yellow-950',
        border: 'border-yellow-600/30',
        ingredients: 'សណ្តែកខៀវបុកមដ្ឋ · ពងទា',
        benefits: [
            'ជាប្រភពប្រូតេអ៊ីនដ៏ល្អពីសណ្តែក និងពងទា',
            'ជួយជួសជុលកោសិកាដែលសឹក រីករឹលក្នុងរាងកាយ',
        ],
    },
    {
        emoji: '🍚',
        name: 'បាយក្តាំង',
        sub: 'Bay Kdang',
        color: 'from-rose-700 to-rose-950',
        border: 'border-rose-500/30',
        ingredients: 'អង្ករសម្រូប ឬអង្ករសបំពង · ទឹកត្រីផ្អែម',
        benefits: [
            'ផ្តល់ថាមពលរហ័ស និងងាយស្រួលរំលាយ',
            'បើប្រើអង្ករសម្រូប វានឹងផ្តល់វីតាមីន B ច្រើន',
        ],
    },
    {
        emoji: '🧇',
        name: 'នំពុម្ព',
        sub: 'Nom Pum',
        color: 'from-amber-800 to-amber-950',
        border: 'border-amber-600/30',
        ingredients: 'ម្សៅអង្ករ · ខ្ទិះដូង · ពងទា · ស្ករត្នោត · ល្ងខ្មៅ',
        benefits: [
            'ខ្ទិះដូងផ្តល់អាស៊ីតឡូរិក ជួយពង្រឹងភាពស៊ាំ ចំណែកពងទាផ្តល់ប្រូតេអ៊ីន',
            'ល្ងខ្មៅសម្បូរកាល់ស្យូម និងម៉ាញ៉េស្យូម ជួយឱ្យឆ្អឹងរឹងមាំ',
        ],
    },
    {
        emoji: '🍩',
        name: 'នំកង',
        sub: 'Nom Kong',
        color: 'from-brown-700 to-stone-950',
        border: 'border-stone-600/30',
        ingredients: 'ម្សៅដំណើប · ម្សៅអង្ករ · ស្ករត្នោតរំងាស់ · ល្ង',
        benefits: [
            'ផ្តល់ថាមពលរហ័ស សមស្របសម្រាប់អ្នកអស់កម្លាំង ឬធ្វើការធ្ងន់',
            'ជាតិស្ករត្នោត និងម្សៅដំណើបបំប្លែងជាថាមពលបានលឿន',
        ],
    },
    {
        emoji: '🔺',
        name: 'នំចាំង',
        sub: 'Nom Chang',
        color: 'from-indigo-700 to-indigo-950',
        border: 'border-indigo-500/30',
        ingredients: 'អង្ករដំណើបត្រាំទឹកដួស · ស្នូលសណ្តែកខៀវ (ជួនកាលសាច់ជ្រូក ឬស៊ុតប្រៃ)',
        benefits: [
            'ទឹកដួសមានធាតុត្រជាក់ ជួយកាត់បន្ថយកម្តៅក្នុងរាងកាយ',
            'សណ្តែកខៀវជួយដល់ការបន្ទោបង់ និងផ្តល់ប្រូតេអ៊ីន',
        ],
    },
]

export default function KhmerCakePage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">មេរៀនអំពីនំខ្មែរ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-4">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🍮</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ចំណេះដឹង</p>
                    <h2 className="text-2xl font-headline font-bold">នំខ្មែរ ១៣ ប្រភេទ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">គ្រឿងផ្សំ និងអត្ថប្រយោជន៍</p>
                </div>

                {cakes.map((c, i) => (
                    <div key={i} className={`bg-gradient-to-br ${c.color} border ${c.border} rounded-3xl p-5 shadow-xl`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{c.emoji}</span>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-white">{c.name}</h3>
                                <p className="text-white/60 text-xs font-body">{c.sub}</p>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl px-3 py-1.5 inline-block mb-3">
                            <p className="text-white/80 text-xs font-body">🧂 {c.ingredients}</p>
                        </div>
                        <p className="text-white/60 text-xs font-body font-bold tracking-wider mb-2">អត្ថប្រយោជន៍៖</p>
                        <div className="space-y-1.5">
                            {c.benefits.map((b, j) => (
                                <div key={j} className="flex items-start gap-2">
                                    <span className="text-white/50 flex-shrink-0 mt-0.5 text-xs">✦</span>
                                    <p className="font-body text-sm text-white/85 leading-snug">{b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* គន្លឹះ */}
                <div className="bg-gradient-to-br from-green-900 to-green-950 border border-green-500/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-lg text-white mb-3">💡 គន្លឹះសុខភាព</h3>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                        <p className="font-body text-sm text-white/85 leading-relaxed">
                            ការទទួលទាននំទាំងនេះជាមួយ <span className="text-green-300 font-bold">ទឹកតែក្ដៅៗ</span> នឹងជួយសម្រួលដល់ការរំលាយជាតិខ្លាញ់ពីខ្ទិះដូង និងធ្វើឱ្យអារម្មណ៍ស្រស់ស្រាយ។
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
