'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function HealthBenefitsPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">អត្ថប្រយោជន៍នៃសុខភាព</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">💪</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">មេរៀន</p>
                    <h2 className="text-2xl font-headline font-bold">អត្ថប្រយោជន៍ និងសារសំខាន់</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">នៃសុខភាព</p>
                </div>

                {/* ១. តើសុខភាពគឺជាអ្វី */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-950 border border-blue-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ១. តើសុខភាពគឺជាអ្វី?
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">យោងតាម WHO</p>
                    <p className="font-body text-sm text-white/80 leading-relaxed mb-4">
                        សុខភាពមិនមែនមានន័យត្រឹមតែ <span className="text-blue-300 font-bold">"គ្មានជំងឺ"</span> នោះទេ ប៉ុន្តែវាគឺជាស្ថានភាពពេញលេញនៃ៖
                    </p>
                    {[
                        { icon: '💪', title: 'សុខភាពរាងកាយ', desc: 'រាងកាយមាំមួន កាយសម្បទារឹងប៉ឹង' },
                        { icon: '🧠', title: 'សុខភាពផ្លូវចិត្ត', desc: 'ស្មារតីស្រស់ថ្លា គ្មានការព្រួយបារម្ភ ឬតានតឹងខ្លាំង' },
                        { icon: '🤝', title: 'សុខភាពសង្គម', desc: 'ការរស់នៅចុះសម្រុងជាមួយមនុស្សជុំវិញខ្លួន' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white">{item.title}</p>
                                <p className="font-body text-sm text-white/75">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ២. អត្ថប្រយោជន៍ */}
                <div className="bg-gradient-to-br from-green-800 to-green-950 border border-green-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ២. អត្ថប្រយោជន៍នៃការមានសុខភាពល្អ
                    </h3>
                    {[
                        { icon: '📚', title: 'ពង្រឹងការចងចាំ និងការរៀនសូត្រ', desc: 'ខួរក្បាលដែលទទួលបានសារធាតុចិញ្ចឹមគ្រប់គ្រាន់ នឹងជួយឱ្យការរៀនឆាប់ចេះ ចងចាំបានល្អ និងមានភាពច្នៃប្រឌិត' },
                        { icon: '⚡', title: 'បង្កើនថាមពលរាងកាយ', desc: 'ធ្វើឱ្យយើងមានកម្លាំងក្នុងការលេងកីឡា ជួយការងារផ្ទះ និងចូលរួមសកម្មភាពសាលាបានពេញលេញ' },
                        { icon: '🛡️', title: 'បង្កើនប្រព័ន្ធការពាររាងកាយ', desc: 'រាងកាយរឹងប៉ឹងអាចប្រឆាំងនឹងមេរោគផ្សេងៗ ធ្វើឱ្យយើងមិនងាយធ្លាក់ខ្លួនឈឺ' },
                        { icon: '😊', title: 'បង្កើនភាពជឿជាក់លើខ្លួនឯង', desc: 'កាលណាមានសុខភាពល្អ និងរាងកាយស្អាតបាត វានាំឱ្យយើងមានអារម្មណ៍រីករាយ និងហ៊ានប្រស្រ័យទាក់ទង' },
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

                {/* ៣. សារសំខាន់ */}
                <div className="bg-gradient-to-br from-teal-800 to-teal-950 border border-teal-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-4">
                        ៣. សារសំខាន់នៃសុខភាពចំពោះសិស្ស
                    </h3>
                    {[
                        { icon: '🎯', title: 'ជាគ្រឹះនៃអនាគត', desc: 'បើគ្មានសុខភាពល្អទេ យើងមិនអាចបន្តការសិក្សាឱ្យចប់ ឬសម្រេចក្តីសុបិនដែលយើងចង់បានឡើយ' },
                        { icon: '💰', title: 'សន្សំសំចៃថវិកា', desc: 'ការថែរក្សាសុខភាពឱ្យល្អ ជួយកាត់បន្ថយការចំណាយលើការព្យាបាល និងការទិញថ្នាំ' },
                        { icon: '🌟', title: 'អាយុយឺនយូរ', desc: 'ទម្លាប់រស់នៅស្អាត ញ៉ាំស្អាត តាំងពីក្មេង នឹងជួយឱ្យយើងរស់នៅបានយូរ និងមានគុណភាពជីវិតខ្ពស់' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-body font-bold text-sm text-white">{item.title}</p>
                                <p className="font-body text-sm text-white/75 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ៤. គន្លឹះមាស */}
                <div className="bg-gradient-to-br from-amber-800 to-amber-950 border border-amber-600/30 rounded-3xl p-5 shadow-xl">
                    <h3 className="font-headline font-bold text-xl text-white mb-1">
                        ៤. គន្លឹះមាស ៤ សសរ
                    </h3>
                    <p className="text-white/60 text-xs font-body mb-4">The 4 Pillars of Health</p>
                    {[
                        { icon: '🥗', title: 'អាហារូបត្ថម្ភ', desc: 'បរិភោគអាហារឱ្យគ្រប់ ៥ ក្រុម — សាច់ · បន្លែ · ផ្លែឈើ · ម្សៅ · ខ្លាញ់' },
                        { icon: '🏃', title: 'ការហាត់ប្រាណ', desc: 'ហាត់ប្រាណយ៉ាងហោចណាស់ ៣០ នាទីក្នុងមួយថ្ងៃ — រត់ · លេងបាល់ · ឬរាំ' },
                        { icon: '😴', title: 'ការសម្រាក', desc: 'គេងឱ្យបាន ៨ ទៅ ៩ ម៉ោងក្នុងមួយយប់ ដើម្បីឱ្យរាងកាយជួសជុលផ្នែកដែលសឹកដាច់' },
                        { icon: '🧼', title: 'អនាម័យខ្លួនប្រាណ', desc: 'ងូតទឹក · ដុសធ្មេញ · និងលាងដៃឱ្យបានទៀងទាត់' },
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

                {/* ៥. សារដាស់តឿន */}
                <div className="bg-gradient-to-br from-coral/80 to-red-900 border border-coral/40 rounded-3xl p-5 shadow-xl text-center">
                    <div className="text-4xl mb-3">💎</div>
                    <p className="font-headline font-bold text-lg text-white leading-relaxed">
                        «មាសប្រាក់អាចទិញគ្រែដេកបាន
                    </p>
                    <p className="font-body text-sm text-white/85 mt-2 leading-relaxed">
                        ប៉ុន្តែមិនអាចទិញដំណេកលក់ស្រួលបានឡើយ។ មាសប្រាក់អាចទិញថ្នាំបាន ប៉ុន្តែមិនអាចទិញសុខភាពបានឡើយ។
                    </p>
                    <p className="font-headline font-bold text-coral mt-3">
                        ចូលថែរក្សាសុខភាពរបស់អ្នកឱ្យដូចជាកំណប់ទ្រព្យ!»
                    </p>
                </div>
            </main>
        </div>
    )
}
