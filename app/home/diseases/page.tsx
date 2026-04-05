'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function DiseasesPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">ជំងឺផ្សេងៗ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🏥</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">មេរៀន</p>
                    <h2 className="text-2xl font-headline font-bold">មូលហេតុបង្កជំងឺ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">តាមរយៈចំណីអាហារ</p>
                </div>

                {/* សេចក្តីផ្តើម */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-600/30 rounded-3xl p-5 shadow-xl">
                    <p className="font-body text-sm text-white/85 leading-relaxed">
                        តើហេតុអ្វីបានជាការបរិភោគអាហារមិនត្រឹមត្រូវ ធ្វើឱ្យយើងធ្លាក់ខ្លួនឈឺ? មូលហេតុចម្បងៗមាន <span className="text-coral font-bold">៤ យ៉ាង</span>
                    </p>
                </div>

                {/* ១. ភ្នាក់ងារជីវសាស្ត្រ */}
                <div className="bg-gradient-to-br from-red-800 to-red-950 border border-red-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ១. ភ្នាក់ងារជីវសាស្ត្រ
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">មូលហេតុទូទៅបំផុត</p>
                    {[
                        { icon: '🦠', title: 'បាក់តេរី (Bacteria)', desc: 'Salmonella ឬ E. coli ដែលរស់នៅក្នុងសាច់ឆៅ ស៊ុត ឬអាហារដែលទុកចោលយូរផ្អូម' },
                        { icon: '🔬', title: 'វីរុស (Viruses)', desc: 'Norovirus ដែលឆ្លងតាមរយៈដៃអ្នករៀបចំអាហារមិនស្អាត ឬទឹកមិនស្អាត' },
                        { icon: '🪱', title: 'ប៉ារ៉ាស៊ីត (Parasites)', desc: 'ព្រូន ឬតេនញ៉ា ដែលមាននៅក្នុងសាច់សត្វចម្អិនមិនឆ្អិន ឬបន្លែដែលលាងមិនជ្រះដី' },
                        { icon: '🍄', title: 'ផ្សិត (Molds)', desc: 'កើតមានលើនំបុ័ង ឬគ្រាប់ធញ្ញជាតិដែលផ្អាប់ទុកយូរ — បង្កជាសារធាតុពុល Aflatoxin ដែលអាចនាំឱ្យកើតមហារីកថ្លើម' },
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

                {/* ២. សារធាតុគីមី */}
                <div className="bg-gradient-to-br from-orange-800 to-orange-950 border border-orange-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ២. សារធាតុគីមី
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">Chemicals</p>
                    {[
                        { icon: '🌿', title: 'សំណល់ថ្នាំកសិកម្ម', desc: 'ការប្រើប្រាស់ថ្នាំសម្លាប់សត្វល្អិតលើសកម្រិតលើបន្លែ និងផ្លែឈើ ហើយលាងសម្អាតមិនបានល្អ' },
                        { icon: '🧪', title: 'សារធាតុបន្ថែមហាមឃាត់', desc: 'ការដាក់មេត្បាល់ (Borax) ដើម្បីឱ្យសាច់ប៉ាតេ ឬប្រហិតស្រួយ និងការប្រើល័ក្ខណ៍ពណ៌គីមី' },
                        { icon: '🐟', title: 'សារធាតុរក្សាទុក', desc: 'ការប្រើហ្វ័រម៉ាលីន (Formalin) ទៅលើគ្រឿងសមុទ្រ ឬបន្លែ ដើម្បីកុំឱ្យឆាប់រលួយ' },
                        { icon: '🥔', title: 'ជាតិពុលពីធម្មជាតិ', desc: 'មើមដំឡូងបារាំងដុះពន្លក, ផ្សិតពុល, ឬត្រីកំពត (មានជាតិពុលក្នុងគ្រឿងក្នុង)' },
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

                {/* ៣. អនាម័យ */}
                <div className="bg-gradient-to-br from-yellow-800 to-yellow-950 border border-yellow-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ៣. កត្តាអនាម័យ និងការរៀបចំ
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">Hygiene &amp; Handling</p>
                    {[
                        { icon: '🔪', title: 'ការឆ្លងរាលដាលមេរោគ (Cross-contamination)', desc: 'ប្រើកាំបិត ឬជ្រុញរួមគ្នាសម្រាប់ហាន់សាច់ឆៅ និងបន្លែឆ្អិន' },
                        { icon: '🤲', title: 'ដៃមិនស្អាត', desc: 'អ្នកលក់ ឬសិស្សខ្លួនឯង មិនបានលាងដៃជាមួយសាប៊ូ បន្ទាប់ពីចេញពីបង្គន់ ឬប៉ះពាល់របស់កខ្វក់' },
                        { icon: '🐀', title: 'សត្វចង្រៃ', desc: 'រុយ កន្លាត និងកណ្តុរ ដែលនាំមេរោគពីគំនរសំរាមមកទំលើចំណីអាហារ' },
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

                {/* ៤. របបអាហារ */}
                <div className="bg-gradient-to-br from-pink-800 to-pink-950 border border-pink-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ៤. របបអាហារមិនតុល្យភាព
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">Poor Nutrition Habits</p>
                    {[
                        { icon: '🍬', title: 'អាហារផ្អែមពេក', desc: 'ញ៉ាំភេសជ្ជៈកំប៉ុង ឬបង្អែមច្រើនពេក នាំឱ្យធាត់ និងកើតជំងឺទឹកនោមផ្អែម' },
                        { icon: '🧂', title: 'អាហារប្រៃពេក', desc: 'បង្កឱ្យលើសឈាម និងប៉ះពាល់តម្រងនោម' },
                        { icon: '🍟', title: 'អាហារបំពងខ្លាញ់ច្រើន', desc: 'នាំឱ្យឡើងជាតិខ្លាញ់ក្នុងឈាម និងជំងឺបេះដូង' },
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

                {/* ៥. តារាងសង្ខេប */}
                <div className="bg-gradient-to-br from-purple-800 to-purple-950 border border-purple-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៥. តារាងសង្ខេបជំងឺ និងមូលហេតុ
                    </h3>
                    <div className="space-y-3">
                        {[
                            { disease: 'រាករូស/អាសន្នរោគ', cause: 'បាក់តេរី / ទឹកកខ្វក់', source: 'អាហាររុយរោម, ទឹកមិនដាំពុះ' },
                            { disease: 'គ្រុនពោះវៀន', cause: 'បាក់តេរី Salmonella Typhi', source: 'អាហារមិនស្អាត, អ្នកលក់មានមេរោគ' },
                            { disease: 'ព្រូន/អៀន', cause: 'ស៊ុតព្រូន / ប៉ារ៉ាស៊ីត', source: 'បន្លែស្រស់លាងមិនស្អាត, សាច់ឈាម' },
                            { disease: 'កង្កែបពុលអាហារ', cause: 'ជាតិគីមី / មេរោគ', source: 'អាហារមានពណ៌ឆើត, អាហារផ្អូម' },
                        ].map((row, i) => (
                            <div key={i} className="bg-white/10 rounded-2xl p-3">
                                <p className="font-body font-bold text-sm text-white mb-1">🏥 {row.disease}</p>
                                <p className="font-body text-xs text-white/70 mb-1">🔬 មូលហេតុ: {row.cause}</p>
                                <p className="font-body text-xs text-yellow-300">🍽️ ប្រភព: {row.source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
