'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function FoodImpactPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">ផលវិបាកចំណីអាហារ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                {/* ចំណងជើង */}
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">⚠️</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">មេរៀន</p>
                    <h2 className="text-2xl font-headline font-bold">ផលវិបាកនៃចំណីអាហារ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">ខ្វះសុវត្ថិភាព</p>
                </div>

                {/* សេចក្តីផ្តើម */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-600/30 rounded-3xl p-5 shadow-xl">
                    <p className="font-body text-sm text-white/85 leading-relaxed">
                        ការបរិភោគអាហារដែលមានមេរោគ សារធាតុគីមី ឬវត្ថុមិនស្អាត មិនត្រឹមតែធ្វើឱ្យឈឺពោះភ្លាមៗនោះទេ ប៉ុន្តែវាបង្កផលវិបាកយ៉ាងធ្ងន់ធ្ងរ។
                    </p>
                </div>

                {/* ១. ផលប៉ះពាល់ចំពោះសុខភាព */}
                <div className="bg-gradient-to-br from-red-800 to-red-950 border border-red-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ១. ផលប៉ះពាល់ចំពោះសុខភាពផ្ទាល់ខ្លួន
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-3">Health Impact</p>
                    {[
                        {
                            icon: '🤢',
                            title: 'រោគសញ្ញាភ្លាមៗ (Acute Symptoms)',
                            desc: 'ឈឺពោះ ចង្អោរ ក្អួត រាកមួល រាកខ្លាំង (បាត់បង់ជាតិទឹក) និងក្ដៅខ្លួន',
                        },
                        {
                            icon: '☠️',
                            title: 'ការពុលកម្រិតធ្ងន់',
                            desc: 'សារធាតុគីមីដូចជាមេត្បាល់ (Borax) ឬសំណល់ថ្នាំកសិកម្ម អាចធ្វើឱ្យខូចតម្រងនោម ខូចថ្លើម និងប៉ះពាល់ដល់ប្រព័ន្ធប្រសាទ',
                        },
                        {
                            icon: '🧬',
                            title: 'ផលប៉ះពាល់រយៈពេលវែង',
                            desc: 'ការបរិភោគអាហារមានសារធាតុគីមីតិចៗជាប្រចាំ អាចបង្កជាជំងឺមហារីក និងប៉ះពាល់ដល់ការលូតលាស់នៃបញ្ញាស្មារតីរបស់កុមារ',
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-2xl p-4 mb-3 last:mb-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">{item.icon}</span>
                                <p className="font-body font-bold text-sm text-white">{item.title}</p>
                            </div>
                            <p className="font-body text-sm text-white/75 leading-snug pl-8">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ២. ផលប៉ះពាល់ដល់ការសិក្សា */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-950 border border-blue-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ២. ផលប៉ះពាល់ដល់ការសិក្សា
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-3">Impact on Education</p>
                    {[
                        { icon: '📅', title: 'ការខាតបង់ពេលវេលា', desc: 'កាលណាឈឺ សិស្សត្រូវឈប់សម្រាកពីសាលា ដែលធ្វើឱ្យខកខានមេរៀន និងការប្រឡងផ្សេងៗ' },
                        { icon: '🧠', title: 'ការធ្លាក់ចុះនៃការចងចាំ', desc: 'សារធាតុពុលប៉ះពាល់ដល់កោសិកាខួរក្បាល ធ្វើឱ្យសិស្សពិបាកផ្ដោតអារម្មណ៍ និងរៀនឆាប់ភ្លេច' },
                        { icon: '😔', title: 'កង្វះអាហារូបត្ថម្ភ', desc: 'ការរាករូសញឹកញាប់ធ្វើឱ្យរាងកាយមិនអាចស្រូបយកជីវជាតិបានល្អ នាំឱ្យសិស្សស្លេកស្លាំង និងទន់ខ្សោយ' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-2xl p-4 mb-3 last:mb-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">{item.icon}</span>
                                <p className="font-body font-bold text-sm text-white">{item.title}</p>
                            </div>
                            <p className="font-body text-sm text-white/75 leading-snug pl-8">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ៣. ផលប៉ះពាល់ដល់ជីវភាព */}
                <div className="bg-gradient-to-br from-amber-800 to-amber-950 border border-amber-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៣. ផលប៉ះពាល់ដល់ជីវភាព និងសង្គម
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-3">Economic &amp; Social Impact</p>
                    {[
                        { icon: '💸', title: 'ចំណាយថវិកា', desc: 'ឪពុកម្តាយត្រូវចំណាយលុយកាក់ច្រើនលើការព្យាបាល ការទិញថ្នាំ និងការសម្រាកនៅមន្ទីរពេទ្យ' },
                        { icon: '🏢', title: 'ខាតបង់ការងារ', desc: 'អាណាព្យាបាលត្រូវខកខានការងារដើម្បីមកមើលថែកូនដែលឈឺ' },
                        { icon: '🏘️', title: 'សុខភាពសាធារណៈ', desc: 'ប្រសិនបើមានការឆ្លងរាលដាលខ្លាំង (ដូចជាជំងឺអាសន្នរោគ) វានឹងក្លាយជាវិបត្តិសុខភាពក្នុងសហគមន៍' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-2xl p-4 mb-3 last:mb-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">{item.icon}</span>
                                <p className="font-body font-bold text-sm text-white">{item.title}</p>
                            </div>
                            <p className="font-body text-sm text-white/75 leading-snug pl-8">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ៤. តារាងសង្ខេប */}
                <div className="bg-gradient-to-br from-purple-800 to-purple-950 border border-purple-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៤. តារាងសង្ខេប
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-3">មូលហេតុ និងផលវិបាក</p>
                    <div className="space-y-3">
                        {[
                            { agent: 'បាក់តេរី/វីរុស', cause: 'អាហារផ្អូម, មិនលាងដៃ, រុយរោម', effect: 'រាករូស, ក្អួត, គ្រុនពោះវៀន' },
                            { agent: 'សារធាតុគីមី', cause: 'ថ្នាំបាញ់បន្លែ, ល័ក្ខណ៍ពណ៌, សារធាតុរក្សាទុក', effect: 'ពុលថ្លើម, តម្រងនោម, មហារីក' },
                            { agent: 'ប៉ារ៉ាស៊ីត', cause: 'សាច់ឆៅ, បន្លែមិនលាងទឹក', effect: 'មានព្រូន, តីនីញ៉ា ក្នុងខ្លួន' },
                        ].map((row, i) => (
                            <div key={i} className="bg-white/10 rounded-2xl p-3">
                                <p className="font-body font-bold text-sm text-white mb-1">🔬 {row.agent}</p>
                                <p className="font-body text-xs text-white/70 mb-1">→ មូលហេតុ: {row.cause}</p>
                                <p className="font-body text-xs text-red-300">⚠️ ផលវិបាក: {row.effect}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ៥. សារអប់រំ */}
                <div className="bg-gradient-to-br from-coral/80 to-red-900 border border-coral/40 rounded-3xl p-5 shadow-xl text-center">
                    <div className="text-4xl mb-3">📢</div>
                    <p className="font-headline font-bold text-lg text-white leading-relaxed">
                        «កុំទុកឱ្យការចង់ញ៉ាំតែមួយពេល
                    </p>
                    <p className="font-body text-sm text-white/85 mt-2 leading-relaxed">
                        បំផ្លាញសុខភាពរបស់អ្នកពេញមួយជីវិត! ជ្រើសរើសចំណីអាហារដែលមានអនាម័យ ដើម្បីអនាគតភ្លឺស្វាង!»
                    </p>
                </div>
            </main>
        </div>
    )
}
