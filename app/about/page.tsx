import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Globe, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Care',
      description: 'Every decision we make is centered around providing the best possible care and experience for our patients.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings, building lasting trust with our patients and partners.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of experienced medical professionals and travel coordinators dedicated to your well-being.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We partner only with internationally accredited hospitals and top-tier medical professionals.'
    }
  ]

  const team = [
    {
      name: 'Dr. Anjali Desai',
      position: 'Medical Director',
      experience: '15+ years in medical tourism',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=300&h=300&fit=crop',
      description: 'Leading our medical team with expertise in international healthcare coordination.'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Operations Director',
      experience: '12+ years in healthcare management',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      description: 'Ensuring smooth operations and exceptional patient experiences.'
    },
    {
      name: 'Priya Sharma',
      position: 'Patient Care Coordinator',
      experience: '10+ years in patient support',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=300&h=300&fit=crop',
      description: 'Dedicated to providing personalized care and support throughout your journey.'
    }
  ]

  const achievements = [
    { number: '5000+', label: 'Patients Successfully Treated' },
    { number: '50+', label: 'Partner Hospitals' },
    { number: '25+', label: 'Countries Served' },
    { number: '98%', label: 'Patient Satisfaction Rate' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-medical-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">HealYourTrip</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Your trusted partner in medical tourism, connecting international patients with world-class healthcare in India
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To make world-class healthcare accessible and affordable for international patients by providing transparent, 
                reliable, and comprehensive medical tourism services that prioritize patient safety, comfort, and successful outcomes.
              </p>
              <p className="text-lg text-gray-600">
                We believe that quality healthcare should be accessible to everyone, regardless of geographical boundaries. 
                Our mission is to bridge the gap between patients and world-class medical facilities in India.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the most trusted and preferred medical tourism facilitator globally, known for our commitment to 
                excellence, patient satisfaction, and innovative healthcare solutions.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where patients can access the best medical care anywhere in the world with confidence, 
                knowing they have a reliable partner guiding them through every step of their healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealYourTrip?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional medical tourism experiences with unmatched support and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Founded with a vision to make quality healthcare accessible globally
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              HealYourTrip was established in 2020 by a team of healthcare professionals and travel experts who recognized 
              the growing need for reliable medical tourism services. We saw that many international patients were seeking 
              affordable, high-quality healthcare in India but lacked proper guidance and support.
            </p>
            <p>
              What started as a small initiative has grown into a comprehensive medical tourism platform that has helped 
              thousands of patients from over 25 countries access world-class healthcare in India. Our success is built on 
              the trust of our patients and the quality of our partner hospitals.
            </p>
            <p>
              Today, we continue to expand our network of partner hospitals and doctors while maintaining our commitment 
              to transparency, patient safety, and exceptional service. We believe that every patient deserves the best 
              possible care, and we work tirelessly to make that a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your healthcare journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional service and care throughout your medical journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We partner only with internationally accredited hospitals and top-tier medical professionals to ensure the highest standards of care.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Standards</h3>
              <p className="text-gray-600">
                Our partner hospitals maintain international standards and are equipped with the latest medical technology and facilities.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Satisfaction</h3>
              <p className="text-gray-600">
                We prioritize patient satisfaction and work tirelessly to ensure every patient has a positive and successful medical experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you connect with world-class healthcare in India. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/hospitals" className="btn-secondary">
              View Our Hospitals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
