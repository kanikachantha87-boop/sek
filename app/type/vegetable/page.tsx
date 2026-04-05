'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const lessons = [
    {
        id: 1,
        title: 'បន្លែស្លឹកបៃតងចាស់',
        emoji: '🥬',
        subtitle: 'ខាត់ណា · ស្ពៃចង្កឹះ · ផ្ទី',
        nutrients: 'វីតាមីន A, C, K · ជាតិដែក',
        color: 'from-green-800 to-green-950',
        border: 'border-green-600/30',
        content: 'បន្លែទាំងនេះសម្បូរទៅដោយ វីតាមីន A, C, K និងជាតិដែក។ ជួយពង្រឹងប្រព័ន្ធការពាររាងកាយ ជំនួយដល់ឆ្អឹង និងជួយឱ្យឈាមរត់បានល្អ។ លើសពីនេះ វាក៏មានសារធាតុប្រឆាំងអុកស៊ីតកម្មដែលជួយកាត់បន្ថយហានិភ័យនៃជំងឺមហារីក។',
    },
    {
        id: 2,
        title: 'បន្លែពណ៌ទឹកក្រូច និងលឿង',
        emoji: '🥕',
        subtitle: 'ការ៉ុត · ល្ពៅ',
        nutrients: 'Beta-carotene · វីតាមីន A',
        color: 'from-orange-800 to-orange-950',
        border: 'border-orange-600/30',
        content: 'បន្លែក្រុមនេះសម្បូរទៅដោយ Beta-carotene ដែលរាងកាយបំប្លែងទៅជាវីតាមីន A។ ជួយថែរក្សាសុខភាពភ្នែកឱ្យភ្លឺច្បាស់ ការពារស្បែកពីការខូចខាតដោយកម្ដៅថ្ងៃ និងជួយឱ្យស្បែកមានសុខភាពល្អ។',
    },
    {
        id: 3,
        title: 'ផ្កាខាត់ណាខៀវ',
        emoji: '🥦',
        subtitle: 'Broccoli · Superfood',
        nutrients: 'សរសៃអាហារ · វីតាមីន C, K',
        color: 'from-emerald-800 to-emerald-950',
        border: 'border-emerald-600/30',
        content: 'ខាត់ណាខៀវត្រូវបានគេចាត់ទុកជា "Superfood" ព្រោះវាមានសារធាតុចិញ្ចឹមខ្ពស់បំផុត។ សម្បូរទៅដោយសរសៃអាហារជួយដល់ការរំលាយអាហារ កាត់បន្ថយជាតិខ្លាញ់អាក្រក់ និងជួយបន្សាបជាតិពុលក្នុងរាងកាយ។',
    },
    {
        id: 4,
        title: 'ប៉េងប៉ោះ',
        emoji: '🍅',
        subtitle: 'Lycopene · ការពារបេះដូង',
        nutrients: 'Lycopene · វីតាមីន C',
        color: 'from-red-800 to-red-950',
        border: 'border-red-600/30',
        content: 'ប៉េងប៉ោះមានសារធាតុ Lycopene ដែលជាអ្នកការពារបេះដូងយ៉ាងពូកែ។ ជួយកាត់បន្ថយសម្ពាធឈាម ការពារជំងឺបេះដូង និងកាត់បន្ថយហានិភ័យនៃជំងឺមហារីកក្រពេញប្រូស្តាតចំពោះបុរស។',
    },
    {
        id: 5,
        title: 'ខ្ទឹមស និងខ្ទឹមបារាំង',
        emoji: '🧄',
        subtitle: 'ឱសថធម្មជាតិ',
        nutrients: 'Allicin · សារធាតុប្រឆាំងបាក់តេរី',
        color: 'from-amber-800 to-amber-950',
        border: 'border-amber-600/30',
        content: 'ទោះបីវាមានក្លិនឆ្អេះបន្តិច ប៉ុន្តែវាជាឱសថធម្មជាតិដ៏អស្ចារ្យ។ មានសមត្ថភាពប្រឆាំងបាក់តេរី និងមេរោគ ជួយបញ្ចុះជាតិខ្លាញ់ក្នុងឈាម និងពង្រឹងសុខភាពសរសៃឈាមបេះដូង។',
    },
    {
        id: 6,
        title: 'មើមឆៃថាវក្រហម',
        emoji: '🫚',
        subtitle: 'Beetroot · ថាមពល',
        nutrients: 'ជាតិដែក · Nitrates · Folate',
        color: 'from-pink-900 to-pink-950',
        border: 'border-pink-600/30',
        content: 'ជួយបង្កើនថាមពល និងលំហូរឈាមទៅកាន់ខួរក្បាល ដែលធ្វើឱ្យការចងចាំល្អ និងបញ្ចុះសម្ពាធឈាម។',
    },
]

export default function VegetablePage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">មេរៀនអំពីបន្លែ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                {/* ចំណងជើង */}
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🥗</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ចំណេះដឹង</p>
                    <h2 className="text-2xl font-headline font-bold">ប្រភេទបន្លែ និងអត្ថប្រយោជន៍</h2>
                </div>

                {/* មេរៀន */}
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        className={`bg-gradient-to-br ${lesson.color} border ${lesson.border} rounded-3xl p-5 shadow-xl`}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{lesson.emoji}</span>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-white">{lesson.title}</h3>
                                <p className="text-white/60 text-xs font-body">{lesson.subtitle}</p>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl px-3 py-1.5 inline-block mb-3">
                            <p className="text-white/80 text-xs font-body">💊 {lesson.nutrients}</p>
                        </div>
                        <p className="font-body text-sm text-white/85 leading-relaxed">{lesson.content}</p>
                    </div>
                ))}

                {/* ដំបូន្មាន */}
                <div className="bg-gradient-to-br from-green-900 to-green-950 border border-green-500/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-lg text-white mb-3">💡 ដំបូន្មានល្អៗ</h3>
                    <ul className="space-y-2">
                        {[
                            'ទទួលទានបន្លែឱ្យបានចម្រុះពណ៌ក្នុងមួយថ្ងៃៗ (ឥន្ទធនូនៃបន្លែ)',
                            'លាងបន្លែឱ្យបានស្អាតល្អមុននឹងយកមកចម្អិន ដើម្បីជៀសវាងសារធាតុគីមី',
                            'ការញ៉ាំបន្លែស្រស់ ឬចំហុយ ជួយរក្សាសារធាតុចិញ្ចឹមបានល្អជាងការរំងាស់យូរ',
                        ].map((tip, i) => (
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
