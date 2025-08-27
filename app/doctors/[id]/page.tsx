import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, MapPin, Phone, Mail, Calendar, Award, Users, CheckCircle, GraduationCap, Languages } from 'lucide-react'

// Sample doctor data - in real app, this would come from Supabase
const doctors = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiothoracic Surgeon',
    experience: 25,
    hospital: 'Apollo Hospitals Delhi',
    location: 'New Delhi, India',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    description: 'Dr. Rajesh Kumar is a renowned cardiothoracic surgeon with over 25 years of experience in complex cardiac procedures. He has performed more than 10,000 successful heart surgeries and is known for his expertise in minimally invasive techniques.',
    education: 'MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)',
    awards: [
      'Best Cardiothoracic Surgeon Award 2022',
      'Excellence in Cardiac Care 2021',
      'International Recognition for Innovation in Surgery 2020'
    ],
    languages: ['English', 'Hindi', 'Arabic'],
    consultation_fee: '₹5,000',
    phone: '+91 11 7179 1090',
    email: 'dr.rajesh@apollohospitals.com',
    specialties: [
      'Coronary Artery Bypass Surgery',
      'Heart Valve Replacement',
      'Aortic Aneurysm Surgery',
      'Minimally Invasive Heart Surgery',
      'Heart Transplant',
      'Congenital Heart Defects'
    ],
    achievements: [
      'Performed over 10,000 successful heart surgeries',
      'Pioneer in robotic heart surgery in India',
      'International patient satisfaction rate: 98%',
      'Published 50+ research papers in international journals'
    ],
    experience_details: [
      'Senior Consultant at Apollo Hospitals Delhi (2010-Present)',
      'Consultant at Fortis Hospital Mumbai (2005-2010)',
      'Fellowship in Cardiothoracic Surgery, Cleveland Clinic, USA (2003-2005)',
      'Residency at AIIMS Delhi (1998-2003)'
    ]
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialization: 'Oncologist',
    experience: 20,
    hospital: 'Fortis Healthcare Mumbai',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1594824475548-9e500c0c8b8c?w=400&h=400&fit=crop',
    description: 'Dr. Priya Sharma is a leading oncologist specializing in breast cancer and gynecological cancers. With 20 years of experience, she has treated over 5,000 cancer patients and is known for her compassionate care and innovative treatment approaches.',
    education: 'MBBS, MD (Internal Medicine), DM (Medical Oncology)',
    awards: [
      'Best Oncologist Award 2023',
      'Excellence in Cancer Care 2022',
      'Patient Choice Award 2021'
    ],
    languages: ['English', 'Hindi', 'Marathi', 'French'],
    consultation_fee: '₹4,500',
    phone: '+91 22 6767 6767',
    email: 'dr.priya@fortishealthcare.com',
    specialties: [
      'Breast Cancer Treatment',
      'Gynecological Cancers',
      'Lung Cancer',
      'Colorectal Cancer',
      'Lymphoma',
      'Targeted Therapy'
    ],
    achievements: [
      'Successfully treated over 5,000 cancer patients',
      'International patient satisfaction rate: 97%',
      'Leading researcher in breast cancer treatment',
      'Member of International Oncology Society'
    ],
    experience_details: [
      'Senior Oncologist at Fortis Healthcare Mumbai (2012-Present)',
      'Consultant Oncologist at Tata Memorial Hospital (2008-2012)',
      'Fellowship in Medical Oncology, MD Anderson Cancer Center, USA (2006-2008)',
      'Residency at AIIMS Delhi (2003-2006)'
    ]
  },
  {
    id: '3',
    name: 'Dr. Amit Patel',
    specialization: 'Orthopedic Surgeon',
    experience: 18,
    hospital: 'Max Super Specialty Hospital',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1612349317153-e10096315064?w=400&h=400&fit=crop',
    description: 'Dr. Amit Patel is a skilled orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 3,000 successful joint replacement surgeries and is known for his expertise in minimally invasive techniques.',
    education: 'MBBS, MS (Orthopedics), Fellowship in Joint Replacement',
    awards: [
      'Best Orthopedic Surgeon 2023',
      'Excellence in Joint Replacement 2022',
      'Innovation in Sports Medicine 2021'
    ],
    languages: ['English', 'Hindi', 'Gujarati'],
    consultation_fee: '₹4,000',
    phone: '+91 11 4055 4055',
    email: 'dr.amit@maxhealthcare.com',
    specialties: [
      'Total Knee Replacement',
      'Total Hip Replacement',
      'Shoulder Surgery',
      'Sports Medicine',
      'Arthroscopic Surgery',
      'Spine Surgery'
    ],
    achievements: [
      'Performed over 3,000 joint replacement surgeries',
      'International patient satisfaction rate: 96%',
      'Pioneer in robotic joint replacement in India',
      'Sports medicine consultant for national teams'
    ],
    experience_details: [
      'Senior Orthopedic Surgeon at Max Super Specialty Hospital (2010-Present)',
      'Consultant at Safdarjung Hospital (2008-2010)',
      'Fellowship in Joint Replacement, Hospital for Special Surgery, USA (2006-2008)',
      'Residency at AIIMS Delhi (2003-2006)'
    ]
  },
  {
    id: '4',
    name: 'Dr. Meera Reddy',
    specialization: 'Neurologist',
    experience: 22,
    hospital: 'Manipal Hospitals Bangalore',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    description: 'Dr. Meera Reddy is a distinguished neurologist with over 22 years of experience in treating complex neurological disorders. She specializes in stroke management, epilepsy, and movement disorders, known for her innovative treatment approaches.',
    education: 'MBBS, MD (Internal Medicine), DM (Neurology)',
    awards: [
      'Best Neurologist Award 2023',
      'Excellence in Stroke Care 2022',
      'Innovation in Neurology Award 2021'
    ],
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
    consultation_fee: '₹4,800',
    phone: '+91 80 2222 0000',
    email: 'dr.meera@manipalhospitals.com',
    specialties: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Movement Disorders',
      'Multiple Sclerosis',
      'Neuromuscular Disorders',
      'Headache Management'
    ],
    achievements: [
      'Successfully treated over 8,000 neurological patients',
      'International patient satisfaction rate: 98%',
      'Pioneer in advanced stroke treatment in South India',
      'Published 40+ research papers in international journals'
    ],
    experience_details: [
      'Senior Neurologist at Manipal Hospitals Bangalore (2015-Present)',
      'Consultant Neurologist at NIMHANS Bangalore (2010-2015)',
      'Fellowship in Neurology, Mayo Clinic, USA (2008-2010)',
      'Residency at AIIMS Delhi (2005-2008)'
    ]
  }
]

