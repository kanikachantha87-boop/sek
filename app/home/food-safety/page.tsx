'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function FoodSafetyPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">សុវត្ថិភាពចំណីអាហារ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                {/* ចំណងជើង */}
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🛡️</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">មេរៀន</p>
                    <h2 className="text-2xl font-headline font-bold">សុវត្ថិភាពចំណីអាហារ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">Food Safety</p>
                </div>

                {/* ១. តើអ្វីទៅជាសុវត្ថិភាពចំណីអាហារ */}
                <div className="bg-gradient-to-br from-green-800 to-green-950 border border-green-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-3">
                        ១. តើអ្វីទៅជាសុវត្ថិភាពចំណីអាហារ?
                    </h3>
                    <p className="font-body text-sm text-white/85 leading-relaxed">
                        សុវត្ថិភាពចំណីអាហារ សំដៅលើការរៀបចំ ការទុកដាក់ និងការចម្អិនអាហារឱ្យបានត្រឹមត្រូវ ដើម្បីបង្ការគ្រោះថ្នាក់ពីមេរោគ សារធាតុគីមី និងវត្ថុផ្សេងៗ ដែលអាចបង្កឱ្យមានជំងឺដល់អ្នកបរិភោគ។
                    </p>
                </div>

                {/* ២. មូលហេតុ */}
                <div className="bg-gradient-to-br from-orange-800 to-orange-950 border border-orange-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ២. មូលហេតុដែលធ្វើឱ្យចំណីអាហារខ្វះសុវត្ថិភាព
                    </h3>
                    <p className="font-body text-sm text-white/75 mb-3">ចំណីអាហារអាចមានគ្រោះថ្នាក់ដោយសារកត្តា ៣ យ៉ាង៖</p>
                    {[
                        { icon: '🦠', label: 'កត្តាជីវសាស្ត្រ', desc: 'បណ្តាលមកពី បាក់តេរី វីរុស ប៉ារ៉ាស៊ីត និងផ្សិត' },
                        { icon: '🧪', label: 'កត្តាគីមី', desc: 'សំណល់ថ្នាំសម្លាប់សត្វល្អិត សារធាតុរក្សាទុកខុសច្បាប់ ឬមេត្បាល់ (Borax)' },
                        { icon: '🪨', label: 'កត្តារូបសាស្ត្រ', desc: 'កម្ទេចកញ្ចក់ ដែក ថ្ម សក់ ឬវត្ថុរឹងផ្សេងៗដែលធ្លាក់ចូលក្នុងអាហារ' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white">{item.label}</p>
                                <p className="font-body text-sm text-white/75">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ៣. គោលការណ៍មាស ៥ */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-950 border border-blue-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ៣. គោលការណ៍មាស ៥ យ៉ាង
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">របស់អង្គការសុខភាពពិភពលោក (WHO)</p>
                    {[
                        { icon: '🧼', label: 'ក. រក្សាភាពស្អាតជានិច្ច', points: ['លាងដៃជាមួយសាប៊ូ មុនពេលប៉ះពាល់អាហារ និងក្រោយពេលចេញពីបង្គន់', 'លាងសម្អាតសម្ភារផ្ទះបាយ (កាំបិត ជ្រុញ ឆ្នាំង) ឱ្យបានស្អាតល្អ'] },
                        { icon: '🔪', label: 'ខ. ទុកដាក់អាហារឆៅ និងឆ្អិនដោយឡែក', points: ['កុំដាក់សាច់ឆៅ បន្លែឆៅ នៅលាយឡំជាមួយអាហារចម្អិនហើយ', 'ប្រើប្រាស់កាំបិត និងជ្រុញដាច់ដោយឡែកសម្រាប់សាច់ឆៅ និងបន្លែ'] },
                        { icon: '🔥', label: 'គ. ចម្អិនឱ្យបានឆ្អិនល្អ', points: ['ចម្អិនអាហារ (ជាពិសេសសាច់ និងស៊ុត) ឱ្យឆ្អិនដល់ខាងក្នុង', 'ចំពោះអាហារដែលទុកយូរ ត្រូវកម្ដៅឱ្យពុះឡើងវិញមុននឹងបរិភោគ'] },
                        { icon: '❄️', label: 'ឃ. រក្សាទុកអាហារក្នុងសីតុណ្ហភាពសុវត្ថិភាព', points: ['កុំទុកអាហារដែលចម្អិនហើយនៅខាងក្រៅលើសពី ២ ម៉ោង', 'រក្សាទុកអាហារក្នុងទូទឹកកកដែលមានសីតុណ្ហភាពទាបជាង 5°C'] },
                        { icon: '💧', label: 'ង. ប្រើប្រាស់ទឹក និងវត្ថុធាតុដើមដែលមានសុវត្ថិភាព', points: ['ប្រើប្រាស់ទឹកស្អាតសម្រាប់លាង និងដាំស្ល', 'ជ្រើសរើសបន្លែ សាច់ ដែលនៅស្រស់ និងពិនិត្យ Expiry Date'] },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-2xl p-4 mb-3 last:mb-0">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">{item.icon}</span>
                                <p className="font-body font-bold text-sm text-white">{item.label}</p>
                            </div>
                            {item.points.map((p, j) => (
                                <div key={j} className="flex items-start gap-2 mb-1 last:mb-0">
                                    <span className="text-blue-300 flex-shrink-0 mt-0.5 text-xs">✦</span>
                                    <p className="font-body text-xs text-white/80 leading-snug">{p}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* ៤. របៀបជ្រើសរើស */}
                <div className="bg-gradient-to-br from-teal-800 to-teal-950 border border-teal-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៤. របៀបជ្រើសរើសចំណីអាហារនៅសាលារៀន
                    </h3>
                    {[
                        { icon: '👨‍🍳', label: 'អ្នកលក់', desc: 'មានអនាម័យ ស្លៀកពាក់ស្អាតបាត មិនប្រើដៃចាប់អាហារផ្ទាល់' },
                        { icon: '📍', label: 'ទីតាំង', desc: 'ឆ្ងាយពីគំនរសំរាម ឆ្ងាយពីលូ និងមានគម្របបិទបាំងជិតល្អ' },
                        { icon: '🎨', label: 'ពណ៌សម្បុរ', desc: 'ជៀសវាងអាហារដែលមានពណ៌ឆើតខុសធម្មតា (អាចមានលាយល័ក្ខណ៍ពណ៌គីមី)' },
                        { icon: '👃', label: 'ក្លិន', desc: 'អាហារត្រូវតែគ្មានក្លិនផ្អូម ឬក្លិនផ្អួរ' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white">{item.label}</p>
                                <p className="font-body text-sm text-white/75">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ៥. ផលវិបាក */}
                <div className="bg-gradient-to-br from-red-800 to-red-950 border border-red-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៥. ផលវិបាកនៃការបរិភោគអាហារមិនស្អាត
                    </h3>
                    {[
                        { icon: '🤢', label: 'ជំងឺផ្លូវរំលាយអាហារ', desc: 'រាករូស ក្អួត ចង្អោរ និងឈឺពោះ' },
                        { icon: '☠️', label: 'ការពុលចំណីអាហារ', desc: 'អាចបណ្តាលឱ្យគ្រោះថ្នាក់ដល់ជីវិត បើមិនបានសង្គ្រោះទាន់ពេល' },
                        { icon: '📚', label: 'ប៉ះពាល់ដល់ការសិក្សា', desc: 'ធ្វើឱ្យសុខភាពចុះខ្សោយ អវត្តមានពីសាលា និងការលូតលាស់យឺត' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white">{item.label}</p>
                                <p className="font-body text-sm text-white/75">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* សារដាស់តឿន */}
                <div className="bg-gradient-to-br from-coral/80 to-red-900 border border-coral/40 rounded-3xl p-5 shadow-xl text-center">
                    <div className="text-4xl mb-3">💬</div>
                    <p className="font-headline font-bold text-lg text-white leading-relaxed">
                        "សុខភាពល្អ ចាប់ផ្តើមពីចំណីអាហារស្អាត!
                    </p>
                    <p className="font-body text-sm text-white/85 mt-2">
                        មុននឹងញ៉ាំ សូមកុំភ្លេចពិនិត្យ និងលាងដៃឱ្យបានស្អាត!"
                    </p>
                </div>
            </main>
        </div>
    )
}
