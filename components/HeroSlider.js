'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    title: 'Welcome to Rudra Brass Industries',
    subtitle: '',
    description: 'Across our two manufacturing units, we craft a diverse range of over 2000 different unique & innovative product variations.',
    bgColor: 'from-[#1a3a2a] to-[#243d30]',
  },
  {
    title: 'Brass Cable Gland',
    subtitle: '',
    description: 'A leading manufacturer and exporter of high precision and excellent quality brass cable glands, cable gland accessories and cable gland kits.',
    bgColor: 'from-[#243d30] to-[#1a3a2a]',
  },
  {
    title: 'Cable Glands Accessories',
    subtitle: '',
    description: 'A leading manufacturer and exporter of high precision and excellent quality brass cable glands, cable gland accessories and cable gland kits.',
    bgColor: 'from-[#1a3a2a] to-[#2e4d3a]',
  },
  {
    title: 'Brass Earthing Parts',
    subtitle: '',
    description: 'A leading manufacturer and exporter of high precision and excellent quality brass earthing rod, terminal, connectors, clamp, clips.',
    bgColor: 'from-[#2e4d3a] to-[#1a3a2a]',
  },
  {
    title: 'Cable Lugs and Connectors',
    subtitle: '',
    description: 'High quality cable lugs and connectors for industrial applications.',
    bgColor: 'from-[#1a3a2a] to-[#243d30]',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000`}>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 top-1/4 w-80 h-80 border-8 border-[#EDE8D0]/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute -left-40 bottom-0 w-96 h-96 border-8 border-[#EDE8D0]/10 rounded-full" />
      </div>

      {/* Slide Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className={`max-w-3xl text-white ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          {slides[currentSlide].subtitle && (
            <p className="text-[#c9a227] text-lg md:text-xl font-medium mb-4 animate-fadeIn">
              {slides[currentSlide].subtitle}
            </p>
          )}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <Link
              href="#contact"
              className="bg-[#EDE8D0] text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 inline-flex items-center gap-2"
            >
              Request A Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#products"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Decorative badge */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
          <div className="w-80 h-80 bg-[#EDE8D0] rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-60 h-60 bg-[#3a6647] rounded-full flex items-center justify-center border-4 border-[#5a8c69]/50">
              <div className="text-center text-white">
                <p className="text-5xl font-bold">33+</p>
                <p className="text-sm font-semibold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#EDE8D0] rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#EDE8D0] rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#EDE8D0] w-8' : 'bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
