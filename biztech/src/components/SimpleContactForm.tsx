import React, { useState } from 'react'

const SimpleContactForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with all the data
    const subject = encodeURIComponent(`BIZmaster Contact: ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(`
Dear BIZmaster Team,

New Contact Form Submission:
============================

CONTACT DETAILS:
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Service Interest: ${formData.service || 'General Inquiry'}

MESSAGE:
${formData.message}

============================
Reply to: ${formData.email}

This email was generated from the BIZmaster contact form.

Best regards,
${formData.firstName} ${formData.lastName}
    `)

    const mailtoLink = `mailto:ukrush12@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(mailtoLink)
    
    // Show success message
    setSubmitStatus('success')
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
    
    console.log('✅ Email client opened with message for ukrush12@gmail.com')
  }

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title animate-rotateIn">Contact ukrush12@gmail.com</h2>
        
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
          padding: '2rem', 
          borderRadius: '15px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
        }}>
          
          {/* Target Info */}
          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            color: '#065f46',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '25px',
            textAlign: 'center',
            border: '2px solid #10b981'
          }}>
            <strong>📧 Target Email:</strong> <code style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px' }}>ukrush12@gmail.com</code><br/>
            <small>Click submit to open your email client with a pre-filled message</small>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div style={{
              background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
              color: '#155724',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
              textAlign: 'center',
              border: '2px solid #28a745'
            }}>
              <strong>✅ EMAIL CLIENT OPENED!</strong><br/>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                Your email client should have opened with a pre-filled message to <strong>ukrush12@gmail.com</strong>.<br/>
                Just click "Send" to deliver your message!
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            
            {/* Name Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                  First Name *
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="John"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                  Last Name *
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                Your Email *
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                placeholder="john@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                Company
              </label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                placeholder="Your Company (Optional)"
              />
            </div>

            {/* Service */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                Service Interest
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
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

            {/* Message */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2d3748' }}>
                Message *
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
                placeholder="Tell us how we can help you..."
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                background: isSubmitting 
                  ? '#cbd5e0' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '18px 40px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {isSubmitting ? '📤 Opening Email...' : '📧 Send to ukrush12@gmail.com'}
            </button>
          </form>

          {/* Instructions */}
          <div style={{
            background: '#fff3cd',
            color: '#856404',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '20px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            <strong>📝 How it works:</strong> This form opens your email client with a pre-filled message to ukrush12@gmail.com. Simply click "Send" in your email app to deliver the message!
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleContactForm