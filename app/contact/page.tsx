import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ConsultationForm from '@/components/ConsultationForm'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Globe,
  Shield,
  Users
} from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@healyourtrip.com', 'support@healyourtrip.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['HealYourTrip Medical Tourism', '123 Healthcare Plaza, Bandra West', 'Mumbai, Maharashtra 400050', 'India'],
      description: 'Visit our office for in-person consultation'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      description: '24/7 emergency support available'
    }
  ]

  const services = [
    {
      icon: Globe,
      title: 'International Support',
      description: 'We serve patients from over 25 countries with multilingual support and cultural sensitivity.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All our partner hospitals are internationally accredited and maintain the highest safety standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team includes experienced medical professionals, travel coordinators, and patient care specialists.'
    },
    {
      icon: MessageCircle,
      title: '24/7 Communication',
      description: 'Round-the-clock support and communication throughout your medical journey.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-medical-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for a free consultation and start your medical tourism journey to India
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our medical tourism experts will contact you within 24 hours to discuss your treatment requirements and provide a personalized plan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Confidential</h3>
                    <p className="text-gray-600">Your information is completely secure and confidential. We never share your details with third parties.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Our medical professionals will guide you through every step of your medical tourism journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours, ensuring you get the information you need quickly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <ConsultationForm isFullWidth={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your medical tourism needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{info.title}</h3>
                <div className="space-y-2 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-center">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm text-center">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support throughout your medical tourism journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Mumbai, easily accessible from all parts of the city
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">
                    HealYourTrip Medical Tourism<br />
                    123 Healthcare Plaza, Bandra West<br />
                    Mumbai, Maharashtra 400050, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about contacting us
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">We respond to all inquiries within 24 hours. For urgent medical cases, we provide immediate assistance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I schedule a video consultation?</h3>
              <p className="text-gray-600">Yes, we offer video consultations for your convenience. You can schedule one after submitting your initial inquiry.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What information do I need to provide?</h3>
              <p className="text-gray-600">Basic contact information, treatment requirements, and any existing medical reports will help us provide better assistance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide support in multiple languages?</h3>
              <p className="text-gray-600">Yes, we provide support in English, Hindi, and can arrange interpreters for other languages as needed.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
