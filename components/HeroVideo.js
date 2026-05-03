'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Play, Pause } from 'lucide-react'

const VIDEOS = ['/videos/vid1.mp4', '/videos/vid2.mp4']

export default function HeroVideo() {
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeVideo, setActiveVideo] = useState(1) // 1 or 2
  const currentIndexRef = useRef(0)
  const timerRef = useRef(null)
  const isPausedRef = useRef(false)

  const switchVideo = () => {
    const nextIndex = (currentIndexRef.current + 1) % VIDEOS.length
    currentIndexRef.current = nextIndex

    const incomingRef = activeVideo === 1 ? videoRef2 : videoRef1
    const incoming = incomingRef.current
    if (!incoming) return

    incoming.src = VIDEOS[nextIndex]
    incoming.load()
    incoming.play().catch(() => { })

    setActiveVideo((prev) => (prev === 1 ? 2 : 1))
  }

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) switchVideo()
    }, 3000)
  }

  useEffect(() => {
    setIsLoaded(true)

    const v1 = videoRef1.current
    const v2 = videoRef2.current
    if (!v1 || !v2) return

    // Preload both videos
    v1.src = VIDEOS[0]
    v2.src = VIDEOS[1]
    v1.load()
    v2.load()
    v1.play().catch(() => { })

    startTimer()

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const togglePlayPause = () => {
    const v1 = videoRef1.current
    const v2 = videoRef2.current
    if (!v1 || !v2) return

    if (isPaused) {
      v1.play().catch(() => { })
      v2.play().catch(() => { })
      isPausedRef.current = false
      setIsPaused(false)
      startTimer()
    } else {
      v1.pause()
      v2.pause()
      isPausedRef.current = true
      setIsPaused(true)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }

  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden">

      {/* Video 1 */}
      <video
        ref={videoRef1}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 1 ? 1 : 0 }}
        muted
        playsInline
        loop
      />

      {/* Video 2 */}
      <video
        ref={videoRef2}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 2 ? 1 : 0 }}
        muted
        playsInline
        loop
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2318]/90 via-[#1a3a2a]/75 to-[#0f2318]/60" />

      {/* Cream bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EDE8D0]" />

      {/* Subtle dot-grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #EDE8D0 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Main content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">

            {/* Eyebrow label */}
            <div
              className={`flex items-center gap-3 mb-5 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="h-px w-10 bg-[#EDE8D0]" />
              <span className="text-[#EDE8D0] text-sm font-semibold uppercase tracking-widest">
                Established 1991 &bull; Jamnagar, Gujarat
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Precision Brass.{' '}
              <span className="text-[#EDE8D0]">Global Standards.</span>
            </h1>

            {/* Sub-text */}
            <p
              className={`text-lg md:text-xl text-gray-200 leading-relaxed mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Rudra Brass Industries manufactures over 2,000 variants of brass cable glands,
              earthing parts, and connectors — trusted by industries across 40+ countries.
            </p>

            {/* Stats strip */}
            <div
              className={`flex flex-wrap gap-6 mb-10 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {[
                { value: '33+', label: 'Years of Excellence' },
                { value: '2000+', label: 'Product Variants' },
                { value: '40+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="h-10 w-px bg-[#EDE8D0]" />
                  <div>
                    <p className="text-2xl font-bold text-[#EDE8D0]">{stat.value}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-wide">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#EDE8D0] text-gray-700 px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 shadow-lg shadow-[#EDE8D0]/30"
              >
                Request A Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Play / Pause control */}
      <button
        onClick={togglePlayPause}
        aria-label={isPaused ? 'Play background video' : 'Pause background video'}
        className="absolute bottom-8 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-[#EDE8D0] backdrop-blur-sm flex items-center justify-center text-white hover:text-gray-700 transition-all duration-300"
      >
        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
      </button>
    </section>
  )
}
