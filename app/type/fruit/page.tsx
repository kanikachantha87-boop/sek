'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const fruits = [
    { emoji: '🍎', name: 'ផ្លែប៉ោម', sub: 'Apple', nutrients: 'Fiber · វីតាមីន C', color: 'from-red-800 to-red-950', border: 'border-red-600/30', content: 'មានផ្ទុកជាតិសរសៃ (Fiber) និងវីតាមីន C ខ្ពស់។ ជួយកាត់បន្ថយជាតិខ្លាញ់អាក្រក់ ការពារជំងឺបេះដូង និងជួយដល់ប្រព័ន្ធរំលាយអាហារ។' },
    { emoji: '🍌', name: 'ផ្លែចេក', sub: 'Banana', nutrients: 'ប៉ូតាស្យូម · ថាមពល', color: 'from-yellow-700 to-yellow-950', border: 'border-yellow-600/30', content: 'សម្បូរទៅដោយប៉ូតាស្យូម ដែលជួយគ្រប់គ្រងសម្ពាធឈាម និងផ្តល់ថាមពលបានរហ័សដល់រាងកាយ។' },
    { emoji: '🍊', name: 'ផ្លែក្រូច', sub: 'Orange', nutrients: 'វីតាមីន C · ប្រឆាំងមេរោគ', color: 'from-orange-700 to-orange-950', border: 'border-orange-500/30', content: 'ជាប្រភពនៃវីតាមីន C ដ៏អស្ចារ្យ ជួយពង្រឹងប្រព័ន្ធភាពស៊ាំ ការពារការឆ្លងមេរោគ និងធ្វើឱ្យស្បែកភ្លឺថ្លា។' },
    { emoji: '🍇', name: 'ផ្លែទំពាំងបាយជូរ', sub: 'Grape', nutrients: 'Antioxidants · Resveratrol', color: 'from-purple-800 to-purple-950', border: 'border-purple-600/30', content: 'មានសារធាតុប្រឆាំងអុកស៊ីតកម្មខ្ពស់ ជួយការពារកោសិកាពីការខូចខាត និងជួយដល់សុខភាពសរសៃឈាមបេះដូង។' },
    { emoji: '🍍', name: 'ផ្លែម្នាស់', sub: 'Pineapple', nutrients: 'Bromelain · វីតាមីន C', color: 'from-lime-700 to-lime-950', border: 'border-lime-500/30', content: 'មានអង់ស៊ីម Bromelain ដែលជួយរំលាយអាហារ កាត់បន្ថយការរលាក និងជួយព្យាបាលរបួសបានឆាប់។' },
    { emoji: '🥭', name: 'ផ្លែស្វាយ', sub: 'Mango', nutrients: 'វីតាមីន A, C · Beta-carotene', color: 'from-amber-700 to-amber-950', border: 'border-amber-500/30', content: 'សម្បូរវីតាមីន A និង C ជួយដល់សុខភាពភ្នែក ពង្រឹងប្រព័ន្ធការពាររាងកាយ និងការពារជំងឺមហារីកមួយចំនួន។' },
    { emoji: '🥑', name: 'ផ្លែបឺរ', sub: 'Avocado', nutrients: 'Healthy Fats · វីតាមីន E', color: 'from-green-800 to-green-950', border: 'border-green-600/30', content: 'ផ្តល់នូវខ្លាញ់ល្អ (Healthy Fats) ដែលល្អសម្រាប់បេះដូង និងជួយស្រូបយកវីតាមីនផ្សេងៗបានកាន់តែប្រសើរ។' },
    { emoji: '🍉', name: 'ផ្លែឪឡឹក', sub: 'Watermelon', nutrients: 'ទឹក ៩២% · Lycopene', color: 'from-red-700 to-red-950', border: 'border-red-500/30', content: 'មានជាតិទឹកដល់ទៅ ៩២% ជួយផ្តល់សំណើមដល់រាងកាយ និងមានសារធាតុ Lycopene ល្អសម្រាប់បេះដូង និងស្បែក។' },
    { emoji: '🍈', name: 'ផ្លែល្ហុង', sub: 'Papaya', nutrients: 'Papain · វីតាមីន C', color: 'from-orange-800 to-orange-950', border: 'border-orange-600/30', content: 'មានអង់ស៊ីម Papain ជួយដល់ការរំលាយអាហារ បំបាត់ការទល់លាមក និងមានវីតាមីន C ខ្ពស់។' },
    { emoji: '🥝', name: 'ផ្លែគីវី', sub: 'Kiwi', nutrients: 'វីតាមីន C · Serotonin', color: 'from-emerald-700 to-emerald-950', border: 'border-emerald-500/30', content: 'មានវីតាមីន C ច្រើនជាងផ្លែក្រូច ជួយដល់ដំណេក ជួយដល់ការរំលាយអាហារ និងសុខភាពសួត។' },
    { emoji: '🍓', name: 'ផ្លែស្ត្រប៊ឺរី', sub: 'Strawberry', nutrients: 'Antioxidants · វីតាមីន C', color: 'from-rose-700 to-rose-950', border: 'border-rose-500/30', content: 'ជួយគ្រប់គ្រងជាតិស្ករក្នុងឈាម និងមានសារធាតុប្រឆាំងអុកស៊ីតកម្មជួយពន្យារភាពចាស់។' },
    { emoji: '🍑', name: 'ផ្លែទទឹម', sub: 'Pomegranate', nutrients: 'Punicalagins · Antioxidants', color: 'from-pink-800 to-pink-950', border: 'border-pink-600/30', content: 'ជួយកាត់បន្ថយការរលាក កាត់បន្ថយសម្ពាធឈាម និងការពារការស្ទះសរសៃឈាម។' },
    { emoji: '🐉', name: 'ផ្លែស្រកានាគ', sub: 'Dragon Fruit', nutrients: 'Fiber · ម៉ាញ៉េស្យូម', color: 'from-fuchsia-800 to-fuchsia-950', border: 'border-fuchsia-600/30', content: 'សម្បូរជាតិសរសៃ និងម៉ាញ៉េស្យូម ជួយដល់សុខភាពពោះវៀន និងពង្រឹងឆ្អឹង។' },
    { emoji: '🟣', name: 'ផ្លែមង្ឃុត', sub: 'Mangosteen', nutrients: 'Xanthones · ប្រឆាំងរលាក', color: 'from-violet-800 to-violet-950', border: 'border-violet-600/30', content: 'ត្រូវបានគេហៅថា "ស្តេចផ្លែឈើ" ដែលមានសារធាតុប្រឆាំងការរលាក និងប្រឆាំងបាក់តេរីយ៉ាងខ្លាំងក្លា។' },
    { emoji: '🌵', name: 'ផ្លែធុរេន', sub: 'Durian', nutrients: 'វីតាមីន B · ប៉ូតាស្យូម', color: 'from-yellow-800 to-yellow-950', border: 'border-yellow-600/30', content: 'ទោះបីមានក្លិនខ្លាំង ប៉ុន្តែវាសម្បូរថាមពល វីតាមីន B-complex និងប៉ូតាស្យូម។' },
    { emoji: '🍐', name: 'ផ្លែសាលី', sub: 'Pear', nutrients: 'Fiber · វីតាមីន C', color: 'from-lime-800 to-lime-950', border: 'border-lime-600/30', content: 'មានជាតិសរសៃខ្ពស់បំផុតមួយ ជួយសម្រកទម្ងន់ និងការពារជំងឺមហារីកពោះវៀនធំ។' },
    { emoji: '🌿', name: 'ផ្លែខ្នុរ', sub: 'Jackfruit', nutrients: 'វីតាមីន A · ថាមពល', color: 'from-green-700 to-green-950', border: 'border-green-500/30', content: 'ផ្តល់ថាមពល និងមានវីតាមីន A ជួយដល់គំហើញ និងការពារបញ្ហាស្បែក។' },
    { emoji: '🍋', name: 'ផ្លែក្រូចឆ្មារ', sub: 'Lemon', nutrients: 'វីតាមីន C · Citric Acid', color: 'from-yellow-600 to-yellow-900', border: 'border-yellow-400/30', content: 'ជួយបន្សាបជាតិពុលក្នុងថ្លើម (Detox) និងបង្កើនការស្រូបយកជាតិដែកពីអាហារ។' },
    { emoji: '🍦', name: 'ផ្លែទៀប', sub: 'Custard Apple', nutrients: 'ម៉ាញ៉េស្យូម · ប៉ូតាស្យូម', color: 'from-teal-800 to-teal-950', border: 'border-teal-600/30', content: 'សម្បូរម៉ាញ៉េស្យូម និងប៉ូតាស្យូម ជួយរក្សាតុល្យភាពទឹកក្នុងរាងកាយ និងកាត់បន្ថយអាស៊ីតក្នុងសន្លាក់។' },
    { emoji: '🟡', name: 'ផ្លែមាក់ប្រាង', sub: 'Marian Plum', nutrients: 'វីតាមីន C · Beta-carotene', color: 'from-amber-600 to-amber-900', border: 'border-amber-400/30', content: 'មានវីតាមីន C និងបេតាការ៉ូតែនខ្ពស់ ជួយការពារកោសិកា និងធ្វើឱ្យស្បែកស្រស់ថ្លា។' },
    { emoji: '🫐', name: 'ផ្លែព្រីង', sub: 'Java Plum', nutrients: 'Anthocyanins · ប្រឆាំងទឹកនោមផ្អែម', color: 'from-indigo-800 to-indigo-950', border: 'border-indigo-600/30', content: 'ល្អបំផុតសម្រាប់អ្នកជំងឺទឹកនោមផ្អែម ព្រោះវាជួយគ្រប់គ្រងកម្រិតជាតិស្ករក្នុងឈាម។' },
    { emoji: '🍏', name: 'ផ្លែជម្ពូ', sub: 'Wax Apple', nutrients: 'វីតាមីន C · ប្រឆាំងផ្សិត', color: 'from-red-600 to-red-900', border: 'border-red-400/30', content: 'ជួយបញ្ចុះកម្តៅក្នុងរាងកាយ និងមានប្រសិទ្ធភាពប្រឆាំងនឹងមេរោគផ្សិត។' },
    { emoji: '🌴', name: 'ផ្លែត្នោត', sub: 'Palmyra Fruit', nutrients: 'ជាតិទឹក · ជាតិរ៉ែ', color: 'from-stone-700 to-stone-950', border: 'border-stone-500/30', content: 'ជួយបំបាត់ការស្រេកទឹក បញ្ចុះកម្តៅ និងល្អសម្រាប់ប្រព័ន្ធរំលាយអាហារ។' },
    { emoji: '🟤', name: 'ផ្លែក្វិត', sub: 'Wood Apple', nutrients: 'Tannins · ប្រឆាំងព្រូន', color: 'from-brown-700 to-stone-900', border: 'border-stone-600/30', content: 'ជួយកម្ចាត់ព្រូនក្នុងពោះវៀន និងជួយដល់អ្នកដែលមានបញ្ហាខ្សោយក្រពះ។' },
    { emoji: '🥥', name: 'ផ្លែដូង', sub: 'Coconut', nutrients: 'អេឡិចត្រូលីត · ជាតិរ៉ែ', color: 'from-cyan-800 to-cyan-950', border: 'border-cyan-600/30', content: 'ទឹកដូងគឺជាអេឡិចត្រូលីតធម្មជាតិ ជួយបំពេញជាតិទឹក និងជាតិរ៉ែបានយ៉ាងលឿន។' },
    { emoji: '🍈', name: 'ផ្លែត្របែក', sub: 'Guava', nutrients: 'វីតាមីន C · Lycopene', color: 'from-green-600 to-green-900', border: 'border-green-400/30', content: 'មានវីតាមីន C ខ្ពស់បំផុត ជួយការពារជំងឺផ្តាសាយ និងជួយដល់សុខភាពធ្មេញ និងអញ្ចាញធ្មេញ។' },
    { emoji: '🟫', name: 'ផ្លែអំពិល', sub: 'Tamarind', nutrients: 'Tartaric Acid · ជាតិដែក', color: 'from-amber-900 to-stone-950', border: 'border-amber-700/30', content: 'ជួយដល់ការរំលាយអាហារ កាត់បន្ថយជាតិខ្លាញ់ក្នុងឈាម និងប្រឆាំងការរលាក។' },
    { emoji: '🍑', name: 'ផ្លែប៉េស', sub: 'Peach', nutrients: 'ប៉ូតាស្យូម · Fiber', color: 'from-orange-600 to-orange-900', border: 'border-orange-400/30', content: 'មានផ្ទុកប៉ូតាស្យូម និងជាតិសរសៃ ជួយឱ្យស្បែកមានសំណើម និងការពារសុខភាពបេះដូង។' },
    { emoji: '🫐', name: 'ផ្លែប៊្លូប៊ឺរី', sub: 'Blueberry', nutrients: 'Anthocyanins · ខួរក្បាល', color: 'from-blue-800 to-blue-950', border: 'border-blue-600/30', content: 'ជាអាហារសម្រាប់ខួរក្បាល ជួយពង្រឹងការចងចាំ និងការពារការចុះខ្សោយនៃប្រព័ន្ធប្រសាទ។' },
    { emoji: '🍒', name: 'ផ្លែឆឺរី', sub: 'Cherry', nutrients: 'Melatonin · ប្រឆាំងរលាក', color: 'from-rose-800 to-rose-950', border: 'border-rose-600/30', content: 'មានសារធាតុ Melatonin ធម្មជាតិ ដែលជួយឱ្យអ្នកគេងលក់ស្រួល និងកាត់បន្ថយការឈឺសាច់ដុំ។' },
]

export default function FruitPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">មេរៀនអំពីផ្លែឈើ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-4">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🍓</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ចំណេះដឹង</p>
                    <h2 className="text-2xl font-headline font-bold">ផ្លែឈើ ៣០ ប្រភេទ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">អត្ថប្រយោជន៍ និងសារធាតុចិញ្ចឹម</p>
                </div>

                {fruits.map((f, i) => (
                    <div key={i} className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-3xl p-5 shadow-xl`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{f.emoji}</span>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-white">{f.name}</h3>
                                <p className="text-white/60 text-xs font-body">{f.sub}</p>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl px-3 py-1.5 inline-block mb-3">
                            <p className="text-white/80 text-xs font-body">💊 {f.nutrients}</p>
                        </div>
                        <p className="font-body text-sm text-white/85 leading-relaxed">{f.content}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}
