import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  ClipboardList, 
  Calendar, 
  Plane, 
  Stethoscope, 
  Heart, 
  CheckCircle,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  Shield,
  DollarSign
} from 'lucide-react'

export default function TreatmentGuidePage() {
  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Schedule a free consultation with our medical team to discuss your health condition and treatment requirements.',
      details: [
        'Initial health assessment',
        'Treatment recommendations',
        'Cost estimates',
        'Hospital and doctor selection'
      ],
      icon: ClipboardList,
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Treatment Plan',
      description: 'Receive a personalized treatment plan with detailed medical procedures, timeline, and cost breakdown.',
      details: [
        'Comprehensive medical evaluation',
        'Treatment timeline',
        'Pre-operative requirements',
        'Post-operative care plan'
      ],
      icon: Calendar,
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Visa Support',
      description: 'Complete assistance with medical visa application, documentation, and travel arrangements.',
      details: [
        'Medical visa application',
        'Document preparation',
        'Travel insurance',
        'Flight bookings'
      ],
      icon: Plane,
      duration: '7-10 days'
    },
    {
      step: 4,
      title: 'Travel & Treatment',
      description: 'Smooth travel arrangements and medical procedures with 24/7 support throughout your stay.',
      details: [
        'Airport pickup and accommodation',
        'Hospital admission',
        'Medical procedures',
        'Recovery and rehabilitation'
      ],
      icon: Stethoscope,
      duration: 'Varies by treatment'
    },
    {
      step: 5,
      title: 'Follow-up Care',
      description: 'Ongoing support and post-treatment care to ensure your complete recovery and satisfaction.',
      details: [
        'Post-treatment monitoring',
        'Follow-up consultations',
        'Recovery guidance',
        'Return travel assistance'
      ],
      icon: Heart,
      duration: 'Ongoing'
    }
  ]

  const popularTreatments = [
    {
      name: 'Cardiac Surgery',
      description: 'Advanced heart surgeries including bypass, valve replacement, and minimally invasive procedures.',
      duration: '7-14 days',
      recovery: '4-8 weeks',
      success_rate: '95%+'
    },
    {
      name: 'Orthopedic Surgery',
      description: 'Joint replacement, spine surgery, and sports medicine procedures.',
      duration: '3-7 days',
      recovery: '6-12 weeks',
      success_rate: '90%+'
    },
    {
      name: 'Cancer Treatment',
      description: 'Comprehensive oncology care including chemotherapy, radiation, and surgical procedures.',
      duration: 'Varies',
      recovery: 'Varies',
      success_rate: '85%+'
    },
    {
      name: 'Fertility Treatment',
      description: 'IVF, IUI, and other reproductive medicine procedures.',
      duration: '2-3 weeks',
      recovery: '1-2 weeks',
      success_rate: '60-70%'
    },
    {
      name: 'Cosmetic Surgery',
      description: 'Plastic and reconstructive surgery procedures.',
      duration: '1-3 days',
      recovery: '2-8 weeks',
      success_rate: '90%+'
    },
    {
      name: 'Dental Treatment',
      description: 'Advanced dental procedures, implants, and cosmetic dentistry.',
      duration: '1-7 days',
      recovery: '1-4 weeks',
      success_rate: '95%+'
    }
  ]

  const faqs = [
    {
      question: 'Is medical tourism in India safe?',
      answer: 'Yes, medical tourism in India is very safe. Our partner hospitals are internationally accredited (JCI, NABH) and maintain the highest safety standards. Indian doctors are internationally trained and experienced.'
    },
    {
      question: 'How much can I save on medical treatment in India?',
      answer: 'Patients can save 60-80% on medical treatments in India compared to Western countries. For example, cardiac bypass surgery costs $8,000-15,000 in India vs $70,000-200,000 in the US.'
    },
    {
      question: 'What documents do I need for medical tourism?',
      answer: 'You\'ll need a valid passport, medical visa, medical reports, treatment plan, and travel insurance. We assist with all documentation requirements.'
    },
    {
      question: 'How long does the medical visa process take?',
      answer: 'Medical visa processing typically takes 7-10 working days. We provide complete assistance to ensure a smooth and quick process.'
    },
    {
      question: 'Do Indian hospitals accept international insurance?',
      answer: 'Many Indian hospitals accept international insurance. We can help verify your insurance coverage and coordinate with the hospital for direct billing where possible.'
    },
    {
      question: 'What languages do Indian doctors speak?',
      answer: 'Most Indian doctors are fluent in English. Many also speak other international languages. We can arrange interpreters if needed.'
    },
    {
      question: 'How do I choose the right hospital and doctor?',
      answer: 'We help you select the best hospital and doctor based on your medical condition, budget, and preferences. All our partners are internationally accredited and highly qualified.'
    },
    {
      question: 'What happens if there are complications?',
      answer: 'Our partner hospitals have comprehensive emergency protocols and intensive care units. We provide 24/7 support and coordinate with your home country\'s medical team if needed.'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Save 60-80% on medical treatments compared to Western countries'
    },
    {
      icon: Shield,
      title: 'Quality Care',
      description: 'World-class hospitals with international accreditations and standards'
    },
    {
      icon: Clock,
      title: 'No Waiting Lists',
      description: 'Quick access to treatments without long waiting periods'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Individual attention and customized treatment plans'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-medical-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Treatment Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Your complete guide to medical tourism in India - from initial consultation to recovery
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Medical Tourism in India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of seeking medical treatment in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Medical Journey in 5 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to recovery, we guide you through every step of your medical tourism experience
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <step.icon className="w-8 h-8 text-primary-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-primary-600 font-medium">Duration: {step.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Medical Treatments in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class medical procedures with excellent success rates and affordable costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTreatments.map((treatment, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{treatment.name}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hospital Stay:</span>
                    <span className="font-medium">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recovery Time:</span>
                    <span className="font-medium">{treatment.recovery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium text-green-600">{treatment.success_rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about medical tourism in India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
            Get in touch with us for a free consultation and personalized treatment plan
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
