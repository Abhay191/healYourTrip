import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, MapPin, Phone, Mail, Clock, Award, Users, CheckCircle } from 'lucide-react'

// Sample hospital data - in real app, this would come from Supabase
const hospitals = [
  {
    id: '1',
    name: 'Apollo Hospitals Delhi',
    location: 'New Delhi, India',
    specialties: ['Cardiac Surgery', 'Oncology', 'Neurology', 'Orthopedics', 'Transplant Surgery'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop',
    description: 'Apollo Hospitals Delhi is a world-class healthcare facility known for its excellence in cardiac care, oncology, and complex surgeries. With state-of-the-art technology and internationally trained medical professionals, we provide comprehensive healthcare services to patients from around the world.',
    rating: 4.8,
    phone: '+91 11 7179 1090',
    email: 'delhi@apollohospitals.com',
    accreditations: ['JCI', 'NABH', 'ISO 9001:2015', 'CAP'],
    established: '1996',
    beds: '700+',
    doctors: '150+',
    international_patients: '5000+',
    languages: ['English', 'Hindi', 'Arabic', 'French', 'German'],
    facilities: [
      '24/7 Emergency Services',
      'International Patient Services',
      'Multi-language Support',
      'Airport Pickup & Drop',
      'Hotel Accommodation',
      'Visa Assistance',
      'Translation Services',
      'Post-treatment Follow-up'
    ],
    achievements: [
      'First successful heart transplant in India',
      'Pioneer in robotic surgery',
      'International patient satisfaction rate: 98%',
      'Awarded Best Hospital in Delhi 2023'
    ],
    address: 'Sarita Vihar, Delhi Mathura Road, New Delhi - 110076, India',
    working_hours: '24/7 Emergency Services, OPD: 8:00 AM - 8:00 PM'
  },
  {
    id: '2',
    name: 'Fortis Healthcare Mumbai',
    location: 'Mumbai, India',
    specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Emergency Care'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop',
    description: 'Fortis Healthcare Mumbai is a premier medical institution offering world-class healthcare services with a focus on patient-centric care. Our team of internationally trained specialists provides comprehensive treatment plans using cutting-edge medical technology.',
    rating: 4.7,
    phone: '+91 22 6767 6767',
    email: 'mumbai@fortishealthcare.com',
    accreditations: ['JCI', 'NABH', 'ISO 9001:2015'],
    established: '2001',
    beds: '500+',
    doctors: '120+',
    international_patients: '3000+',
    languages: ['English', 'Hindi', 'Marathi', 'Arabic', 'French'],
    facilities: [
      'Advanced Cardiac Care Unit',
      'Comprehensive Cancer Center',
      'Neurological Institute',
      'Orthopedic Excellence Center',
      'International Patient Lounge',
      'Concierge Services',
      'Medical Tourism Support',
      'Post-treatment Rehabilitation'
    ],
    achievements: [
      'Center of Excellence in Cardiology',
      'Best Hospital for International Patients 2022',
      'Highest success rate in complex surgeries',
      'International patient satisfaction: 96%'
    ],
    address: '154, Bannerghatta Road, Bengaluru - 560076, Karnataka, India',
    working_hours: '24/7 Emergency Services, OPD: 7:00 AM - 9:00 PM'
  },
  {
    id: '3',
    name: 'Max Super Specialty Hospital',
    location: 'Delhi, India',
    specialties: ['Cardiac Surgery', 'Oncology', 'Neurology', 'Orthopedics', 'Transplant'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop',
    description: 'Max Super Specialty Hospital is a leading healthcare provider known for its excellence in complex medical procedures and patient care. With state-of-the-art infrastructure and experienced medical professionals, we deliver world-class healthcare services.',
    rating: 4.6,
    phone: '+91 11 4055 4055',
    email: 'delhi@maxhealthcare.com',
    accreditations: ['JCI', 'NABH', 'ISO 9001:2015'],
    established: '2005',
    beds: '600+',
    doctors: '130+',
    international_patients: '4000+',
    languages: ['English', 'Hindi', 'Arabic', 'French', 'Spanish'],
    facilities: [
      'Advanced Cardiac Care',
      'Comprehensive Cancer Treatment',
      'Neurological Excellence',
      'Orthopedic Specialization',
      'International Patient Services',
      'Luxury Patient Rooms',
      'Medical Tourism Support',
      'Post-treatment Care'
    ],
    achievements: [
      'Excellence in Cardiac Care Award 2023',
      'Best Hospital for International Patients',
      'High success rate in complex surgeries',
      'Patient satisfaction rate: 95%'
    ],
    address: '1, 2, Press Enclave Marg, Saket, New Delhi - 110017, India',
    working_hours: '24/7 Emergency Services, OPD: 8:00 AM - 8:00 PM'
  },
  {
    id: '4',
    name: 'Manipal Hospitals Bangalore',
    location: 'Bangalore, India',
    specialties: ['Neurology', 'Cardiology', 'Orthopedics', 'Transplant Surgery', 'Robotic Surgery'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
    description: 'Manipal Hospitals Bangalore is a premier healthcare institution known for its excellence in neurology, cardiology, and advanced surgical procedures. With cutting-edge technology and world-class medical professionals, we provide comprehensive healthcare solutions.',
    rating: 4.7,
    phone: '+91 80 2222 0000',
    email: 'bangalore@manipalhospitals.com',
    accreditations: ['JCI', 'NABH', 'ISO 9001:2015', 'CAP'],
    established: '1991',
    beds: '650+',
    doctors: '140+',
    international_patients: '3500+',
    languages: ['English', 'Hindi', 'Kannada', 'Arabic', 'French', 'German'],
    facilities: [
      'Advanced Neurological Institute',
      'Cardiac Excellence Center',
      'Robotic Surgery Unit',
      'International Patient Services',
      'Luxury Accommodation',
      'Visa & Travel Support',
      'Multi-language Assistance',
      'Post-treatment Care'
    ],
    achievements: [
      'Center of Excellence in Neurology 2023',
      'Best Hospital for International Patients',
      'Pioneer in robotic surgery in South India',
      'International patient satisfaction: 97%'
    ],
    address: '98, HAL Airport Road, Kodihalli, Bangalore - 560017, Karnataka, India',
    working_hours: '24/7 Emergency Services, OPD: 7:00 AM - 9:00 PM'
  }
]

interface HospitalDetailPageProps {
  params: {
    id: string
  }
}

export default function HospitalDetailPage({ params }: HospitalDetailPageProps) {
  const hospital = hospitals.find(h => h.id === params.id)

  if (!hospital) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {hospital.name}
              </h1>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">{hospital.location}</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-yellow-300 fill-current mr-2" />
                <span className="text-2xl font-semibold">{hospital.rating}</span>
                <span className="ml-2 text-primary-100">/ 5.0</span>
              </div>
              <p className="text-xl text-primary-100 leading-relaxed">
                {hospital.description}
              </p>
            </div>
            <div className="relative">
              <img 
                src={hospital.image} 
                alt={hospital.name}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Key Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hospital Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Established</p>
                      <p className="font-semibold text-gray-900">{hospital.established}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Beds</p>
                      <p className="font-semibold text-gray-900">{hospital.beds}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Specialist Doctors</p>
                      <p className="font-semibold text-gray-900">{hospital.doctors}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">International Patients</p>
                      <p className="font-semibold text-gray-900">{hospital.international_patients}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hospital.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-lg text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Patient Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hospital.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-lg text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements & Awards</h2>
                <div className="space-y-4">
                  {hospital.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{hospital.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{hospital.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hospital.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hospital.working_hours}</span>
                  </div>
                </div>
              </div>

              {/* Accreditations */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accreditations</h3>
                <div className="flex flex-wrap gap-2">
                  {hospital.accreditations.map((accreditation, idx) => (
                    <span key={idx} className="px-3 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-lg">
                      {accreditation}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {hospital.languages.map((language, idx) => (
                    <span key={idx} className="px-3 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started</h3>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Book Free Consultation
                  </Link>
                  <Link href="/doctors" className="btn-secondary w-full text-center block">
                    View Doctors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with us for a free consultation and personalized treatment plan at {hospital.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary-lg">
              Get Free Consultation
            </Link>
            <Link href="/hospitals" className="btn-secondary">
              View All Hospitals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
