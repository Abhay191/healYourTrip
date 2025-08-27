import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-medical-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">HealYourTrip</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your Gateway to World-Class Healthcare in India - Affordable, Transparent, Trusted
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Top Hospitals
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Top Doctors
                </Link>
              </li>
              <li>
                <Link href="/treatment-guide" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Treatment Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">info@healyourtrip.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HealYourTrip. All rights reserved. | 
            <Link href="/privacy" className="text-gray-400 hover:text-white ml-2">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="text-gray-400 hover:text-white ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
