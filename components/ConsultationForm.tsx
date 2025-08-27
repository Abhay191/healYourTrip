'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase, isSupabaseAvailable } from '@/lib/supabase'
import toast from 'react-hot-toast'
import { Loader2, CheckCircle } from 'lucide-react'

interface ConsultationFormData {
  name: string
  email: string
  phone: string
  country_code: string
  treatment: string
  contact_type: 'patient' | 'partner'
}

const ConsultationForm = ({ isFullWidth = false }: { isFullWidth?: boolean }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationFormData>()

  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+61', country: 'Australia' },
    { code: '+27', country: 'South Africa' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+91', country: 'India' },
    { code: '+971', country: 'UAE' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+66', country: 'Thailand' },
    { code: '+84', country: 'Vietnam' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
  ]

  const treatments = [
    'Cardiac Surgery',
    'Orthopedic Surgery',
    'Cancer Treatment',
    'Fertility Treatment',
    'Cosmetic Surgery',
    'Eye Surgery',
    'Dental Treatment',
    'Neurosurgery',
    'Other'
  ]

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true)
    
    try {
      // Check if Supabase is available
      if (!isSupabaseAvailable()) {
        // Simulate successful submission for development
        toast.success('Consultation request submitted successfully! (Demo Mode)')
        setIsSubmitted(true)
        reset()
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
        return
      }

      const { error } = await supabase
        .from('consultations')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          country_code: data.country_code,
          treatment: data.treatment,
          contact_type: data.contact_type,
        }])

      if (error) {
        throw error
      }

      toast.success('Consultation request submitted successfully!')
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
      
    } catch (error) {
      console.error('Error submitting consultation:', error)
      toast.error('Failed to submit consultation. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your consultation request has been submitted successfully. Our team will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${isFullWidth ? 'w-full' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="input-field"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="input-field"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country_code" className="block text-sm font-medium text-gray-700 mb-1">
            Country Code *
          </label>
          <select
            id="country_code"
            {...register('country_code', { required: 'Country code is required' })}
            className="input-field"
          >
            <option value="">Select country code</option>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} {country.country}
              </option>
            ))}
          </select>
          {errors.country_code && (
            <p className="text-red-600 text-sm mt-1">{errors.country_code.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
            className="input-field"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-1">
          Treatment Required *
        </label>
        <select
          id="treatment"
          {...register('treatment', { required: 'Treatment selection is required' })}
          className="input-field"
        >
          <option value="">Select treatment</option>
          {treatments.map((treatment) => (
            <option key={treatment} value={treatment}>
              {treatment}
            </option>
          ))}
        </select>
        {errors.treatment && (
          <p className="text-red-600 text-sm mt-1">{errors.treatment.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          I am contacting as: *
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="patient"
              {...register('contact_type', { required: 'Please select contact type' })}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">As a Patient</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="partner"
              {...register('contact_type', { required: 'Please select contact type' })}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">As Healthcare Partner/Organization</span>
          </label>
        </div>
        {errors.contact_type && (
          <p className="text-red-600 text-sm mt-1">{errors.contact_type.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          'Book Free Consultation'
        )}
      </button>
    </form>
  )
}

export default ConsultationForm
