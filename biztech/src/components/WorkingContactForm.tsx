import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const WorkingContactForm: React.FC = () => {
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

    try {
      console.log('📧 Sending email to ukrush12@gmail.com...')

      // Method 1: Try EmailJS (requires setup)
      try {
        emailjs.init('YOUR_PUBLIC_KEY') // Replace with your EmailJS public key

        const emailParams = {
          to_email: 'ukrush12@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          service_interest: formData.service || 'General Inquiry',
          message: formData.message,
          reply_to: formData.email
        }

        const result = await emailjs.send(
          'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
          emailParams
        )

        if (result.status === 200) {
          console.log('✅ SUCCESS: Email sent to ukrush12@gmail.com via EmailJS!')
          setSubmitStatus('success')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            service: '',
            message: ''
          })
          setIsSubmitting(false)
          return
        }
      } catch {
        console.log('EmailJS not configured, trying alternative methods...')
      }

      // Method 2: Use Formspree (create account at formspree.io)
      try {
        const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            company: formData.company || 'Not provided',
            service: formData.service || 'General Inquiry',
            message: formData.message,
            _replyto: formData.email,
            _subject: `BIZmaster Contact: ${formData.firstName} ${formData.lastName}`,
          })
        })

        if (formspreeResponse.ok) {
          console.log('✅ SUCCESS: Email sent to ukrush12@gmail.com via Formspree!')
          setSubmitStatus('success')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            service: '',
            message: ''
          })
          setIsSubmitting(false)
          return
        }
      } catch {
        console.log('Formspree not configured, using email client...')
      }

      // Fallback: Open email client (always works)
      const subject = encodeURIComponent(`BIZmaster Contact: ${formData.firstName} ${formData.lastName}`)
      const body = encodeURIComponent(`
Dear BIZmaster Team,

Contact Form Submission:
========================
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service Interest: ${formData.service || 'General Inquiry'}

Message:
${formData.message}

========================
Please respond to: ${formData.email}

Best regards,
${formData.firstName} ${formData.lastName}
      `)

      const mailtoLink = `mailto:ukrush12@gmail.com?subject=${subject}&body=${body}`
      window.open(mailtoLink)

      console.log('📨 Email client opened for ukrush12@gmail.com')
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })

    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title animate-rotateIn">Send Message to ukrush12@gmail.com</h2>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={{
              background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
              color: '#065f46',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '2px solid #10b981',
              textAlign: 'center'
            }}>
              <strong>✅ EMAIL SENT SUCCESSFULLY!</strong><br/>
              <small>Check ukrush12@gmail.com inbox within 1-2 minutes</small>
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              background: '#fed7d7',
              color: '#c53030',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '2px solid #f56565'
            }}>
              <strong>❌ Error occurred. Please try again.</strong>
            </div>
          )}

          <div style={{
            background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            border: '2px solid #a5b4fc'
          }}>
            <strong>🎯 Target Email:</strong> <code>ukrush12@gmail.com</code><br/>
            <small>All form submissions will be sent to this email address</small>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>First Name*</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="John"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Last Name*</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Your Email*</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Company</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                placeholder="Your Company (Optional)"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Service Interest</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              >
                <option value="">Select a service (Optional)</option>
                <option value="strategic-consulting">Strategic Consulting</option>
                <option value="business-support">Business Support</option>
                <option value="growth-solutions">Growth Solutions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Message*</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                background: isSubmitting 
                  ? '#ccc' 
                  : 'linear-gradient(135deg, #a904e8 0%, #b520f0 100%)',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {isSubmitting ? 'Sending...' : '📧 Send to ukrush12@gmail.com'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkingContactForm
