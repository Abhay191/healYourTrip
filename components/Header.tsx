'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Top Hospitals', href: '/hospitals' },
    { name: 'Top Doctors', href: '/doctors' },
    { name: 'About Us', href: '/about' },
    { name: 'Treatment Guide', href: '/treatment-guide' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-medical-600 rounded-xl flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">HealYourTrip</h1>
              <p className="text-sm text-gray-500 leading-tight">Medical Tourism</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-primary-50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary px-6 py-3 text-sm font-medium">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-primary-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Link href="/contact" className="btn-primary w-full text-center block py-3">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
