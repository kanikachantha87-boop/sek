'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

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

            <main className="px-5 py-6 space-y-5">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">⚠️</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">គ្រោះថ្នាក់</p>
                    <h2 className="text-2xl font-headline font-bold">ភេសជ្ជៈគ្រឿងកំប៉ុង</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">ប្រភេទដែលប៉ះពាល់ដល់សុខភាព</p>
                </div>

                {/* ផ្នែកទី ១ */}
                <div className="bg-gradient-to-br from-red-900 to-red-950 border border-red-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-3">
                        ១. ភេសជ្ជៈដែលមានផលប៉ះពាល់ដល់សុខភាព
                    </h3>
                    <p className="font-body text-sm text-white/80 leading-relaxed mb-4">
                        ភេសជ្ជៈទាំងនេះត្រូវបានគេចាត់ទុកថាជា <span className="text-red-300 font-bold">"ថាមពលទទេ" (Empty Calories)</span> ព្រោះវាផ្តល់ថាមពលខ្ពស់ពីជាតិស្ករ ប៉ុន្តែគ្មានសារធាតុចិញ្ចឹមដូចជាវីតាមីន ឬជាតិរ៉ែឡើយ។
                    </p>
                    {[
                        { icon: '🥤', title: 'ភេសជ្ជៈផ្អែមខ្លាំង (Sugary Drinks)', desc: 'រួមមានទឹកក្រូចកំប៉ុង និងតែដបដែលមានជាតិស្ករខ្ពស់។ វាជាមូលហេតុចម្បងនៃជំងឺលើសទម្ងន់ ជំងឺទឹកនោមផ្អែមប្រភេទទី២ និងការខូចធ្មេញ។' },
                        { icon: '⚡', title: 'ភេសជ្ជៈប៉ូវកម្លាំង (Energy Drinks)', desc: 'មានផ្ទុកជាតិកាហ្វេអ៊ីន និងជាតិស្ករក្នុងកម្រិតខ្ពស់ជ្រុល ដែលអាចធ្វើឱ្យបេះដូងលោតខុសប្រក្រតី បង្កើនសម្ពាធឈាម និងធ្វើឱ្យគេងមិនលក់។' },
                        { icon: '🍺', title: 'គ្រឿងស្រវឹង (Alcoholic Beverages)', desc: 'ការទទួលទានច្រើនហួសប្រមាណ បំផ្លាញកោសិកាថ្លើម ប៉ះពាល់ដល់ប្រព័ន្ធប្រសាទ និងបង្កើនហានិភ័យនៃជំងឺមហារីក។' },
                        { icon: '☕', title: 'កាហ្វេដែលមានក្រែម និងស្ករច្រើន', desc: 'កាហ្វេលាយស្រេច (3-in-1) ជារឿយៗមានផ្ទុកខ្លាញ់មិនល្អ (Trans Fat) និងជាតិស្ករច្រើន ដែលប៉ះពាល់ដល់សរសៃឈាមបេះដូង។' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white mb-1">{item.title}</p>
                                <p className="font-body text-sm text-white/75 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ផ្នែកទី ២ */}
                <div className="bg-gradient-to-br from-orange-900 to-orange-950 border border-orange-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ២. ការបែងចែកប្រភេទភេសជ្ជៈគ្រឿងកំប៉ុង
                    </h3>
                    {[
                        {
                            label: 'ក. ភេសជ្ជៈមានហ្គាស (Carbonated Soft Drinks)',
                            danger: 'អាស៊ីតផូស្វរិក (Phosphoric Acid) ធ្វើឱ្យឆ្អឹងចុះខ្សោយ និងបំផ្លាញកាចាធ្មេញ',
                            effect: 'ធ្វើឱ្យហើមពោះ និងប៉ះពាល់ដល់ការស្រូបយកជាតិកាល់ស្យូម',
                        },
                        {
                            label: 'ខ. ភេសជ្ជៈប៉ូវកម្លាំងកំប៉ុង (Canned Energy Drinks)',
                            danger: 'កាហ្វេអ៊ីនខ្ពស់ និងសារធាតុ Taurine បញ្ចូលគ្នាជាមួយស្ករ',
                            effect: 'ញ័រទ្រូង ភ័យព្រួយ និងប៉ះពាល់ដល់តម្រងនោម ប្រសិនបើញ៉ាំលើសកម្រិត',
                        },
                        {
                            label: 'គ. ទឹកផ្លែឈើកែច្នៃកំប៉ុង (Processed Fruit Juices)',
                            danger: 'សារធាតុក្លិនផ្លែឈើសិប្បនិម្មិត ពណ៌ និងសារធាតុរក្សាទុក (Preservatives)',
                            effect: 'កង្វះ Fiber ធ្វើឱ្យជាតិស្ករជ្រាបចូលឈាមលឿន បង្កឱ្យអាំងស៊ុយលីនឡើងខ្ពស់',
                        },
                        {
                            label: 'ឃ. ភេសជ្ជៈប្រភេទកាហ្វេ និងតែដប/កំប៉ុង',
                            danger: 'ខ្លាញ់សិប្បនិម្មិត និងកម្រិតកាឡូរីខ្ពស់ខ្លាំង',
                            effect: 'ប៉ះពាល់ដល់សរសៃឈាម និងបង្កឱ្យឡើងទម្ងន់',
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-2xl p-4 mb-3 last:mb-0">
                            <p className="font-body font-bold text-sm text-white mb-2">{item.label}</p>
                            <div className="flex items-start gap-2 mb-1">
                                <span className="text-red-300 text-xs flex-shrink-0 mt-0.5">⚠️</span>
                                <p className="font-body text-xs text-white/75">{item.danger}</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-orange-300 text-xs flex-shrink-0 mt-0.5">→</span>
                                <p className="font-body text-xs text-white/75">{item.effect}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ផ្នែកទី ៣ */}
                <div className="bg-gradient-to-br from-amber-900 to-amber-950 border border-amber-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៣. ហេតុអ្វីបានជា "គ្រឿងកំប៉ុង" ផ្តល់ផលវិបាក?
                    </h3>
                    {[
                        { icon: '🧪', title: 'សារធាតុ BPA (Bisphenol A)', desc: 'កំប៉ុងអាលុយមីញ៉ូមមានស្រទាប់ជ័រខាងក្នុងដែលមាន BPA អាចជ្រាបចូលក្នុងភេសជ្ជៈ និងរំខានដល់អ័រម៉ូន។' },
                        { icon: '🦠', title: 'អនាម័យមាត់កំប៉ុង', desc: 'មាត់កំប៉ុងអាចមានផ្ទុកមេរោគ ឬធូលីដី ប្រសិនបើមិនបានលាងសម្អាតមុនពេលផឹកផ្ទាល់។' },
                        { icon: '⚗️', title: 'ជាតិអាស៊ីតខ្ពស់', desc: 'ជាតិអាស៊ីតអាចធ្វើឱ្យច្រេះអាលុយមីញ៉ូមរលាយចូលក្នុងទឹក ប្រសិនបើទុកចោលយូរ ឬដាក់ហាលថ្ងៃ។' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white mb-1">{item.title}</p>
                                <p className="font-body text-sm text-white/75 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* សេចក្តីសន្និដ្ឋាន */}
                <div className="bg-gradient-to-br from-green-900 to-green-950 border border-green-500/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-lg text-white mb-3">💡 ការណែនាំ</h3>
                    {[
                        'កុំញ៉ាំភេសជ្ជៈផ្អែមលើសពី ១ កំប៉ុង/ថ្ងៃ (ល្អបំផុត ២-៣ ដង/សប្តាហ៍)',
                        'ពិនិត្យស្លាកសញ្ញា — បើស្ករលើស ២០ ក្រាម/កំប៉ុង គួរជៀសវាង',
                        'ជំនួសដោយទឹកស្អាត ឬទឹកផ្លែឈើស្រស់ដែលធ្វើដោយខ្លួនឯង',
                    ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                            <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                            <p className="font-body text-sm text-white/85 leading-snug">{tip}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
