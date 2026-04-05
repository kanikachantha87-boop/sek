'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { ArrowRight, Check, X } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'តើយើងគួរធ្វើអ្វីមុនពេលញ៉ាំអាហារ?',
    options: ['ទៅលេងកីឡា', 'លាងដៃជាមួយសាប៊ូឱ្យបានស្អាត', 'គេងសម្រាក'],
    answer: 1,
  },
  {
    id: 2,
    question: 'ប្រសិនបើប្អូនឃើញផ្លែឈើដែលមិនទាន់បានលាង តើប្អូនគួរញ៉ាំដែរឬទេ?',
    options: ['ញ៉ាំបានភ្លាមៗ', 'ជូតជាមួយអាវ រួចញ៉ាំ', 'មិនគួរញ៉ាំទេ ត្រូវលាងជម្រះជាមួយទឹកស្អាតជាមុនសិន'],
    answer: 2,
  },
  {
    id: 3,
    question: 'តើភេសជ្ជៈប្រភេទណាដែលល្អបំផុតសម្រាប់សុខភាពកុមារ?',
    options: ['ទឹកក្រូចកំប៉ុងដែលមានជាតិស្ករច្រើន', 'ទឹកស្អាត ឬទឹកឆ្អិន', 'ភេសជ្ជៈប៉ូវកម្លាំង'],
    answer: 1,
  },
  {
    id: 4,
    question: 'ប្រសិនបើនំបុ័ងមានដុះផ្សិតពណ៌ខៀវ ឬខ្មៅ តើប្អូនគួរធ្វើដូចម្តេច?',
    options: ['កាត់កន្លែងមានផ្សិតចេញ រួចញ៉ាំ', 'យកទៅលាងទឹក រួចញ៉ាំ', 'បោះវាចោល ព្រោះវាមានមេរោគ និងគ្រោះថ្នាក់'],
    answer: 2,
  },
  {
    id: 5,
    question: 'តើយើងគួរទុកអាហារឆ្អិននៅកន្លែងណាដើម្បីកុំឱ្យឆាប់ខូច?',
    options: ['ទុកចោលលើតុដែលមានរុយរោម', 'គ្របឱ្យជិត ឬដាក់ក្នុងទូទឹកកក', 'ដាក់ហាលថ្ងៃ'],
    answer: 1,
  },
  {
    id: 6,
    question: 'តើអាហារប្រភេទណាដែលជួយឱ្យរាងកាយលូតលាស់ និងរឹងមាំ?',
    options: ['បន្លែ ត្រី សាច់ និងស៊ុត', 'ស្ករគ្រាប់ និងស្ករសូកូឡា', 'នំកញ្ចប់ដែលមានជាតិប្រៃខ្លាំង'],
    answer: 0,
  },
  {
    id: 7,
    question: 'ប្រសិនបើប្អូនទិញនំកំប៉ុង តើប្អូនត្រូវពិនិត្យមើលអ្វីមុនគេ?',
    options: ['ពណ៌របស់កំប៉ុង', 'កាលបរិច្ឆេទឈប់ប្រើ (Expiry Date)', 'រូបភាពនៅលើសំបក'],
    answer: 1,
  },
  {
    id: 8,
    question: 'តើការញ៉ាំអាហារដែលមានរុយរោមអាចបណ្តាលឱ្យមានបញ្ហាអ្វី?',
    options: ['ធ្វើឱ្យរឹងមាំ', 'ឈឺពោះ និងរាគរូស', 'ជួយឱ្យគេងលក់ស្រួល'],
    answer: 1,
  },
  {
    id: 9,
    question: 'ហេតុអ្វីបានជាយើងមិនគួរញ៉ាំនំកញ្ចប់ ឬអាហារប្រៃខ្លាំងពេក?',
    options: ['ព្រោះវាធ្វើឱ្យខូចតម្រងនោម និងសុខភាព', 'ព្រោះវាមានតម្លៃថោក', 'ព្រោះវាមានពណ៌ស្អាត'],
    answer: 0,
  },
  {
    id: 10,
    question: 'តើប្អូនគួរញ៉ាំអាហារពេលព្រឹកដែរឬទេ?',
    options: ['មិនបាច់ទេ ញ៉ាំតែពេលថ្ងៃត្រង់បានហើយ', 'គួរញ៉ាំ ព្រោះវាផ្តល់ថាមពលសម្រាប់ការសិក្សា និងលេង', 'ញ៉ាំតែពេលឃ្លានខ្លាំង'],
    answer: 1,
  },
  {
    id: 11,
    question: 'តើប្អូនគួរប្រើស្លាបព្រារួមគ្នាជាមួយអ្នកដទៃដែរឬទេ?',
    options: ['ប្រើបាន មិនអីទេ', 'មិនគួរទេ ដើម្បីការពារការឆ្លងមេរោគ', 'ប្រើបាន បើជាមិត្តភក្តិជិតស្និទ្ធ'],
    answer: 1,
  },
  {
    id: 12,
    question: 'នៅពេលប្អូនញ៉ាំស្ករគ្រាប់ច្រើនពេក តើមានផលប៉ះពាល់អ្វីដល់ធ្មេញ?',
    options: ['ធ្វើឱ្យធ្មេញស្អាត', 'ធ្វើឱ្យធ្មេញរឹងមាំ', 'ធ្វើឱ្យធ្មេញពុក និងឈឺធ្មេញ'],
    answer: 2,
  },
  {
    id: 13,
    question: 'តើបន្លែពណ៌បៃតងផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
    options: ['ផ្តល់វីតាមីន និងជួយដល់ការរំលាយអាហារ', 'ធ្វើឱ្យងងុយគេង', 'មិនមានប្រយោជន៍អ្វីទេ'],
    answer: 0,
  },
  {
    id: 14,
    question: 'ប្រសិនបើអាហារធុំក្លិនផ្អូម ឬប្លែក តើប្អូនគួរញ៉ាំដែរឬទេ?',
    options: ['ញ៉ាំបន្តិចបន្តួចមិនអីទេ', 'មិនត្រូវញ៉ាំដាច់ខាត', 'យកទៅកំដៅ រួចញ៉ាំ'],
    answer: 1,
  },
  {
    id: 15,
    question: 'តើការញ៉ាំចំណីអាហារនៅតាមចិញ្ចើមថ្នល់ដែលមានដីហុយខ្លាំង ល្អដែរឬទេ?',
    options: ['ល្អ ព្រោះវាមានរសជាតិឆ្ងាញ់', 'មិនល្អទេ ព្រោះវាមានមេរោគ និងដីកខ្វក់', 'ល្អ ព្រោះវាមានតម្លៃថោក'],
    answer: 1,
  },
  {
    id: 16,
    question: 'មុននឹងញ៉ាំបន្លែស្រស់ តើយើងគួរធ្វើដូចម្តេច?',
    options: ['ដាក់ហាលថ្ងៃឱ្យស្រពោន', 'លាងសម្អាតជាមួយទឹកស្អាតច្រើនដង', 'ញ៉ាំភ្លាមៗដើម្បីបានវីតាមីន'],
    answer: 1,
  },
  {
    id: 17,
    question: 'តើអាហារដែលមានពណ៌ឆើតឆាយពេក (ដាក់ល័ក្ខ) ល្អសម្រាប់កុមារដែរឬទេ?',
    options: ['ល្អ ព្រោះវាស្អាត', 'មិនល្អទេ ព្រោះវាអាចមានសារធាតុគីមីគ្រោះថ្នាក់', 'ញ៉ាំកាន់តែច្រើន កាន់តែល្អ'],
    answer: 1,
  },
  {
    id: 18,
    question: 'ហេតុអ្វីយើងត្រូវញ៉ាំអាហារឆ្អិនល្អ?',
    options: ['ដើម្បីឱ្យមានរសជាតិផ្អែម', 'ដើម្បីសម្លាប់មេរោគ និងព្រូន ដែលមានក្នុងសាច់ឆៅ', 'ដើម្បីឱ្យអាហារមានពណ៌ស្អាត'],
    answer: 1,
  },
  {
    id: 19,
    question: 'បើប្អូនជ្រុះនំទៅលើដី តើប្អូនគួររើសមកញ៉ាំវិញដែរឬទេ?',
    options: ['រើសមកផ្លុំ រួចញ៉ាំបន្ត', 'មិនគួរបរិភោគទេ ព្រោះវាប្រឡាក់មេរោគនៅលើដី', 'យកទៅលាងទឹក រួចញ៉ាំ'],
    answer: 1,
  },
  {
    id: 20,
    question: 'តើការញ៉ាំផ្លែឈើស្រស់ជារៀងរាល់ថ្ងៃល្អដែរឬទេ?',
    options: ['ល្អណាស់ ព្រោះវាផ្តល់វីតាមីន និងជួយឱ្យស្បែកស្អាត', 'មិនល្អទេ នាំឱ្យឆ្អែតពេក', 'ញ៉ាំតែពេលមានកម្មវិធីជប់លៀងបានហើយ'],
    answer: 0,
  },
]

