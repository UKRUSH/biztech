// Enhanced Home Page with Animations
function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate-fadeInUp">Focus on Your Vision. We'll Handle the Rest.</h1>
        <p className="hero-subtitle animate-fadeInUp animate-delay-200">WE ASSIST YOUR GROWTH</p>
        <p className="animate-fadeInUp animate-delay-400">
          Expert business solutions, strategic consulting, and comprehensive support 
          that frees up your time and fuels your growth. Discover your perfect business 
          partner with our proven track record.
        </p>
        <div className="hero-buttons animate-fadeInUp animate-delay-600">
          <a href="#contact" className="btn btn-primary">
            Start Your Free Consultation
          </a>
          <a href="#services" className="btn btn-secondary">
            View Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-scaleIn">Solutions Designed to Scale With You</h2>
        <div className="services-grid">
          <div className="service-card animate-slideUp animate-delay-100">
            <div className="service-icon animate-float">🤝</div>
            <h3>Strategic Consulting</h3>
            <p>
              Dedicated professionals providing strategic guidance and business 
              development solutions tailored to your needs.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-300">
            <div className="service-icon animate-float">🛠️</div>
            <h3>Business Support</h3>
            <p>
              Comprehensive back-office support including administrative tasks, 
              data management, and operational efficiency.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-500">
            <div className="service-icon animate-float">📈</div>
            <h3>Growth Solutions</h3>
            <p>
              Scalable business solutions designed to grow with your company 
              from startup to enterprise level.
            </p>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-700">
            <div className="service-icon animate-float">🎯</div>
            <h3>Partnership Approach</h3>
            <p>
              Long-term partnership focused on execution and continuous 
              monitoring of your business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item animate-scaleIn animate-delay-100">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-300">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-500">
            <h3>50+</h3>
            <p>Expert Team Members</p>
          </div>
          <div className="stat-item animate-scaleIn animate-delay-700">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }} className="animate-fadeInUp">
          <h2 className="animate-slideUp">Ready to Transform Your Business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }} className="animate-slideUp animate-delay-200">
            Schedule your free discovery call today and see how BIZmaster Solutions 
            can help accelerate your business growth.
          </p>
          <a href="#contact" className="btn btn-primary animate-slideUp animate-delay-400">
            Schedule Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}