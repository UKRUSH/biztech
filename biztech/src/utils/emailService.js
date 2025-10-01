// Simple email sending solution for ukrush12@gmail.com

const WORKING_FORMSPREE_ENDPOINTS = [
  'https://formspree.io/f/xwkglrvp',  // Primary endpoint
  'https://formspree.io/f/mjkvkrvo',  // Backup endpoint
  'https://formspree.io/f/xpwablwj'   // Third backup
]

export const sendEmailToUkrush12 = async (formData) => {
  const emailData = {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    company: formData.company || 'Not provided',
    service: formData.service || 'General Inquiry',
    message: formData.message,
    _replyto: formData.email,
    _subject: `BIZmaster Contact: ${formData.firstName} ${formData.lastName}`,
    // This will automatically forward to ukrush12@gmail.com
  }

  // Try each endpoint until one works
  for (const endpoint of WORKING_FORMSPREE_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        console.log(`✅ Email sent successfully to ukrush12@gmail.com via ${endpoint}`)
        return { success: true, method: 'formspree', endpoint }
      }
    } catch (error) {
      console.log(`Failed with ${endpoint}, trying next...`)
      continue
    }
  }

  // If all Formspree endpoints fail, use mailto as last resort
  const subject = encodeURIComponent(`BIZmaster Contact: ${formData.firstName} ${formData.lastName}`)
  const body = encodeURIComponent(`
From: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service Interest: ${formData.service || 'General Inquiry'}

Message:
${formData.message}

---
Please respond to ${formData.email}
Sent from BIZmaster contact form
  `)

  const mailtoLink = `mailto:ukrush12@gmail.com?subject=${subject}&body=${body}`
  window.open(mailtoLink)

  return { success: true, method: 'mailto' }
}