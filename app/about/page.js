import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  Award, Settings, Target, Zap, CheckCircle,
  Users, Globe, Factory, ChevronRight, Phone, Mail
} from 'lucide-react'

export const metadata = {
  title: 'About Us | Rudra Brass Industries',
  description: 'Learn about Rudra Brass Industries — a leading manufacturer of brass cable glands since 1991, based in Jamnagar, Gujarat, India.',
}

const milestones = [
  { year: '1991', title: 'Company Founded', desc: 'Started as a brass casting workshop in Jamnagar, Gujarat.' },
  { year: '2004', title: 'Manufacturing Expansion', desc: 'Expanded into full-scale cable gland manufacturing with CNC machinery.' },
  { year: '2010', title: 'ISO Certification', desc: 'Achieved ISO 9001 certification for quality management systems.' },
  { year: '2015', title: 'Global Exports', desc: 'Began exporting to over 30 countries across Europe, Asia, and the Americas.' },
  { year: '2020', title: '2000+ Products', desc: 'Product range grew to over 2000 variants to meet diverse industrial needs.' },
  { year: '2024', title: '50+ Countries', desc: 'Trusted partner for customers in more than 50 countries worldwide.' },
]

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Every product undergoes stringent multi-stage quality checks before leaving our facility. We use only the finest grade brass alloys sourced from certified suppliers.',
  },
  {
    icon: Settings,
    title: 'Advanced Technology',
    description: 'Our state-of-the-art CNC machining centres, automatic lathes, and computerised testing equipment ensure precision down to the micron level.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'With tolerances as tight as ±0.01mm, our products meet the most demanding specifications across industries including oil & gas, marine, and defense.',
  },
  {
    icon: Zap,
    title: 'Innovation Driven',
    description: 'Our in-house R&D team continuously develops new product variants and improves existing designs to stay ahead of evolving industry standards.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We offer custom solutions, fast turnaround times, and dedicated account management to ensure every customer\'s unique requirements are met.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Supplying to distributors, OEMs, and EPC contractors in over 50 countries, we have established a truly global footprint from Jamnagar.',
  },
]

const certifications = [
  'ISO 9001:2015 — Quality Management System',
  'CE Marking — European Conformity',
  'RoHS Compliant — Restriction of Hazardous Substances',
  'ATEX Certified — Explosive Atmospheres',
  'IECEx Certified — International Electrotechnical Commission',
]

const stats = [
  { value: '33+', label: 'Years of Experience', icon: Award },
  { value: '2000+', label: 'Product Variants', icon: Factory },
  { value: '100+', label: 'Skilled Employees', icon: Users },
  { value: '50+', label: 'Countries Served', icon: Globe },
]

export default function AboutPage() {
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
              <p className="text-[#EDE8D0] font-semibold text-lg mb-2">Know About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                Crafting Precision Brass Since 1991
              </h1>
              <div className="w-24 h-1 bg-[#EDE8D0] mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                From a humble workshop in Jamnagar to a globally trusted manufacturer — our journey 
                is built on relentless quality, precision engineering, and an unwavering commitment to 
                customer satisfaction.
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
                  Contact Us <Phone className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1a3a2a] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#EDE8D0]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-[#EDE8D0]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#EDE8D0] font-semibold text-lg mb-2">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">Who We Are</h2>
                <div className="w-24 h-1 bg-[#EDE8D0] mb-6" />
                <p className="text-gray-600 leading-relaxed mb-5">
                  Rudra Brass Industries is a prominent manufacturer and exporter specialising in high-quality 
                  brass cable glands and electrical accessories for a wide range of industrial applications. 
                  Founded in 1991 in the brass capital of India — Jamnagar, Gujarat — we bring over 33 years 
                  of deep expertise in brass casting and precision machining.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Since our expansion into manufacturing in 2004, we have grown into a full-service production 
                  facility equipped with CNC machining centres, automatic lathes, and state-of-the-art quality 
                  testing equipment. Our facility spans over 10,000 sq. ft. and employs more than 100 skilled 
                  engineers, machinists, and quality professionals.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Today, Rudra Brass Industries supplies to distributors, OEMs, and EPC contractors in 
                  more than 50 countries, with a product catalogue of over 2000 variants covering cable glands, 
                  accessories, lugs, connectors, and earthing solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    'ISO 9001:2015 certified quality management',
                    'In-house R&D and custom product development',
                    'Exports to Europe, Americas, Middle East & Asia',
                    'Dedicated after-sales technical support',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1a3a2a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/factory.jpg"
                    alt="Rudra Brass Industries factory floor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#1a3a2a] text-white p-6 rounded-xl shadow-xl">
                  <p className="text-4xl font-bold text-[#EDE8D0]">1991</p>
                  <p className="text-sm font-medium text-gray-300">Established in Jamnagar</p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#EDE8D0] rounded-xl opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#1a3a2a] font-semibold text-lg mb-2">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">Our Core Values</h2>
              <div className="w-24 h-1 bg-[#1a3a2a] mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#1a3a2a] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#EDE8D0] transition-colors">
                    <value.icon className="w-7 h-7 text-white group-hover:text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey / Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-[#1a3a2a] font-semibold text-lg mb-2">Our History</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">
                Our Journey Over the Years
              </h2>
              <div className="w-24 h-1 bg-[#1a3a2a] mx-auto" />
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#1a3a2a]/10 hidden md:block" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bg-[#f8f9fa] p-6 rounded-xl inline-block w-full hover:shadow-md transition-shadow`}>
                        <p className="text-[#1a3a2a] font-bold text-xl mb-1">{m.year}</p>
                        <h3 className="text-[#1a3a2a] font-bold text-lg mb-2">{m.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    {/* Centre dot */}
                    <div className="w-5 h-5 rounded-full bg-[#1a3a2a] border-4 border-white shadow-md flex-shrink-0 z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team & Quality */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/about/team.jpg" alt="Our team" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/about/quality.jpg" alt="Quality inspection" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg -mt-8">
                  <Image src="/images/about/certificates.jpg" alt="Certifications" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-xl bg-[#1a3a2a] flex flex-col items-center justify-center p-6 shadow-lg">
                  <p className="text-5xl font-bold text-[#EDE8D0]">100+</p>
                  <p className="text-white font-semibold text-center mt-2 text-sm">Skilled Engineers & Machinists</p>
                </div>
              </div>
              <div>
                <p className="text-[#1a3a2a] font-semibold text-lg mb-2">Quality & Compliance</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4 text-balance">
                  Built to the Highest Standards
                </h2>
                <div className="w-24 h-1 bg-[#1a3a2a] mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Quality is not an afterthought at Rudra — it is embedded in every step of our 
                  manufacturing process. From incoming raw material inspection to final dispatch, 
                  each product is tested against strict dimensional, mechanical, and electrical standards.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our products are compliant with international standards including IEC, BS, DIN, and 
                  NEMA, making them suitable for use in demanding environments worldwide.
                </p>
                <h3 className="text-lg font-bold text-[#1a3a2a] mb-4">Our Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1a3a2a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a3a2a]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need standard products or custom-engineered solutions, our team is ready 
              to support your requirements from inquiry to delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#EDE8D0] text-gray-700 px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
              >
                Browse Products <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@girirajbrassproducts.com"
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
