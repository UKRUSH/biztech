// Business Model Page - Complete BIZmaster Solutions Ecosystem

function BusinessModelHeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate-fadeInUp">Our Business Model</h1>
        <p className="hero-subtitle animate-fadeInUp animate-delay-200">COMPLETE ECOSYSTEM FOR BUSINESS GROWTH</p>
        <p className="animate-fadeInUp animate-delay-400">
          BIZmaster Solutions is a comprehensive business development and growth management company 
          that provides strategic, technological, creative, financial, and educational services 
          to help startups, SMEs, and large enterprises grow sustainably.
        </p>
      </div>
    </section>
  )
}

function OverallNatureSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-scaleIn"> Overall Nature of Services</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="service-card animate-slideUp" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#a904e8', marginBottom: '1.5rem' }}>We Don't Just Advise — We Execute</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              BIZmaster Solutions goes beyond traditional consulting. We execute, manage, and monitor 
              business operations for long-term success. Our comprehensive approach ensures sustainable 
              growth through strategic implementation and continuous optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ThreeProngedModelSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-rotateIn">🚀 Main Categories of Services (3-Pronged Model)</h2>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1800px' }}>
          <div className="service-card animate-slideUp animate-delay-100">
            <div className="service-icon animate-float">🔗</div>
            <h3>1. Connecting Resources & Inventing Business Models</h3>
            <ul style={{ textAlign: 'left', margin: '1.5rem 0' }}>
              <li>• Connects products, ventures, investors, professionals, and locations</li>
              <li>• Develops and launches new business concepts and franchise models</li>
              <li>• Manages entire business setup — operations, IT, marketing, branding, finance</li>
              <li>• Ensures continuous revenue and shared growth among all partners</li>
            </ul>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-300">
            <div className="service-icon animate-float">🏛️</div>
            <h3>2. Direct Services through Six Core Pillars</h3>
            <ul style={{ textAlign: 'left', margin: '1.5rem 0' }}>
              <li>• Provides tailored services across six specialized divisions</li>
              <li>• Each pillar addresses different areas of business growth</li>
              <li>• Comprehensive management across all business functions</li>
              <li>• Integrated approach for maximum efficiency</li>
            </ul>
          </div>
          
          <div className="service-card animate-slideUp animate-delay-500">
            <div className="service-icon animate-float">💻</div>
            <h3>3. Direct Sales of Products</h3>
            <ul style={{ textAlign: 'left', margin: '1.5rem 0' }}>
              <li>• AI chatbots & intelligent agents</li>
              <li>• Mobile and web applications</li>
              <li>• ERP, POS, CRM systems</li>
              <li>• E-commerce platforms</li>
              <li>• Operational and production-based software</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SixCorePillarsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-glow">🏛️ Six Core Service Pillars</h2>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '2000px' }}>
          
          <div className="service-card animate-scaleIn animate-delay-100">
            <div className="service-icon animate-float">💻</div>
            <h3>1. BIZtech Hub</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>IT & Technology Solutions</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Digital transformation and AI integration</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• ERP, POS, CRM system implementation</li>
              <li>• AI integration into workflows and business systems</li>
              <li>• Web and mobile app development</li>
              <li>• E-commerce platform creation</li>
              <li>• Custom operational software and production tools</li>
              <li>• Social media and WhatsApp integration</li>
            </ul>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-200">
            <div className="service-icon animate-float">🎨</div>
            <h3>2. BIZ Creative Forge</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>Branding & Digital Marketing</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Building strong, professional brand identities</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• Company branding (logo, tagline, colors, vision/mission)</li>
              <li>• Graphic design and visual identity development</li>
              <li>• Digital and social media marketing (Facebook, Instagram, TikTok, YouTube)</li>
              <li>• Content creation and campaign management</li>
              <li>• Telecommunications branding (e.g., ringtones)</li>
            </ul>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-300">
            <div className="service-icon animate-float">📈</div>
            <h3>3. BIZ Strategic Growth Center</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>Sales, Strategy & Planning</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Strategic development, sales, and execution</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• Business analysis and re-structuring</li>
              <li>• Strategic sales and marketing planning</li>
              <li>• Business model and concept development</li>
              <li>• Financial planning and business monitoring</li>
              <li>• Team and performance development</li>
              <li>• WhatsApp, SMS, and Email marketing</li>
            </ul>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-400">
            <div className="service-icon animate-float">📊</div>
            <h3>4. BIZ Advisor</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>Financial, Legal & Administrative Services</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Back-office and compliance support</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• Business registration and legal documentation</li>
              <li>• Tax consultancy and auditing</li>
              <li>• Bookkeeping and accounting</li>
              <li>• HR management and secretary services</li>
              <li>• Business and project plan creation</li>
              <li>• Asset management and compliance monitoring</li>
            </ul>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-500">
            <div className="service-icon animate-float">🤝</div>
            <h3>5. BIZ Investor & Venture Hub</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>Investment & Partnerships</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Connecting investors and entrepreneurs</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• Matchmaking between investors, business owners, and skilled professionals</li>
              <li>• Full management of business ventures (planning → execution → monitoring)</li>
              <li>• Resource allocation and profit generation</li>
              <li>• Ongoing support for new business development</li>
            </ul>
          </div>
          
          <div className="service-card animate-scaleIn animate-delay-600">
            <div className="service-icon animate-float">🎓</div>
            <h3>6. BIZ Academy & Forum</h3>
            <h4 style={{ color: '#a904e8', fontSize: '1.1rem', marginBottom: '1rem' }}>Training & Community Building</h4>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Focus: Education, networking, and empowerment</p>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
              <li>• Business training programs (sales, marketing, IT, HR, accounting)</li>
              <li>• Technology integration training (AI, software, workflow systems)</li>
              <li>• Social media marketing workshops</li>
              <li>• Business events, exhibitions, and forums</li>
              <li>• Networking opportunities for entrepreneurs and professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceAreasTableSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">🌐 Summary of Key Service Areas</h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="service-card animate-slideUp">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse', 
                fontSize: '1.1rem',
                backgroundColor: 'transparent'
              }}>
                <thead>
                  <tr style={{ borderBottom: '3px solid #a904e8' }}>
                    <th style={{ 
                      padding: '1rem', 
                      textAlign: 'center', 
                      color: '#a904e8',
                      fontWeight: '700',
                      fontSize: '1.2rem'
                    }}>Category</th>
                    <th style={{ 
                      padding: '1rem', 
                      textAlign: 'center', 
                      color: '#a904e8',
                      fontWeight: '700',
                      fontSize: '1.2rem'
                    }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(88, 0, 136, 0.2)' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Technology</td>
                    <td style={{ padding: '1rem' }}>AI solutions, ERP/POS/CRM systems, apps, e-commerce, automation</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(88, 0, 136, 0.2)' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Branding & Marketing</td>
                    <td style={{ padding: '1rem' }}>Design, branding, digital campaigns, social media management</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(88, 0, 136, 0.2)' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Strategy & Growth</td>
                    <td style={{ padding: '1rem' }}>Business analysis, sales strategy, performance monitoring</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(88, 0, 136, 0.2)' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Finance & Legal</td>
                    <td style={{ padding: '1rem' }}>Accounting, auditing, tax, HR, legal and secretarial services</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(88, 0, 136, 0.2)' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Investment & Ventures</td>
                    <td style={{ padding: '1rem' }}>Business–investor connection and venture management</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>Training & Networking</td>
                    <td style={{ padding: '1rem' }}>Business education, events, community building</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BusinessModelSummarySection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-glow">💡 Complete Business Ecosystem</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div className="service-card animate-slideUp" style={{ 
            background: 'linear-gradient(135deg, #a904e8 0%, #b520f0 100%)',
            color: 'white',
            padding: '3rem 2.5rem'
          }}>
            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem' }}>BIZmaster Solutions</h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.95)' }}>
              BIZmaster Solutions offers a complete ecosystem of business development services, 
              combining <strong>technology</strong>, <strong>creativity</strong>, <strong>finance</strong>, 
              <strong>strategy</strong>, and <strong>education</strong> under one platform — 
              helping businesses grow <strong>smarter</strong>, <strong>faster</strong>, and 
              more <strong>sustainably</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BusinessModelCallToActionSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <div style={{ textAlign: 'center' }} className="animate-fadeInUp">
          <h2 className="animate-slideUp">Ready to Experience Our Complete Ecosystem?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.2rem' }} className="animate-slideUp animate-delay-200">
            Discover how our comprehensive business model can transform your company 
            through our integrated approach to technology, strategy, and growth.
          </p>
          <div className="hero-buttons animate-fadeInUp animate-delay-400">
            <a href="/contact" className="btn btn-primary">
              Explore Our Services
            </a>
            <a href="/services" className="btn btn-secondary">
              View Service Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BusinessModel() {
  return (
    <div className="business-model-page">
      <BusinessModelHeroSection />
      <OverallNatureSection />
      <ThreeProngedModelSection />
      <SixCorePillarsSection />
      <ServiceAreasTableSection />
      <BusinessModelSummarySection />
      <BusinessModelCallToActionSection />
    </div>
  )
}
