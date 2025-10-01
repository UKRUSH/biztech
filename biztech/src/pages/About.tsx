// Enhanced About Page with Animations

function AboutHeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate-fadeInUp">About BIZmaster Solutions</h1>
        <p className="hero-subtitle animate-fadeInUp animate-delay-200">YOUR TRUSTED BUSINESS PARTNER</p>
        <p className="animate-fadeInUp animate-delay-400">
          We are a strategic consulting firm dedicated to helping businesses achieve 
          sustainable growth through innovative solutions, expert guidance, and 
          comprehensive support across all business functions.
        </p>
      </div>
    </section>
  )
}

function AboutStorySection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Our Story</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }} className="animate-slideInLeft">
            Founded on the principle that every business deserves expert guidance, 
            BIZmaster Solutions emerged from a vision to bridge the gap between 
            ambitious entrepreneurs and sustainable success.
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }} className="animate-slideInRight animate-delay-200">
            Our team combines decades of experience in strategic consulting, 
            business development, and operational excellence to deliver results 
            that matter.
          </p>
          <p style={{ fontSize: '1.25rem' }} className="animate-slideInLeft animate-delay-400">
            Today, we serve businesses of all sizes, from startups seeking direction 
            to established companies pursuing transformation.
          </p>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-rotateIn">Our Core Values</h2>
        <div className="services-grid">
          <div className="service-card animate-scaleIn animate-delay-100">
            <div className="service-icon animate-glow">🎯</div>
            <h3>Results-Driven</h3>
            <p>
              We focus on delivering measurable outcomes that directly impact 
              your business growth and success.
            </p>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-300">
            <div className="service-icon animate-glow">🤝</div>
            <h3>Partnership Approach</h3>
            <p>
              We work alongside you as trusted partners, not just consultants, 
              ensuring long-term success together.
            </p>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-500">
            <div className="service-icon animate-glow">💡</div>
            <h3>Innovation First</h3>
            <p>
              We leverage cutting-edge strategies and technologies to keep 
              your business ahead of the competition.
            </p>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-700">
            <div className="service-icon animate-glow">🛡️</div>
            <h3>Trust & Integrity</h3>
            <p>
              We operate with complete transparency and maintain the highest 
              standards of professional ethics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }} className="animate-fadeInUp">
          <h2>Ready to Transform Your Business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join hundreds of satisfied clients who have achieved remarkable growth 
            with BIZmaster Solutions as their strategic partner.
          </p>
          <a href="/contact" className="btn btn-primary">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <div className="about-page">
      <AboutHeroSection />
      <AboutStorySection />
      <ValuesSection />
      <CallToActionSection />
    </div>
  )
}
