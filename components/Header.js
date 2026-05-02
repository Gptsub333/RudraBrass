'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Brass Cable Glands', href: '/products?category=brass-cable-glands' },
        { name: 'Cable Gland Accessories', href: '/products?category=cable-glands-accessories' },
        { name: 'Cable Lugs & Connectors', href: '/products?category=cable-lugs-connectors' },
        { name: 'Brass Earthing Parts', href: '/products?category=brass-earthing-parts' },
        { name: 'Cable Gland Kits', href: '/products?category=cable-gland-kits' },
      ]
    },
    { name: 'Manufacturing', href: '/#manufacturing' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact Us', href: '/#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a3a2a] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919173684333" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4" />
              +91-91736 84333454
            </a>
            <a href="tel:+919998707757" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4" />
              +91-99987 07757455
            </a>
          </div>
          <a href="mailto:info@rudrabrassindustries.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail className="w-4 h-4" />
            info@rudrabrassindustries.com
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1a3a2a] rounded-full flex items-center justify-center">
                <span className="text-gray-200 font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#1a3a2a] leading-tight">RUDRA</h1>
                <p className="text-xs text-[#4a7c59] font-medium">BRASS INDUSTRIES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-[#1a3a2a] font-medium hover:text-[#4a7c59] transition-colors py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border-t-2 border-[#4a7c59]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#1a3a2a] hover:bg-[#f5f5f5] hover:text-[#4a7c59] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="hidden lg:block bg-[#1a3a2a] text-white px-6 py-3 rounded font-semibold hover:bg-[#4a7c59] transition-colors"
            >
              Get A Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1a3a2a]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-[#1a3a2a] font-medium hover:text-[#4a7c59] border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#4a7c59]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/#contact"
                className="block mt-4 bg-[#1a3a2a] text-white px-6 py-3 rounded font-semibold text-center hover:bg-[#4a7c59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
