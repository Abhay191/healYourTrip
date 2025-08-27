# HealYourTrip - Medical Tourism Website

A professional medical tourism website that connects international patients to world-class hospitals and doctors in India for affordable and transparent healthcare journeys.

## 🌟 Features

### Homepage
- **Hero Section**: Consultation form with all required fields
- **Services Section**: Visa support, specialist consultation, 24/7 care, transparent pricing
- **Top Hospitals**: Horizontal scrollable hospital cards
- **Featured Treatments**: Popular medical procedures in India
- **Top Doctors**: Experienced medical specialists
- **Patient Testimonials**: Real experiences from international patients
- **Step-by-Step Process**: Visual guide for medical tourism journey
- **Success Statistics**: Impressive numbers and achievements
- **Blog Preview**: Latest medical tourism insights

### Additional Pages
- **Top Hospitals**: Grid layout of partner hospitals
- **Top Doctors**: Medical specialists with detailed profiles
- **About Us**: Company mission, vision, and team
- **Treatment Guide**: Comprehensive medical tourism guide
- **Blogs**: Medical tourism insights and articles
- **Contact Us**: Full consultation form and contact information

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database & Authentication)
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HealYourTrip
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   
   Create the following tables in your Supabase project:

   **consultations table:**
   ```sql
   CREATE TABLE consultations (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     country_code TEXT NOT NULL,
     treatment TEXT NOT NULL,
     contact_type TEXT NOT NULL CHECK (contact_type IN ('patient', 'partner')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **hospitals table:**
   ```sql
   CREATE TABLE hospitals (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     location TEXT NOT NULL,
     specialties TEXT[] NOT NULL,
     image_url TEXT NOT NULL,
     description TEXT NOT NULL,
     rating DECIMAL(3,2) NOT NULL,
     phone TEXT,
     email TEXT,
     accreditations TEXT[],
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **doctors table:**
   ```sql
   CREATE TABLE doctors (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     specialization TEXT NOT NULL,
     experience_years INTEGER NOT NULL,
     hospital_affiliation TEXT NOT NULL,
     image_url TEXT NOT NULL,
     description TEXT NOT NULL,
     education TEXT,
     awards TEXT[],
     languages TEXT[],
     consultation_fee TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **blogs table:**
   ```sql
   CREATE TABLE blogs (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     content TEXT NOT NULL,
     excerpt TEXT NOT NULL,
     author TEXT NOT NULL,
     author_title TEXT,
     author_image TEXT,
     image_url TEXT NOT NULL,
     date DATE NOT NULL,
     read_time TEXT,
     category TEXT NOT NULL,
     tags TEXT[],
     published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **testimonials table:**
   ```sql
   CREATE TABLE testimonials (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     patient_name TEXT NOT NULL,
     country TEXT NOT NULL,
     treatment TEXT NOT NULL,
     feedback TEXT NOT NULL,
     rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully mobile-responsive and optimized for all device sizes:
- Mobile phones
- Tablets
- Desktop computers
- Large screens

## 🎨 Design Features

- **Professional Medical Color Scheme**: Blues, whites, and greens
- **Modern UI/UX**: Clean, trustworthy design
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: Proper contrast ratios and semantic HTML
- **SEO Optimized**: Meta tags and structured content

## 🔒 Security Features

- **Form Validation**: Client and server-side validation
- **Secure Data Handling**: Protected patient information
- **HTTPS Ready**: Secure communication protocols
- **Input Sanitization**: Protection against malicious input

## 📊 Database Integration

The website integrates with Supabase for:
- **Consultation Forms**: Store patient inquiries
- **Hospital Data**: Manage partner hospital information
- **Doctor Profiles**: Maintain specialist information
- **Blog Content**: Store and manage articles
- **Patient Testimonials**: Collect and display feedback

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 📝 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  medical: { /* Your medical theme colors */ },
  accent: { /* Your accent colors */ }
}
```

### Content
- Update hospital and doctor information in the respective page files
- Modify testimonials and statistics
- Customize blog content and categories
- Update contact information and office details

### Styling
- Modify component styles in `app/globals.css`
- Update Tailwind classes throughout components
- Customize animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@healyourtrip.com
- Phone: +91 98765 43210
- Office: Mumbai, Maharashtra, India

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Supabase**: For the backend-as-a-service platform
- **Lucide**: For the beautiful icons
- **Medical Tourism Community**: For inspiration and insights

---

**HealYourTrip** - Your Gateway to World-Class Healthcare in India
