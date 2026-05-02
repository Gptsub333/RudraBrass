'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Award, Settings, Target, Zap } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Commitment to delivering only the highest quality brass products'
  },
  {
    icon: Settings,
    title: 'Advanced Technology',
    description: 'Equipped with state-of-the-art manufacturing equipment'
  },
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'Every product crafted with utmost precision and accuracy'
  },
  {
    icon: Zap,
    title: 'Innovation Driven',
    description: 'Continuously developing and refining products'
  }
]

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a3a2a]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2a]/95 to-[#1a3a2a]/80" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <p className="text-[#EDE8D0] font-semibold text-lg mb-2">Know About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#EDE8D0] mb-6" />
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Rudra Brass Industries is a prominent manufacturer specializing in high-quality cable glands 
              and electrical accessories for a wide range of industrial applications. Founded in 1991, 
              we bring over 33 years of expertise in brass casting, and since 2004, we have expanded into 
              manufacturing, providing reliable solutions trusted by industries worldwide.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our commitment to excellence is driven by a passion for quality, a focus on precision, 
              and a dedication to perfection, ensuring that our customers receive only the best.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#EDE8D0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#EDE8D0] text-gray-700 px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
            >
              Read More
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/factory.jpg"
                  alt="Rudra Brass Industries Manufacturing Factory"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#EDE8D0] text-gray-700 p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">33+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#EDE8D0] rounded-lg opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
