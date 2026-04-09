'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Shield, Truck, DollarSign, Users } from 'lucide-react'

const stats = [
  { value: 33, suffix: '+', label: 'Years Experience' },
  { value: 2000, suffix: '+', label: 'Products Range' },
  { value: 100, suffix: '+', label: 'Expert Workers' },
  { value: 50, suffix: '+', label: 'Countries Served' },
]

const benefits = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks guarantee precision-engineered products'
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Timely delivery with efficient logistics management'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best value for quality products in the market'
  },
  {
    icon: Users,
    title: 'Custom Solutions',
    description: 'Tailored solutions to meet specific project needs'
  },
]

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#c9a227] font-semibold text-lg mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            {"Why We're Your Best Choice"}
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Rudra Brass Industries, we take pride in being a trusted manufacturer and exporter of 
              high-quality brass cable glands for global markets. With decades of experience and a 
              commitment to excellence, we ensure our products meet the highest standards of durability, 
              safety, and performance.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our expertise in brass manufacturing, combined with advanced technology and rigorous 
              quality checks, guarantees precision-engineered cable glands that excel in various 
              industrial applications.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg hover:bg-[#1e3a5f] hover:text-white group transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[#1e3a5f] group-hover:text-white transition-colors">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-8 py-4 rounded font-semibold hover:bg-[#c9a227] transition-colors mt-8"
            >
              Read More
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/quality.jpg"
                alt="Quality Inspection of Brass Cable Glands"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-8 border-[#c9a227] rounded-lg -z-10" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
