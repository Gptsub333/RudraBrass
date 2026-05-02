import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Manufacturing', href: '/#manufacturing' },
  { name: 'Contact Us', href: '/#contact' },
]

const products = [
  { name: 'Brass Cable Glands', href: '/products?category=brass-cable-glands' },
  { name: 'Cable Gland Accessories', href: '/products?category=cable-glands-accessories' },
  { name: 'Cable Lugs & Connectors', href: '/products?category=cable-lugs-connectors' },
  { name: 'Brass Earthing Parts', href: '/products?category=brass-earthing-parts' },
  { name: 'Cable Gland Kits', href: '/products?category=cable-gland-kits' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#EDE8D0] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">RUDRA</h3>
                <p className="text-xs text-gray-300 font-medium">BRASS INDUSTRIES</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A prominent manufacturer specializing in high-quality cable glands and electrical 
              accessories for industrial applications since 1991.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#EDE8D0] rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Our Products
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    href={product.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Jamnagar, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <a href="tel:+919173684333" className="block hover:text-gray-100 transition-colors">
                    +91-91736 84333454
                  </a>
                  <a href="tel:+919998707757" className="block hover:text-gray-100 transition-colors">
                    +91-99987 077574455
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <a 
                  href="mailto:info@rudrabrassindustries.com" 
                  className="text-gray-300 hover:text-gray-100 transition-colors break-all"
                >
                  info@rudrabrassindustries.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rudra Brass Industries. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
