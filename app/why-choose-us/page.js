'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  Shield, Truck, DollarSign, Users, Award, Globe,
  CheckCircle, ChevronRight, Phone, Mail, Star,
  Clock, Headphones, Layers, Zap
} from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Unmatched Quality Assurance',
    description: 'Every product undergoes a rigorous multi-stage inspection process — from raw material selection to final dispatch. Our ISO 9001:2015 certified processes guarantee zero-defect delivery.',
    points: ['100% dimensional inspection', 'Pressure and pull-out testing', 'Material certification on request'],
  },
  {
    icon: Truck,
    title: 'Reliable On-Time Delivery',
    description: 'We maintain a large ready stock of standard products and work with trusted logistics partners globally to ensure your orders arrive on schedule, every time.',
    points: ['Ready stock for standard items', 'Express dispatch within 24 hours', 'Global freight partnerships'],
  },
  {
    icon: DollarSign,
    title: 'Highly Competitive Pricing',
    description: 'Our vertically integrated manufacturing, in-house tooling, and bulk raw material procurement allow us to pass significant cost savings directly to you without compromising quality.',
    points: ['Volume discount pricing', 'In-house tooling — no middlemen', 'Transparent pricing with no hidden fees'],
  },
  {
    icon: Users,
    title: 'Custom Engineering Solutions',
    description: 'From bespoke cable gland dimensions to custom alloy compositions and plating finishes, our R&D and tooling team can develop products tailored precisely to your specifications.',
    points: ['OEM/ODM manufacturing', 'Custom thread forms & dimensions', 'Prototype in as little as 7 days'],
  },
  {
    icon: Globe,
    title: 'Proven Global Track Record',
    description: 'Trusted by distributors, system integrators, and EPC contractors in over 50 countries, we have the experience and documentation to meet international import and compliance requirements.',
    points: ['50+ countries export experience', 'Country-specific compliance docs', 'Multi-language technical support'],
  },
  {
    icon: Headphones,
    title: 'Dedicated After-Sales Support',
    description: 'Our technical support team is available to help with product selection, installation guidance, troubleshooting, and warranty claims — ensuring a seamless experience from enquiry to post-sale.',
    points: ['Product selection assistance', 'Technical datasheets & drawings', 'Quick response within 24 hours'],
  },
]

const comparisons = [
  { feature: 'ISO 9001:2015 Certified', us: true, others: false },
  { feature: 'Custom Product Development', us: true, others: false },
  { feature: 'In-house Tooling & R&D', us: true, others: false },
  { feature: 'Ready Stock Available', us: true, others: true },
  { feature: 'ATEX / IECEx Certified Products', us: true, others: false },
  { feature: 'Export to 50+ Countries', us: true, others: false },
  { feature: 'Technical Support Team', us: true, others: true },
  { feature: 'Competitive Pricing', us: true, others: true },
]

const testimonials = [
  {
    name: 'James Thornton',
    company: 'EPC Contractor, UK',
    review: 'We have sourced cable glands from Rudra for over 8 years. Their quality is consistently excellent, and their ability to supply custom ATEX-certified glands at competitive prices is unmatched.',
    rating: 5,
  },
  {
    name: 'Ahmed Al-Rashid',
    company: 'Industrial Distributor, UAE',
    review: 'Fast delivery, accurate documentation, and a product range that covers everything we need. Rudra is our go-to supplier for all brass cable gland requirements.',
    rating: 5,
  },
  {
    name: 'Lars Hoffmann',
    company: 'Automation Engineer, Germany',
    review: 'The precision on Rudra\'s CNC-machined cable glands is impressive. Tight tolerances, good surface finish, and fully compliant with EN50262 standard.',
    rating: 5,
  },
]

const stats = [
  { value: '33+', label: 'Years of Expertise' },
  { value: '2000+', label: 'Product Variants' },
  { value: '50+', label: 'Countries Served' },
  { value: '99%', label: 'On-Time Delivery Rate' },
]

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const numeric = parseInt(target)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let current = 0
    const steps = 60
    const increment = numeric / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= numeric) { setCount(numeric); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [started, numeric])

  return <span ref={ref}>{count}{target.replace(/[0-9]/g, '')}</span>
}

export default function WhyChooseUsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative bg-[#1a3a2a] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <p className="text-[#EDE8D0] font-semibold text-lg mb-2">Why Choose Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                The Rudra Advantage
              </h1>
              <div className="w-24 h-1 bg-[#EDE8D0] mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                For over 33 years, Rudra Brass Industries has been the trusted choice for procurement 
                managers, engineers, and distributors worldwide. Here is why thousands of customers 
                keep coming back.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[#EDE8D0] text-gray-700 px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
                >
                  Explore Products <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
                >
                  Get a Quote <Phone className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1a3a2a] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-[#EDE8D0]">
                    <Counter target={s.value} />
                  </p>
                  <p className="text-gray-300 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-[#1a3a2a] font-semibold text-lg mb-2">Our Strengths</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">
                6 Reasons to Choose Rudra
              </h2>
              <div className="w-24 h-1 bg-[#1a3a2a] mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#1a3a2a] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#EDE8D0] transition-colors">
                    <b.icon className="w-7 h-7 text-white group-hover:text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{b.description}</p>
                  <ul className="space-y-2">
                    {b.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#1a3a2a] flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#1a3a2a] font-semibold text-lg mb-2">The Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">
                Rudra vs. Other Suppliers
              </h2>
              <div className="w-24 h-1 bg-[#1a3a2a] mx-auto" />
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1a3a2a] text-white">
                <div className="p-4 font-semibold">Feature</div>
                <div className="p-4 font-semibold text-center text-[#EDE8D0]">Rudra Brass</div>
                <div className="p-4 font-semibold text-center text-gray-400">Others</div>
              </div>
              {comparisons.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 items-center border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}
                >
                  <div className="p-4 text-gray-700 text-sm">{row.feature}</div>
                  <div className="p-4 text-center">
                    {row.us
                      ? <CheckCircle className="w-5 h-5 text-[#1a3a2a] mx-auto" />
                      : <span className="text-gray-300 text-xl font-bold">—</span>}
                  </div>
                  <div className="p-4 text-center">
                    {row.others
                      ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      : <span className="text-gray-300 text-xl font-bold">—</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#1a3a2a] font-semibold text-lg mb-2">Client Feedback</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">
                What Our Customers Say
              </h2>
              <div className="w-24 h-1 bg-[#1a3a2a] mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-[#1a3a2a] fill-[#1a3a2a]" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">{`"${t.review}"`}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1a3a2a] flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3a2a] text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a3a2a]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Experience the Rudra Difference Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers around the world. Request a quote or browse 
              our complete product catalogue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#EDE8D0] text-gray-700 px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
              >
                Browse Products <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@rudrabrassindustries.com"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
              >
                Send Enquiry <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
