import { createClient } from '@supabase/supabase-js'

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create Supabase client only if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to check if Supabase is available
export const isSupabaseAvailable = () => !!supabase

// Database types
export interface Consultation {
  id: string
  name: string
  email: string
  phone: string
  country_code: string
  treatment: string
  contact_type: 'patient' | 'partner'
  created_at: string
}

export interface Hospital {
  id: string
  name: string
  location: string
  specialties: string[]
  image_url: string
  description: string
  rating: number
  created_at: string
}

export interface Doctor {
  id: string
  name: string
  specialization: string
  experience_years: number
  hospital_affiliation: string
  image_url: string
  description: string
  created_at: string
}

export interface Blog {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  image_url: string
  published_at: string
  created_at: string
}

export interface Testimonial {
  id: string
  patient_name: string
  country: string
  treatment: string
  feedback: string
  rating: number
  created_at: string
}
