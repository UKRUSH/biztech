// Enhanced Services Page with Animations

function ServicesHeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate-fadeInUp">Our Services</h1>
        <p className="hero-subtitle animate-fadeInUp animate-delay-200">COMPREHENSIVE BUSINESS SOLUTIONS</p>
        <p className="animate-fadeInUp animate-delay-400">
          We provide end-to-end business solutions designed to accelerate your growth, 
          optimize operations, and maximize your success across all business functions.
        </p>
      </div>
    </section>
  )
}

function AllServicesSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-rotateIn">Our Core Services</h2>
        <div className="services-grid">
          <div className="service-card animate-slideUp animate-delay-100">
            <div className="service-icon animate-float">🎯</div>
            <h3>Strategic Consulting</h3>
            <p>
              Comprehensive business strategy development, market analysis, and 
              growth planning tailored to your specific industry and goals.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-200">
            <div className="service-icon animate-float">🛠️</div>
            <h3>Business Support</h3>
            <p>
              Administrative support, operational efficiency optimization, and 
              back-office solutions to streamline your business processes.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-300">
            <div className="service-icon animate-float">📈</div>
            <h3>Growth Solutions</h3>
            <p>
              Scalable business models, expansion strategies, and revenue 
              optimization techniques for sustainable long-term growth.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-400">
            <div className="service-icon animate-float">🤝</div>
            <h3>Partnership Approach</h3>
            <p>
              Long-term strategic partnerships with continuous monitoring, 
              support, and optimization of your business performance.
            </p>
          </div>

          <div className="service-card animate-slideUp animate-delay-500">
            <div className="service-icon animate-float">⚙️</div>
            <h3>Process Optimization</h3>
            <p>
              Workflow analysis, system integration, and process improvement 
              to maximize efficiency and reduce operational costs.
            </p>
          </div>

          <div className="service-card animate-slideUp animate-delay-600">
            <div className="service-icon animate-float">💡</div>
            <h3>Innovation Consulting</h3>
            <p>
              Technology integration, digital transformation, and innovative 
              solutions to keep your business competitive and future-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-scaleIn">How We Work</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="process-steps">
            <div className="process-step animate-slideUp animate-delay-100">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We analyze your current situation and identify opportunities for growth.</p>
            </div>
            <div className="process-step animate-slideUp animate-delay-300">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>We develop a customized plan tailored to your specific needs and goals.</p>
            </div>
            <div className="process-step animate-slideUp animate-delay-500">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>We execute the strategy with precision and provide ongoing support.</p>
            </div>
            <div className="process-step animate-slideUp animate-delay-700">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>We continuously monitor and optimize results for maximum impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesStatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <h2 className="section-title animate-scaleIn" style={{ color: '#1f2937', marginBottom: '2rem' }}>Our Service Results</h2>
        <div className="stats-grid">
          <div className="stat-item animate-scaleIn animate-delay-100">
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-300">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-500">
            <h3>6</h3>
            <p>Core Service Areas</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-700">
            <h3>24/7</h3>
            <p>Dedicated Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesCallToActionSection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }} className="animate-slideUp animate-delay-200">
          <h2 className="animate-glow">Ready to Get Started?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Let us help you transform your business with our comprehensive service offerings. 
            Schedule a free consultation to discuss your specific needs.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary animate-pulse">
              Get Free Consultation
            </a>
            <a href="#services" className="btn btn-secondary animate-pulse animate-delay-200">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <div className="services-page">
      <ServicesHeroSection />
      <AllServicesSection />
      <ServiceProcessSection />
      <ServicesStatsSection />
      <ServicesCallToActionSection />
    </div>
  )
}
