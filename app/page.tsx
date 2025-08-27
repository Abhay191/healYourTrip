import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ConsultationForm from '@/components/ConsultationForm'
import Link from 'next/link'
import { 
  Shield, 
  UserCheck, 
  Clock, 
  DollarSign, 
  Eye, 
  Heart, 
  Bone, 
  Baby, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Phone,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Visa Support',
      description: 'Complete assistance with medical visa applications and documentation'
    },
    {
      icon: UserCheck,
      title: 'Top Specialists Consultation',
      description: 'Direct access to renowned doctors and medical experts'
    },
    {
      icon: Clock,
      title: '24/7 Patient Care',
      description: 'Round-the-clock support throughout your medical journey'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront costs with no hidden fees or surprises'
    },
    {
      icon: Eye,
      title: 'No Hidden Fees',
      description: 'Complete transparency in all financial transactions'
    }
  ]

  const hospitals = [
    {
      name: 'Apollo Hospitals Delhi',
      location: 'New Delhi, India',
      specialties: ['Cardiology', 'Oncology', 'Orthopedics'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop'
    },
    {
      name: 'Fortis Healthcare Mumbai',
      location: 'Mumbai, India',
      specialties: ['Neurology', 'Transplant', 'Emergency Care'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop'
    },
    {
      name: 'Max Super Specialty Hospital',
      location: 'Delhi NCR, India',
      specialties: ['Cardiac Surgery', 'Cancer Care', 'Robotic Surgery'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    },
    {
      name: 'Manipal Hospitals Bangalore',
      location: 'Bangalore, India',
      specialties: ['Neurology', 'Cardiology', 'Orthopedics'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop'
    }
  ]

  const treatments = [
    {
      icon: Heart,
      title: 'Heart Surgery',
      description: 'Advanced cardiac procedures with world-class surgeons'
    },
    {
      icon: Bone,
      title: 'Joint Replacement',
      description: 'Modern orthopedic solutions for better mobility'
    },
    {
      icon: Shield,
      title: 'Cancer Care',
      description: 'Comprehensive oncology treatment and care'
    },
    {
      icon: Baby,
      title: 'Fertility Treatment',
      description: 'Specialized reproductive medicine solutions'
    }
  ]

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialization: 'Cardiothoracic Surgeon',
      experience: 15,
      hospital: 'Apollo Hospitals Delhi',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Priya Sharma',
      specialization: 'Oncologist',
      experience: 12,
      hospital: 'Fortis Healthcare Mumbai',
      image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Amit Patel',
      specialization: 'Orthopedic Surgeon',
      experience: 18,
      hospital: 'Max Super Specialty Hospital',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Meera Reddy',
      specialization: 'Neurologist',
      experience: 14,
      hospital: 'Manipal Hospitals Bangalore',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'South Africa',
      treatment: 'Cardiac Surgery',
      feedback: 'The care I received at Apollo Hospitals was exceptional. The doctors were highly skilled and the staff was incredibly supportive throughout my recovery.',
      rating: 5
    },
    {
      name: 'Ahmed Rahman',
      country: 'Bangladesh',
      treatment: 'Joint Replacement',
      feedback: 'HealYourTrip made my medical journey to India seamless. The quality of care exceeded my expectations and the cost was much more affordable.',
      rating: 5
    },
    {
      name: 'Hans Mueller',
      country: 'Germany',
      treatment: 'Cancer Treatment',
      feedback: 'Professional service from start to finish. The medical facilities were world-class and the treatment plan was clearly explained.',
      rating: 5
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Get expert medical advice and treatment recommendations'
    },
    {
      step: 2,
      title: 'Treatment Plan',
      description: 'Receive personalized treatment plan and cost estimate'
    },
    {
      step: 3,
      title: 'Visa Support',
      description: 'Complete assistance with medical visa application'
    },
    {
      step: 4,
      title: 'Travel & Treatment',
      description: 'Smooth travel arrangements and medical procedures'
    },
    {
      step: 5,
      title: 'Follow-up Care',
      description: 'Ongoing support and post-treatment care'
    }
  ]

  const statistics = [
    { number: '5000+', label: 'Patients Treated' },
    { number: '50+', label: 'Partner Hospitals' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Transparent Pricing' }
  ]

  const blogs = [
    {
      title: 'Why India is the Top Destination for Medical Tourism',
      excerpt: 'Discover the advantages of choosing India for your medical treatment journey.',
      author: 'Dr. Anjali Desai',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop'
    },
    {
      title: 'Safety Standards in Indian Hospitals',
      excerpt: 'Learn about the rigorous safety protocols and international accreditations.',
      author: 'Dr. Rajesh Verma',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop'
    },
    {
      title: 'Cost Comparison: Medical Treatment Abroad',
      excerpt: 'Understanding the cost benefits of medical tourism in India.',
      author: 'Dr. Priya Singh',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
             <section className="bg-gradient-to-br from-primary-50 to-medical-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to{' '}
                 <span className="text-gradient">World-Class Healthcare</span> in India
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Affordable, Transparent, Trusted - Connect with top hospitals and doctors for your medical journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                                 <Link href="/hospitals" className="btn-primary-lg">
                   Explore Hospitals
                 </Link>
                 <Link href="/about" className="btn-secondary">
                   Learn More
                 </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Book Free Consultation
              </h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealYourTrip?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive support throughout your medical tourism journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
          
          <div className="text-center">
                         <Link href="/contact" className="btn-primary-lg">
               Contact Us
             </Link>
          </div>
        </div>
      </section>

      {/* Top Hospitals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Partner Hospitals
            </h2>
            <p className="text-xl text-gray-600">
              World-class medical facilities with international accreditations
            </p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                         {hospitals.map((hospital, index) => (
               <div key={index} className="min-w-[300px] card-with-button hover:shadow-xl transition-shadow duration-200">
                 <img 
                   src={hospital.image} 
                   alt={hospital.name}
                   className="w-full h-48 object-cover"
                 />
                 <div className="card-content">
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                   <p className="text-gray-600 mb-3">{hospital.location}</p>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {hospital.specialties.map((specialty, idx) => (
                       <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                         {specialty}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div className="card-button">
                   <Link href={`/hospitals/${index + 1}`} className="btn-primary w-full text-center">
                     View Details
                   </Link>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-8">
                         <Link href="/hospitals" className="btn-secondary">
               Explore More Hospitals
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Treatments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Treatments in India
            </h2>
            <p className="text-xl text-gray-600">
              Advanced medical procedures with excellent success rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <treatment.icon className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Medical Specialists
            </h2>
            <p className="text-xl text-gray-600">
              Experienced doctors with international training and expertise
            </p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                         {doctors.map((doctor, index) => (
               <div key={index} className="min-w-[280px] card-with-button hover:shadow-xl transition-shadow duration-200">
                 <img 
                   src={doctor.image} 
                   alt={doctor.name}
                   className="w-full h-48 object-cover"
                 />
                 <div className="card-content">
                   <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                   <p className="text-primary-600 font-medium mb-2">{doctor.specialization}</p>
                   <p className="text-gray-600 mb-2">{doctor.experience} years experience</p>
                   <p className="text-gray-500 text-sm mb-4">{doctor.hospital}</p>
                 </div>
                 <div className="card-button">
                   <Link href={`/doctors/${index + 1}`} className="btn-primary w-full text-center">
                     Contact Doctor
                   </Link>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-8">
                         <Link href="/doctors" className="btn-secondary">
               View All Doctors
             </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from international patients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.country}</p>
                  <p className="text-primary-600 text-sm">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Medical Journey in 5 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to recovery, we guide you through every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success Numbers
            </h2>
            <p className="text-xl text-primary-100">
              Trusted by thousands of international patients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Medical Tourism Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about medical tourism trends and healthcare in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                         {blogs.map((blog, index) => (
               <div key={index} className="card-with-button hover:shadow-xl transition-shadow duration-200">
                 <img 
                   src={blog.image} 
                   alt={blog.title}
                   className="w-full h-48 object-cover"
                 />
                 <div className="card-content">
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                   <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                   <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                     <span>By {blog.author}</span>
                     <span>{new Date(blog.date).toLocaleDateString()}</span>
                   </div>
                 </div>
                 <div className="card-button">
                   <Link href={`/blogs/${index + 1}`} className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                     Read More <ArrowRight className="w-4 h-4 ml-1" />
                   </Link>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center">
                         <Link href="/blogs" className="btn-secondary">
               View All Blogs
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
