'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DrinkPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pb-24">
            <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-800/50">
                <div className="flex items-center gap-4 px-5 py-4">
                    <button onClick={() => router.back()} className="text-coral hover:text-coral-light transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="font-headline text-xl font-bold text-coral">ភេសជ្ជៈ</h1>
                </div>
            </header>

            <main className="px-5 py-6 space-y-5">
                <div className="text-center py-2">
                    <div className="text-5xl mb-2">🧃</div>
                    <p className="text-coral text-xs tracking-widest font-body font-bold mb-1">ជ្រើសរើស</p>
                    <h2 className="text-2xl font-headline font-bold">ប្រភេទភេសជ្ជៈ</h2>
                    <p className="text-gray-400 font-body text-sm mt-1">ស្វែងយល់អំពីភេសជ្ជៈ</p>
                </div>

                <Link
                    href="/type/drink/healthy"
                    className="w-full bg-gradient-to-br from-cyan-800 to-cyan-950 border border-cyan-600/30 rounded-3xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all shadow-xl"
                >
                    <span className="text-5xl flex-shrink-0">💧</span>
                    <div>
                        <h3 className="font-headline font-bold text-xl text-white mb-1">ភេសជ្ជៈជំនួយសុខភាព</h3>
                        <p className="font-body text-sm text-white/70">ភេសជ្ជៈដែលល្អ និងផ្តល់ប្រយោជន៍ដល់រាងកាយ</p>
                    </div>
                </Link>

                <Link
                    href="/type/drink/harmful"
                    className="w-full bg-gradient-to-br from-red-800 to-red-950 border border-red-600/30 rounded-3xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all shadow-xl"
                >
                    <span className="text-5xl flex-shrink-0">🥤</span>
                    <div>
                        <h3 className="font-headline font-bold text-xl text-white mb-1">ភេសជ្ជៈគ្រឿងកំប៉ុងប៉ះពាល់សុខភាព</h3>
                        <p className="font-body text-sm text-white/70">ភេសជ្ជៈដែលអាចបង្កគ្រោះថ្នាក់ដល់សុខភាព</p>
                    </div>
                </Link>
            </main>
        </div>
    )
}
