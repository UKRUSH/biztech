import React, { useState } from 'react';

// Services Section Component
const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "BIZtech Hub",
      subtitle: "IT & Technology Solutions",
      icon: "💻",
      description: "Customized operating systems and cutting-edge technological integrations with AI-powered solutions",
      features: [
        "Customized ERP/POS/CRM implementation",
        "AI integration for all business solutions",
        "Social media & WhatsApp integration",
        "AI chatbots and agents development",
        "Web & mobile app development",
        "E-commerce platforms with AI modules",
        "Production-based software tools",
        "Operational base software systems"
      ],
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "BIZ Creative Forge",
      subtitle: "Branding & Digital Marketing",
      icon: "🎨",
      description: "Complete branding solutions and digital marketing strategies with compelling visual identity",
      features: [
        "Company color theme & logo design",
        "Vision/mission/profile development",
        "Graphics design and development",
        "Brand identity creation",
        "Digital marketing strategy & execution",
        "Social media marketing (Facebook/Instagram/TikTok/YouTube)",
        "Scroll-stopping content creation",
        "Performance-driven digital campaigns",
        "Company telecommunications integration"
      ],
      color: "from-pink-600 to-purple-600"
    },
    {
      title: "BIZ Strategic Growth Center",
      subtitle: "Strategic Development & Execution",
      icon: "📈",
      description: "Strategic sales & marketing with business model development and resource connections",
      features: [
        "Internal & external business analysis",
        "Business redesign & architecture",
        "Strategic sales planning & execution",
        "Strategic marketing planning & execution",
        "Financial planning & execution",
        "Business model & concept development",
        "WhatsApp/SMS/Email marketing",
        "Team strategic development",
        "Overall business planning & monitoring",
        "Government & key party connections"
      ],
      color: "from-green-600 to-teal-600"
    },
    {
      title: "BIZ Advisor",
      subtitle: "Legal & Financial Advisory",
      icon: "⚖️",
      description: "Comprehensive back-office support with business registration and financial management",
      features: [
        "Business registration services",
        "Tax consultancy & planning",
        "Bookkeeping & accounting services",
        "Business plan development",
        "Project plan development",
        "HR activities & services",
        "Audit services & compliance",
        "Secretary services",
        "Legal activities & consultation",
        "Asset management services"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      title: "BIZ Investor & Venture Hub",
      subtitle: "Investment & Partnership",
      icon: "💰",
      description: "Strategic intermediary connecting business owners with investors and skilled professionals",
      features: [
        "Business owner & investor connections",
        "Skilled professional networking",
        "Asset owner partnerships",
        "Complete operation management",
        "Initial concept development",
        "Comprehensive business planning",
        "Ongoing venture management",
        "Strategic resource allocation",
        "Profit generation services",
        "Win-win partnership development"
      ],
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "BIZ Academy & Forum",
      subtitle: "Education & Community",
      icon: "🎓",
      description: "Business excellence education and dynamic community building for networking and growth",
      features: [
        "Latest business strategy training",
        "AI for business education",
        "Technology integration training",
        "Social media marketing courses",
        "Sales strategy development",
        "Business consultancy programs",
        "Registration & compliance training",
        "Exclusive business leader events",
        "Networking & partnership forums",
        "Business exhibitions hosting",
        "Startup & SME events"
      ],
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            Our Core Service <span className="text-[var(--color-primary)]">Pillars</span>
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Six specialized pillars delivering next-level expertise and execution with cutting-edge technology integration
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === index
                  ? 'bg-[var(--color-primary)] text-white shadow-lg transform scale-105'
                  : 'bg-[var(--color-card)] text-[var(--color-foreground)] hover:bg-[var(--color-hover)] border border-[var(--color-border)]'
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              <span className="hidden sm:inline">{service.title}</span>
              <span className="sm:hidden">{service.icon}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-[var(--color-card)] rounded-3xl shadow-2xl border border-[var(--color-border)] overflow-hidden">
          <div className="lg:flex">
            {/* Service Info */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center text-3xl mr-4`}>
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)]">
                    {services[activeService].title}
                  </h3>
                  <p className="text-[var(--color-primary)] font-semibold">
                    {services[activeService].subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-[var(--color-muted-foreground)] text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-700)] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Features */}
            <div className="lg:w-1/2 bg-[var(--color-muted)] p-8 lg:p-12">
              <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-6">
                Key Services & Features
              </h4>
              
              <div className="space-y-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-muted-foreground)] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">500+</div>
            <div className="text-[var(--color-muted-foreground)]">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">98%</div>
            <div className="text-[var(--color-muted-foreground)]">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">50+</div>
            <div className="text-[var(--color-muted-foreground)]">AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
            <div className="text-[var(--color-muted-foreground)]">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };