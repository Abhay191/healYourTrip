import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Tag,
  Search,
  Filter
} from 'lucide-react'

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: 'Why India is the Top Destination for Medical Tourism',
      excerpt: 'Discover the compelling reasons why India has become the preferred choice for international patients seeking quality healthcare at affordable prices.',
      content: 'India has emerged as a global leader in medical tourism, attracting patients from around the world with its combination of world-class healthcare facilities, highly skilled medical professionals, and significantly lower costs compared to Western countries. The country\'s healthcare sector has seen remarkable growth, with hospitals achieving international accreditations and doctors receiving training from prestigious institutions worldwide. This article explores the key factors that make India the top destination for medical tourism, including cost savings of 60-80%, no waiting lists, and personalized care.',
      author: 'Dr. Anjali Desai',
      author_title: 'Medical Director, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=100&h=100&fit=crop',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
      category: 'Medical Tourism',
      tags: ['India', 'Healthcare', 'Cost Savings', 'Quality Care']
    },
    {
      id: 2,
      title: 'Safety Standards in Indian Hospitals: What You Need to Know',
      excerpt: 'Learn about the rigorous safety protocols, international accreditations, and quality standards maintained by Indian hospitals.',
      content: 'Patient safety is the cornerstone of healthcare delivery in India. Our partner hospitals maintain the highest international standards, holding accreditations from prestigious organizations such as the Joint Commission International (JCI) and the National Accreditation Board for Hospitals & Healthcare Providers (NABH). These accreditations ensure that hospitals follow strict protocols for infection control, medication safety, surgical procedures, and emergency care. Indian hospitals invest heavily in state-of-the-art medical equipment and technology, while doctors undergo continuous training to stay updated with the latest medical advancements.',
      author: 'Dr. Rajesh Verma',
      author_title: 'Chief Medical Officer, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      category: 'Hospital Safety',
      tags: ['Safety', 'Accreditation', 'Quality', 'Standards']
    },
    {
      id: 3,
      title: 'Cost Comparison: Medical Treatment Abroad vs. Your Home Country',
      excerpt: 'Understanding the significant cost benefits of medical tourism in India and how much you can save on various procedures.',
      content: 'One of the most compelling reasons to choose medical tourism in India is the substantial cost savings. Patients can save 60-80% on medical treatments compared to Western countries. For example, cardiac bypass surgery costs $8,000-15,000 in India versus $70,000-200,000 in the United States. Similarly, hip replacement surgery costs $7,000-12,000 in India compared to $40,000-80,000 in the US. These savings include not just the medical procedure but also accommodation, food, and local transportation. We provide transparent pricing with no hidden costs, ensuring you know exactly what you\'re paying for.',
      author: 'Dr. Priya Singh',
      author_title: 'Healthcare Economist, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=100&h=100&fit=crop',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      category: 'Cost Analysis',
      tags: ['Cost Savings', 'Pricing', 'Comparison', 'Affordability']
    },
    {
      id: 4,
      title: 'Preparing for Your Medical Journey to India: A Complete Guide',
      excerpt: 'Essential information and tips to help you prepare for your medical tourism experience in India.',
      content: 'Proper preparation is key to a successful medical tourism experience. This comprehensive guide covers everything you need to know before traveling to India for medical treatment. We\'ll discuss visa requirements, necessary documentation, travel arrangements, accommodation options, and what to pack. We also provide guidance on pre-treatment consultations, medical tests, and how to communicate effectively with your healthcare team. Our team ensures that all your questions are answered and that you feel confident and prepared for your medical journey.',
      author: 'Priya Sharma',
      author_title: 'Patient Care Coordinator, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1594824475544-9b5c4d0c8b5c?w=100&h=100&fit=crop',
      date: '2023-12-28',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
      category: 'Travel Guide',
      tags: ['Preparation', 'Travel', 'Visa', 'Documentation']
    },
    {
      id: 5,
      title: 'Top Medical Specialties in India: Where Excellence Meets Affordability',
      excerpt: 'Explore the leading medical specialties in India and discover why patients choose specific treatments in this country.',
      content: 'India has established itself as a global leader in several medical specialties, offering world-class treatment at a fraction of the cost. Cardiac surgery, with success rates exceeding 95%, is one of the most sought-after specialties. Orthopedic procedures, including joint replacements and spine surgery, are performed using the latest robotic and minimally invasive techniques. Cancer treatment centers in India provide comprehensive care with advanced radiation therapy and targeted treatments. Fertility treatments, particularly IVF, have high success rates due to experienced specialists and modern facilities. This article explores each specialty in detail.',
      author: 'Dr. Amit Patel',
      author_title: 'Specialist Coordinator, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
      date: '2023-12-20',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      category: 'Medical Specialties',
      tags: ['Cardiology', 'Orthopedics', 'Oncology', 'Fertility']
    },
    {
      id: 6,
      title: 'Patient Success Stories: Real Experiences from Medical Tourism',
      excerpt: 'Read inspiring stories from patients who have successfully undergone medical treatment in India.',
      content: 'Nothing speaks louder than real patient experiences. In this article, we share inspiring stories from patients who have traveled to India for medical treatment. From Sarah from South Africa who underwent successful cardiac surgery to Ahmed from Bangladesh who received a new lease on life through joint replacement, these stories highlight the transformative impact of medical tourism. Each story includes details about the patient\'s condition, the treatment received, their experience in India, and their recovery journey. These testimonials demonstrate the quality of care, professionalism of medical staff, and the life-changing results achieved.',
      author: 'Meera Reddy',
      author_title: 'Patient Relations Manager, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      date: '2023-12-15',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      category: 'Patient Stories',
      tags: ['Testimonials', 'Success Stories', 'Patient Experience', 'Recovery']
    },
    {
      id: 7,
      title: 'Understanding Medical Visas: Your Complete Guide to India',
      excerpt: 'Everything you need to know about obtaining a medical visa for treatment in India.',
      content: 'A medical visa is essential for international patients seeking treatment in India. This comprehensive guide covers all aspects of the medical visa application process, including eligibility criteria, required documents, application procedures, and processing times. We explain the difference between medical visas and tourist visas, the validity period, and extension procedures if needed. Our team provides complete assistance with visa applications, ensuring all documentation is properly prepared and submitted. We also cover travel insurance requirements and other important considerations for medical travelers.',
      author: 'Rajesh Kumar',
      author_title: 'Visa Coordinator, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      date: '2023-12-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
      category: 'Visa Guide',
      tags: ['Medical Visa', 'Documentation', 'Application', 'Requirements']
    },
    {
      id: 8,
      title: 'Post-Treatment Care: Ensuring Your Complete Recovery',
      excerpt: 'Learn about the comprehensive post-treatment care and follow-up services available to medical tourism patients.',
      content: 'Recovery doesn\'t end when you leave the hospital. Our comprehensive post-treatment care ensures your complete recovery and long-term health. This includes regular follow-up consultations, monitoring of your recovery progress, guidance on diet and exercise, and coordination with your local healthcare providers. We provide 24/7 support during your recovery period and assist with any complications or concerns that may arise. Our team also helps coordinate follow-up visits and ensures continuity of care when you return to your home country.',
      author: 'Dr. Sanjay Verma',
      author_title: 'Post-Treatment Care Specialist, HealYourTrip',
      author_image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
      date: '2023-12-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      category: 'Post-Treatment Care',
      tags: ['Recovery', 'Follow-up', 'Care', 'Support']
    }
  ]

  const categories = ['All', 'Medical Tourism', 'Hospital Safety', 'Cost Analysis', 'Travel Guide', 'Medical Specialties', 'Patient Stories', 'Visa Guide', 'Post-Treatment Care']

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Medical Tourism Insights
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Stay informed about medical tourism trends, healthcare in India, and patient experiences
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={blog.author_image} 
                      alt={blog.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{blog.author}</p>
                      <p className="text-sm text-gray-600">{blog.author_title}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blogs/${blog.id}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Medical Tourism Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest updates on medical tourism, healthcare trends, and patient success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