const optionLabels = ['ក', 'ខ', 'គ']

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[current]
  const progress = Math.round(((current) / questions.length) * 100)

  function handleSelect(i: number) {
    if (!submitted) setSelected(i)
  }

  function handleNext() {
    if (selected === null) return
    const correct = selected === q.answer
    if (!submitted) {
      setSubmitted(true)
      if (correct) setScore((s) => s + 1)
      return
    }
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setSubmitted(false)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setSubmitted(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="px-5 py-10 flex flex-col items-center justify-center text-center">
          <div className="text-8xl mb-6">🏆</div>
          <p className="text-coral text-xs tracking-widest font-body font-bold mb-2">លទ្ធផល</p>
          <h2 className="text-4xl font-headline font-bold mb-2">
            {score} / {questions.length}
          </h2>
          <p className="text-gray-400 font-body text-sm mb-8">
            {score >= 16 ? 'អស្ចារ្យណាស់! 🎉' : score >= 10 ? 'ល្អ! បន្តព្យាយាម 💪' : 'ព្យាយាមម្តងទៀត 📚'}
          </p>
          <button onClick={handleRestart} className="btn-primary px-10 py-4 text-lg font-headline font-bold">
            ចាប់ផ្តើមម្តងទៀត
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-5 py-6 pb-24">
        {/* ការវឌ្ឍន៍ */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">
                សុវត្ថិភាពអាហារ
              </p>
              <p className="text-lg font-headline">
                សំណួរទី {String(current + 1).padStart(2, '0')},{' '}
                <span className="text-coral">{progress}%</span> បានបញ្ចប់
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-headline font-bold text-coral">
                {score} ✓
              </div>
            </div>
          </div>
          <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-coral to-coral-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* សំណួរ */}
        <div className="mb-6">
          <h2 className="text-2xl font-headline font-bold leading-snug">
            {q.question}
          </h2>
        </div>

        {/* ជម្រើស */}
        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => {
            let style = 'bg-dark-card border-2 border-transparent'
            if (submitted) {
              if (i === q.answer) style = 'bg-green-900/40 border-2 border-green-500'
              else if (i === selected) style = 'bg-red-900/40 border-2 border-red-500'
              else style = 'bg-dark-card border-2 border-transparent opacity-50'
            } else if (selected === i) {
              style = 'bg-coral/20 border-2 border-coral'
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full ${style} rounded-2xl p-4 flex items-center gap-4 transition-all text-left`}
              >
                <span className="w-9 h-9 rounded-full bg-dark flex items-center justify-center font-headline font-bold text-coral flex-shrink-0">
                  {optionLabels[i]}
                </span>
                <span className="font-body text-sm leading-snug">{opt}</span>
                {submitted && i === q.answer && (
                  <Check className="w-5 h-5 text-green-400 ml-auto flex-shrink-0" />
                )}
                {submitted && i === selected && i !== q.answer && (
                  <X className="w-5 h-5 text-red-400 ml-auto flex-shrink-0" />
                )}
              </button>
            )
          })}
        </div>

        {/* ប៊ូតុង */}
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full btn-primary flex items-center justify-center gap-3 text-lg disabled:opacity-40"
        >
          <span>{submitted ? (current + 1 >= questions.length ? 'មើលលទ្ធផល' : 'សំណួរបន្ទាប់') : 'បញ្ជាក់ចម្លើយ'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-center text-gray-500 text-xs font-body tracking-wider mt-4">
          ជំហានទី {current + 1} នៃ {questions.length}
        </p>
      </main>
    </div>
  )
}
