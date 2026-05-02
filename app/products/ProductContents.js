'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ChevronRight, Search, Filter, X, Phone } from 'lucide-react'
import { categories, products } from '@/lib/products-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'

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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Small delay to ensure DOM is ready
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

export default function ProductsContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { containerRef, visibleItems } = useScrollAnimation()

  useEffect(() => {
    const categorySlug = searchParams.get('category')
    if (categorySlug) {
      const match = categories.find((c) => c.slug === categorySlug)
      if (match) setActiveCategory(match.name)
    }
  }, [searchParams])

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/products/products-hero.jpg"
          alt="Rudra Brass Industries Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest mb-2">
            Rudra Brass Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Link href="/" className="hover:text-[#c9a227] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#c9a227]">Products</span>
          </div>
        </div>
      </section>

      <main className="bg-[#f8f9fa] min-h-screen py-16">
        <div className="container mx-auto px-4">

          {/* Search + Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e3a5f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-3 rounded-lg border border-gray-200">
              <Filter className="w-4 h-4" />
              <span>{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Categories */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-[#1e3a5f] px-5 py-4">
                  <h2 className="text-white font-bold text-lg">Categories</h2>
                </div>
                <nav className="py-2">
                  {categories.map((cat) => {
                    const count = cat.name === 'All'
                      ? products.length
                      : products.filter((p) => p.category === cat.name).length
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => {
                          setActiveCategory(cat.name)
                          setSearchQuery('')
                        }}
                        className={`w-full flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors text-left ${
                          activeCategory === cat.name
                            ? 'bg-[#c9a227]/10 text-[#c9a227] border-l-4 border-[#c9a227]'
                            : 'text-[#1e3a5f] hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                          activeCategory === cat.name ? 'bg-[#c9a227] text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </nav>

                {/* Quick Contact */}
                <div className="m-4 bg-[#1e3a5f] rounded-lg p-4 text-white text-center">
                  <p className="text-xs text-white/70 mb-1">Need help choosing?</p>
                  <p className="font-bold text-sm mb-3">Talk to our experts</p>
                  <a
                    href="tel:+919173684333"
                    className="flex items-center justify-center gap-2 bg-[#c9a227] text-white text-sm px-4 py-2 rounded font-semibold hover:bg-[#a68521] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <section className="flex-1">
              {/* Category Title */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f]">{activeCategory}</h2>
                <div className="w-12 h-1 bg-[#c9a227] mt-2" />
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-gray-400 text-lg">No products found for &quot;{searchQuery}&quot;</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                    className="mt-4 text-[#c9a227] underline text-sm"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div 
                  ref={containerRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filtered.map((product, index) => (
                    <div
                      key={product.id}
                      data-animate-item
                      data-index={index}
                      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                        visibleItems.has(String(index))
                          ? 'animate-product-reveal'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        animationDelay: visibleItems.has(String(index))
                          ? `${(index % 4) * 100}ms`
                          : '0ms',
                      }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#1e3a5f]/90 text-white text-xs px-2 py-1 rounded font-medium">
                          {product.category.split(' ')[0]}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-[#1e3a5f] mb-3 line-clamp-2 group-hover:text-[#c9a227] transition-colors leading-relaxed">
                          {product.name}
                        </h3>
                        <button className="inline-flex items-center text-xs text-[#c9a227] font-semibold hover:text-[#1e3a5f] transition-colors">
                          View Details
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-gray-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 shadow transition-colors"
              >
                <X className="w-5 h-5 text-[#1e3a5f]" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-[#c9a227] uppercase tracking-wider">
                {selectedProduct.category}
              </span>
              <h3 className="text-xl font-bold text-[#1e3a5f] mt-1 mb-3">{selectedProduct.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedProduct.description}</p>
              <div className="flex gap-3">
                <Link
                  href="/#contact"
                  className="flex-1 bg-[#1e3a5f] text-white text-sm font-semibold py-3 rounded-lg text-center hover:bg-[#c9a227] transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+919173684333"
                  className="flex-1 border-2 border-[#1e3a5f] text-[#1e3a5f] text-sm font-semibold py-3 rounded-lg text-center hover:bg-[#1e3a5f] hover:text-white transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