interface DoctorDetailPageProps {
  params: {
    id: string
  }
}

export default function DoctorDetailPage({ params }: DoctorDetailPageProps) {
  const doctor = doctors.find(d => d.id === params.id)

  if (!doctor) {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {doctor.name}
              </h1>
              <p className="text-2xl text-primary-100 mb-6">{doctor.specialization}</p>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">{doctor.hospital}, {doctor.location}</span>
              </div>
              <div className="flex items-center mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-xl">{doctor.experience} years of experience</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-yellow-300 fill-current mr-2" />
                <span className="text-2xl font-semibold">4.8</span>
                <span className="ml-2 text-primary-100">/ 5.0</span>
              </div>
              <p className="text-xl text-primary-100 leading-relaxed">
                {doctor.description}
              </p>
            </div>
            <div className="relative">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Education & Experience */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Experience</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-2">Education</p>
                      <p className="text-gray-700">{doctor.education}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-4">Professional Experience</p>
                    <div className="space-y-3">
                      {doctor.experience_details.map((exp, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Specialties */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-lg text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements & Awards</h2>
                <div className="space-y-4">
                  {doctor.achievements.map((achievement, idx) => (
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
                    <span className="text-gray-700">{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{doctor.hospital}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, idx) => (
                    <span key={idx} className="px-3 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                <div className="space-y-3">
                  {doctor.awards.map((award, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started</h3>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Book Consultation
                  </Link>
                  <Link href="/hospitals" className="btn-secondary w-full text-center block">
                    View Hospitals
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
            Ready to Consult with Dr. {doctor.name.split(' ')[1]}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with us for a free consultation and personalized treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary-lg">
              Book Free Consultation
            </Link>
            <Link href="/doctors" className="btn-secondary">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
