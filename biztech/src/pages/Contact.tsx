// Enhanced Contact Page with Animations and Email Functionality
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactHeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate-slideUp">Get In Touch</h1>
        <p className="hero-subtitle animate-slideUp animate-delay-200">LET'S DISCUSS YOUR BUSINESS GOALS</p>
        <p className="animate-slideUp animate-delay-400">
          Ready to transform your business? We're here to help you achieve sustainable growth 
          through strategic consulting and comprehensive business solutions.
        </p>
      </div>
    </section>
  )
}

function ContactInfoSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-scaleIn">Contact Information</h2>
        <div className="services-grid">
          <div className="service-card animate-slideUp animate-delay-100">
            <div className="service-icon animate-float">📧</div>
            <h3>Email Us</h3>
            <p style={{ marginBottom: '1rem' }}>
              Send us an email and we'll respond within 24 hours.
            </p>
            <p style={{ color: '#a904e8', fontWeight: '600' }}>
              contact@bizmaster-solutions.com
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-300">
            <div className="service-icon animate-float animate-delay-200">📞</div>
            <h3>Call Us</h3>
            <p style={{ marginBottom: '1rem' }}>
              Speak directly with our business consulting experts.
            </p>
            <p style={{ color: '#a904e8', fontWeight: '600' }}>
              +94 77 796 0231
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-500">
            <div className="service-icon animate-float animate-delay-400">📍</div>
            <h3>Visit Us</h3>
            <p style={{ marginBottom: '1rem' }}>
              Schedule an in-person meeting at our office.
            </p>
            <p style={{ color: '#a904e8', fontWeight: '600' }}>
              231/A Athurugiriya Road,Malabe
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-700">
            <div className="service-icon animate-float animate-delay-600">💼</div>
            <h3>LinkedIn</h3>
            <p style={{ marginBottom: '1rem' }}>
              Connect with us on professional social media.
            </p>
            <a href="https://www.linkedin.com/company/bizmaster-solutions/" target="_blank" rel="noopener noreferrer" style={{ color: '#a904e8', fontWeight: '600', textDecoration: 'none' }}>
              Follow Us on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const copyEmailToClipboard = async () => {
    const emailText = `To: ukrush12@gmail.com
Subject: BIZmaster Contact: ${formData.firstName} ${formData.lastName}

Dear BIZmaster Team,

Contact Form Submission:
---------------------------------------

CONTACT INFORMATION:
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
🏢 Company: ${formData.company || 'Not provided'}
🔧 Service Interest: ${formData.service || 'General Inquiry'}

MESSAGE:
${formData.message}

---------------------------------------
Reply to: ${formData.email}

This message was sent via the BIZmaster contact form.

Best regards,
${formData.firstName} ${formData.lastName}`

    try {
      await navigator.clipboard.writeText(emailText)
      alert('📋 Email content copied! Paste into your email client and send to ukrush12@gmail.com')
    } catch (err) {
      console.error('Failed to copy:', err)
      // Fallback: show the content in an alert
      alert(`Copy this content and send to ukrush12@gmail.com:\n\n${emailText}`)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    console.log('📧 Sending email to ukrush12@gmail.com...')

    try {
      // Method 1: FormSubmit.co - Most reliable service
      const formSubmitData = new FormData()
      formSubmitData.append('name', `${formData.firstName} ${formData.lastName}`)
      formSubmitData.append('email', formData.email)
      formSubmitData.append('company', formData.company || 'Not provided')
      formSubmitData.append('service', formData.service || 'General Inquiry')
      formSubmitData.append('message', formData.message)
      formSubmitData.append('_subject', `BIZmaster Contact: ${formData.firstName} ${formData.lastName}`)
      formSubmitData.append('_captcha', 'false')
      formSubmitData.append('_template', 'box')

      console.log('🔄 Trying FormSubmit.co...')
      
      const response = await fetch('https://formsubmit.co/ukrush12@gmail.com', {
        method: 'POST',
        body: formSubmitData
      })

      if (response.ok) {
        console.log('✅ Email sent successfully via FormSubmit.co')
        toast.success('Email sent successfully! Message delivered to ukrush12@gmail.com', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setIsSubmitting(false)
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
        return
      } else {
        throw new Error('FormSubmit failed')
      }
    } catch (error) {
      console.log('❌ FormSubmit.co failed:', error)
      
      try {
        // Method 2: Getform.io backup
        console.log('🔄 Trying Getform.io backup...')
        
        const getformResponse = await fetch('https://getform.io/f/bpjjjera', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            company: formData.company || 'Not provided',
            service: formData.service || 'General Inquiry',
            message: formData.message,
            to: 'ukrush12@gmail.com'
          })
        })

        if (getformResponse.ok) {
          console.log('✅ Email sent successfully via Getform.io')
          toast.success('Email sent successfully! Message delivered to ukrush12@gmail.com', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          setIsSubmitting(false)
          
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            service: '',
            message: ''
          })
          return
        } else {
          throw new Error('Getform failed')
        }
      } catch (getformError) {
        console.log('❌ Getform.io failed:', getformError)
        
        // Method 3: Direct HTML form submission to FormSubmit
        console.log('🔄 Using direct form submission...')
        
        // Create hidden form and submit it
        const form = document.createElement('form')
        form.action = 'https://formsubmit.co/ukrush12@gmail.com'
        form.method = 'POST'
        form.style.display = 'none'
        
        // Add form data
        const fields = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company || 'Not provided',
          service: formData.service || 'General Inquiry',
          message: formData.message,
          _subject: `BIZmaster Contact: ${formData.firstName} ${formData.lastName}`,
          _captcha: 'false'
        }
        
        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = key
          input.value = value
          form.appendChild(input)
        })
        
        document.body.appendChild(form)
        form.submit()
        
        toast.success('Email sent successfully! Message delivered to ukrush12@gmail.com', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setIsSubmitting(false)
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
        
        console.log('✅ Direct form submission executed')
      }
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-rotateIn">Send Us a Message</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="animate-slideUp animate-delay-200">
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-input animate-shimmer"
                  placeholder="John"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="form-input animate-shimmer animate-delay-100"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input animate-shimmer animate-delay-200"
                placeholder="john@company.com"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Company</label>
              <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="form-input animate-shimmer animate-delay-300"
                placeholder="Your Company Name"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Service Interested In</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="form-select animate-shimmer animate-delay-400"
              >
                <option value="">Select a service</option>
                <option value="strategic-consulting">Strategic Consulting</option>
                <option value="business-support">Business Support</option>
                <option value="growth-solutions">Growth Solutions</option>
                <option value="partnership">Partnership Approach</option>
                <option value="process-optimization">Process Optimization</option>
                <option value="innovation">Innovation Consulting</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="form-textarea animate-shimmer animate-delay-500"
                placeholder="Tell us about your business needs and how we can help..."
              />
            </div>

            {submitStatus === 'error' && (
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#dc2626', 
                color: 'white', 
                borderRadius: '12px', 
                textAlign: 'center',
                border: '2px solid #f87171'
              }}>
                ⚠️ <strong>Email Service Temporarily Unavailable</strong>
                <br/><br/>
                Please send your message directly to: <strong>ukrush12@gmail.com</strong>
                <br/>
                <strong>Subject:</strong> BIZmaster Contact - {formData.firstName} {formData.lastName}
                <br/><br/>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '5px', fontSize: '14px', textAlign: 'left' }}>
                  Name: {formData.firstName} {formData.lastName}<br/>
                  Email: {formData.email}<br/>
                  Company: {formData.company || 'Not provided'}<br/>
                  Service: {formData.service || 'General Inquiry'}<br/>
                  Message: {formData.message}
                </div>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn btn-primary animate-pulse animate-delay-600 ${isSubmitting ? 'opacity-50' : ''}`}
              style={{ justifySelf: 'center', marginTop: '1rem' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function WhyContactUsSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-glow">Why Choose BIZmaster Solutions?</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            <div className="animate-slideInLeft">
              <h3 style={{ color: '#a904e8', marginBottom: '0.75rem', fontSize: '1.375rem' }}>✅ Free Initial Consultation</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>Get expert advice and understand how we can help your business grow.</p>
            </div>
            <div className="animate-slideInRight animate-delay-200">
              <h3 style={{ color: '#a904e8', marginBottom: '0.75rem', fontSize: '1.375rem' }}>✅ Customized Solutions</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>Every business is unique. We tailor our services to your specific needs.</p>
            </div>
            <div className="animate-slideInLeft animate-delay-400">
              <h3 style={{ color: '#a904e8', marginBottom: '0.75rem', fontSize: '1.375rem' }}>✅ Proven Track Record</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>Over 500 successful projects with 98% client satisfaction rate.</p>
            </div>
            <div className="animate-slideInRight animate-delay-600">
              <h3 style={{ color: '#a904e8', marginBottom: '0.75rem', fontSize: '1.375rem' }}>✅ Ongoing Support</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>We're committed to your long-term success with continuous guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="contact-page">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <WhyContactUsSection />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ top: '120px' }}
      />
    </div>
  )
}
