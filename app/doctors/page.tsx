import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Star, MapPin, Award, Phone, Mail, Calendar } from 'lucide-react'

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialization: 'Cardiothoracic Surgeon',
      experience: 15,
      hospital: 'Apollo Hospitals Delhi',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      description: 'Leading cardiothoracic surgeon with expertise in complex heart surgeries, valve replacements, and minimally invasive procedures.',
      education: 'MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)',
      awards: ['Best Cardiothoracic Surgeon 2023', 'Excellence in Cardiac Care'],
      phone: '+91 11 7179 1090',
      email: 'dr.rajesh@apollohospitals.com',
      languages: ['English', 'Hindi', 'Punjabi'],
      consultation_fee: '₹2000'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialization: 'Oncologist',
      experience: 12,
      hospital: 'Fortis Healthcare Mumbai',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=400&h=400&fit=crop',
      description: 'Specialized in medical oncology with focus on breast cancer, lung cancer, and personalized treatment plans.',
      education: 'MBBS, MD (Internal Medicine), DM (Oncology)',
      awards: ['Oncologist of the Year 2022', 'Research Excellence Award'],
      phone: '+91 22 4925 4925',
      email: 'dr.priya@fortishealthcare.com',
      languages: ['English', 'Hindi', 'Marathi'],
      consultation_fee: '₹2500'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialization: 'Orthopedic Surgeon',
      experience: 18,
      hospital: 'Max Super Specialty Hospital',
      location: 'Delhi NCR, India',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      description: 'Expert in joint replacement surgeries, sports medicine, and minimally invasive orthopedic procedures.',
      education: 'MBBS, MS (Orthopedics), Fellowship in Joint Replacement',
      awards: ['Orthopedic Excellence Award', 'Best Surgeon 2023'],
      phone: '+91 11 4055 4055',
      email: 'dr.amit@maxhealthcare.com',
      languages: ['English', 'Hindi', 'Gujarati'],
      consultation_fee: '₹1800'
    },
    {
      id: 4,
      name: 'Dr. Meera Reddy',
      specialization: 'Neurologist',
      experience: 14,
      hospital: 'Manipal Hospitals Bangalore',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      description: 'Specialized in neurological disorders, stroke treatment, and advanced diagnostic procedures.',
      education: 'MBBS, MD (Medicine), DM (Neurology)',
      awards: ['Neurologist of the Year', 'Excellence in Stroke Care'],
      phone: '+91 80 2502 4444',
      email: 'dr.meera@manipalhospitals.com',
      languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
      consultation_fee: '₹2200'
    },
    {
      id: 5,
      name: 'Dr. Sanjay Verma',
      specialization: 'Transplant Surgeon',
      experience: 16,
      hospital: 'Kokilaben Dhirubhai Ambani Hospital',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      description: 'Leading transplant surgeon specializing in kidney, liver, and multi-organ transplant procedures.',
      education: 'MBBS, MS (General Surgery), Fellowship in Transplant Surgery',
      awards: ['Transplant Surgeon of the Year', 'Excellence in Organ Transplantation'],
      phone: '+91 22 3099 9999',
      email: 'dr.sanjay@kokilabenhospital.com',
      languages: ['English', 'Hindi', 'Marathi'],
      consultation_fee: '₹3000'
    },
    {
      id: 6,
      name: 'Dr. Anjali Desai',
      specialization: 'Fertility Specialist',
      experience: 13,
      hospital: 'Medanta - The Medicity',
      location: 'Gurgaon, India',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=400&h=400&fit=crop',
      description: 'Expert in reproductive medicine, IVF procedures, and fertility treatments with high success rates.',
      education: 'MBBS, MD (Obstetrics & Gynecology), Fellowship in Reproductive Medicine',
      awards: ['Fertility Specialist of the Year', 'Excellence in IVF'],
      phone: '+91 124 414 1414',
      email: 'dr.anjali@medanta.org',
      languages: ['English', 'Hindi', 'Gujarati'],
      consultation_fee: '₹2000'
    },
    {
      id: 7,
      name: 'Dr. Rajesh Verma',
      specialization: 'Neurosurgeon',
      experience: 17,
      hospital: 'Narayana Health',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      description: 'Specialized in complex brain and spine surgeries, minimally invasive procedures, and neuro-oncology.',
      education: 'MBBS, MS (General Surgery), MCh (Neurosurgery)',
      awards: ['Neurosurgeon of the Year', 'Excellence in Brain Surgery'],
      phone: '+91 80 2222 2222',
      email: 'dr.rajesh.verma@narayanahealth.org',
      languages: ['English', 'Hindi', 'Kannada'],
      consultation_fee: '₹2800'
    },
    {
      id: 8,
      name: 'Dr. Priya Singh',
      specialization: 'Dermatologist',
      experience: 11,
      hospital: 'Artemis Hospital',
      location: 'Gurgaon, India',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=400&h=400&fit=crop',
      description: 'Expert in cosmetic dermatology, skin cancer treatment, and advanced dermatological procedures.',
      education: 'MBBS, MD (Dermatology), Fellowship in Cosmetic Dermatology',
      awards: ['Dermatologist of the Year', 'Excellence in Skin Care'],
      phone: '+91 124 676 7000',
      email: 'dr.priya.singh@artemishospitals.com',
      languages: ['English', 'Hindi', 'Punjabi'],
      consultation_fee: '₹1500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Top Medical Specialists
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Experienced doctors with international training, cutting-edge expertise, and commitment to patient care
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card-with-button hover:shadow-xl transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-primary-600">₹{doctor.consultation_fee}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                      <p className="text-primary-600 font-medium">{doctor.specialization}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">4.8</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{doctor.hospital}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{doctor.experience} years experience</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {doctor.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-medium">Education:</span> {doctor.education}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{doctor.email}</span>
                    </div>
                  </div>
                </div>
                <div className="card-button">
                  <div className="flex gap-3">
                    <Link 
                      href={`/doctors/${doctor.id}`} 
                      className="btn-primary flex-1 text-center"
                    >
                      View Profile
                    </Link>
                    <Link 
                      href="/contact" 
                      className="btn-secondary flex-1 text-center"
                    >
                      Contact Doctor
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
            Need Expert Medical Consultation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with our top specialists for personalized treatment plans and expert medical advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Consultation
            </Link>
            <Link href="/hospitals" className="btn-secondary">
              View Hospitals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
