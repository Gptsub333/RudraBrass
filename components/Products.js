'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { categories, products } from '@/lib/products-data'

// Custom hook for scroll animation
function useScrollAnimation() {
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setVisibleItems((prev) => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    const timeoutId = setTimeout(() => {
      const items = container.querySelectorAll('[data-animate-item]')
      items.forEach((item) => observer.observe(item))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return { containerRef, visibleItems }
}

// Show 6 featured products (one per category except "All") on the homepage
const featuredProducts = categories
  .filter((c) => c.name !== 'All')
  .map((cat) => products.find((p) => p.category === cat.name))
  .filter(Boolean)

export default function Products() {
  const { containerRef, visibleItems } = useScrollAnimation()

  return (
    <section id="products" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#c9a227] font-semibold text-lg mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 text-balance">
            Heavy-Duty Brass Cable Glands & Accessories
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </div>

        {/* Category Cards */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
        >
          {featuredProducts.map((product, index) => {
            const cat = categories.find((c) => c.name === product.category)
            const count = products.filter((p) => p.category === product.category).length
            return (
              <Link
                key={product.id}
                href={`/products?category=${cat.slug}`}
                data-animate-item
                data-index={index}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  visibleItems.has(String(index))
                    ? 'animate-product-reveal'
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1e3a5f]/30 group-hover:bg-[#1e3a5f]/10 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#1e3a5f] mb-1 group-hover:text-[#c9a227] transition-colors leading-snug">
                    {product.category}
                  </h3>
                  <p className="text-xs text-gray-400">{count} products</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-10 py-4 rounded font-semibold hover:bg-[#c9a227] transition-colors"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
