import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { MapPin, Star, Phone, Mail } from 'lucide-react'

export default function HospitalsPage() {
  const hospitals = [
    {
      id: 1,
      name: 'Apollo Hospitals Delhi',
      location: 'New Delhi, India',
      specialties: ['Cardiology', 'Oncology', 'Orthopedics', 'Neurology', 'Transplant'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=300&fit=crop',
      description: 'One of India\'s most trusted healthcare institutions with world-class medical facilities and internationally trained doctors.',
      rating: 4.8,
      phone: '+91 11 7179 1090',
      email: 'delhi@apollohospitals.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 2,
      name: 'Fortis Healthcare Mumbai',
      location: 'Mumbai, India',
      specialties: ['Neurology', 'Transplant', 'Emergency Care', 'Cardiology', 'Oncology'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop',
      description: 'Leading multi-specialty hospital providing comprehensive healthcare services with cutting-edge technology.',
      rating: 4.7,
      phone: '+91 22 4925 4925',
      email: 'mumbai@fortishealthcare.com',
      accreditations: ['JCI', 'NABH', 'ISO 14001:2015']
    },
    {
      id: 3,
      name: 'Max Super Specialty Hospital',
      location: 'Delhi NCR, India',
      specialties: ['Cardiac Surgery', 'Cancer Care', 'Robotic Surgery', 'Orthopedics', 'Neurology'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop',
      description: 'State-of-the-art medical facility specializing in complex surgeries and advanced treatments.',
      rating: 4.6,
      phone: '+91 11 4055 4055',
      email: 'delhi@maxhealthcare.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 4,
      name: 'Manipal Hospitals Bangalore',
      location: 'Bangalore, India',
      specialties: ['Neurology', 'Cardiology', 'Orthopedics', 'Oncology', 'Transplant'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=300&fit=crop',
      description: 'Comprehensive healthcare provider with expertise in advanced medical procedures and patient care.',
      rating: 4.5,
      phone: '+91 80 2502 4444',
      email: 'bangalore@manipalhospitals.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 5,
      name: 'Kokilaben Dhirubhai Ambani Hospital',
      location: 'Mumbai, India',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Transplant'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop',
      description: 'World-class hospital with state-of-the-art infrastructure and internationally renowned medical professionals.',
      rating: 4.7,
      phone: '+91 22 3099 9999',
      email: 'info@kokilabenhospital.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 6,
      name: 'Medanta - The Medicity',
      location: 'Gurgaon, India',
      specialties: ['Cardiac Surgery', 'Liver Transplant', 'Neurology', 'Oncology', 'Orthopedics'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop',
      description: 'Multi-specialty medical institute providing world-class healthcare with cutting-edge technology.',
      rating: 4.8,
      phone: '+91 124 414 1414',
      email: 'info@medanta.org',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 7,
      name: 'Narayana Health',
      location: 'Bangalore, India',
      specialties: ['Cardiac Surgery', 'Oncology', 'Neurology', 'Orthopedics', 'Transplant'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=300&fit=crop',
      description: 'Leading healthcare provider known for affordable, high-quality medical care and innovative treatments.',
      rating: 4.6,
      phone: '+91 80 2222 2222',
      email: 'bangalore@narayanahealth.org',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    },
    {
      id: 8,
      name: 'Artemis Hospital',
      location: 'Gurgaon, India',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Emergency Care'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop',
      description: 'Modern healthcare facility providing comprehensive medical services with international standards.',
      rating: 4.5,
      phone: '+91 124 676 7000',
      email: 'info@artemishospitals.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Top Partner Hospitals
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            World-class medical facilities with international accreditations, cutting-edge technology, and experienced medical professionals
          </p>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="card-with-button hover:shadow-xl transition-shadow duration-200">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-48 object-cover"
                />
                <div className="card-content">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{hospital.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{hospital.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {hospital.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.specialties.slice(0, 3).map((specialty, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                    {hospital.specialties.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{hospital.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.accreditations.map((accreditation, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        {accreditation}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{hospital.email}</span>
                    </div>
                  </div>
                </div>
                <div className="card-button">
                  <div className="flex gap-3">
                    <Link 
                      href={`/hospitals/${hospital.id}`} 
                      className="btn-primary flex-1 text-center"
                    >
                      View Details
                    </Link>
                    <Link 
                      href="/contact" 
                      className="btn-secondary flex-1 text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with us for a free consultation and personalized treatment plan from our partner hospitals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/treatment-guide" className="btn-secondary">
              Learn About Treatments
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
