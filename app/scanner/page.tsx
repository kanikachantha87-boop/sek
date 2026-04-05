'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { Camera, Image as ImageIcon, Trash2 } from 'lucide-react'

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="relative h-[calc(100vh-80px-5rem)]">
        {/* ទិដ្ឋភាពកាមេរ៉ា */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-700">
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-gray-800 flex items-center justify-center">
              <div className="text-[300px] opacity-40">🍔</div>
            </div>

            <div className="absolute -left-20 top-1/3 text-9xl opacity-60 rotate-12">
              🥬
            </div>

            {/* ស៊ុមស្កែន */}
            <div className="relative z-10 w-full max-w-lg px-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-coral rounded-tl-3xl" />
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-coral rounded-tr-3xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-coral rounded-bl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-coral rounded-br-3xl" />

                {isScanning && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-coral to-transparent animate-scan" />
                  </div>
                )}
              </div>

              {isScanning && (
                <div className="mt-16 flex justify-center">
                  <div className="bg-gradient-to-r from-amber-900/90 to-dark-burgundy px-8 py-4 rounded-pill shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-3 border-coral border-t-transparent rounded-full animate-spin" />
                      <span className="font-body font-bold text-white tracking-wide">
                        កំពុងវិភាគ...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ផ្នែកព័ត៌មាន */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/95 to-transparent px-6 pt-16 pb-6">
          <div className="max-w-md mx-auto text-center mb-6">
            <h3 className="text-xl font-headline font-bold mb-2">
              ចង្អុល & <span className="italic">កំណត់អត្តសញ្ញាណ</span> គ្រឿងផ្សំ
            </h3>
            <p className="text-gray-400 text-sm font-body">
              AI របស់យើងស្គាល់គ្រឿងផ្សំជាង ៥,០០០ ប្រភេទពីទូទាំងពិភពលោក
            </p>
          </div>

          {/* ប៊ូតុងសកម្មភាព */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button className="w-16 h-16 bg-dark-card rounded-2xl flex items-center justify-center hover:bg-dark-card/80 transition-all hover:scale-105 shadow-lg">
              <ImageIcon className="w-7 h-7 text-gray-400" />
            </button>

            <button
              onClick={() => setIsScanning(!isScanning)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-coral rounded-pill blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-coral to-coral-light px-12 py-5 rounded-pill shadow-2xl hover:shadow-coral/50 transition-all hover:scale-105">
                <div className="flex items-center gap-3">
                  <Camera className="w-6 h-6 text-white" />
                  <span className="font-headline font-bold text-white text-lg">
                    ស្កែនឥឡូវ
                  </span>
                </div>
              </div>
            </button>

            <button className="w-16 h-16 bg-dark-card rounded-2xl flex items-center justify-center hover:bg-dark-card/80 transition-all hover:scale-105 shadow-lg">
              <Trash2 className="w-7 h-7 text-gray-400" />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="text-2xl animate-pulse">🧡</div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
