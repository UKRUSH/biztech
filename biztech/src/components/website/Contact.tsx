import React, { useState } from 'react';

// Why Choose Us Section
const WhyChooseUsSection: React.FC = () => {
  const advantages = [
    {
      title: "Unique Service-Based Model",
      description: "Distinctive three-pronged approach ensuring comprehensive support from inventing new ventures to optimizing existing ones",
      icon: "🚀",
      stats: "3 Business Models"
    },
    {
      title: "Holistic & Integrated Solutions",
      description: "Complete suite of services as your single, trusted partner for all business development needs",
      icon: "🎯", 
      stats: "6 Service Pillars"
    },
    {
      title: "Execution-Focused Commitment",
      description: "Beyond strategy - long-term execution and monitoring ensuring tangible results and sustained growth",
      icon: "⚡",
      stats: "24/7 Monitoring"
    },
    {
      title: "AI & Latest Technology",
      description: "Cutting-edge AI and continuously updated technologies embedded into all solutions and products",
      icon: "🤖",
      stats: "100+ AI Tools"
    },
    {
      title: "Expert Guidance & Scalability",
      description: "Tailored, customized, and scalable solutions with expert guidance for efficient business growth",
      icon: "📈",
      stats: "∞ Scalability"
    },
    {
      title: "Community & Network",
      description: "Vibrant ecosystem of resources, investors, and professionals fostering collective growth",
      icon: "🤝",
      stats: "1000+ Network"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            Why Partner with <span className="text-[var(--color-primary)]">BIZmaster</span>?
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Transform your potential into commanding success with our unique approach and comprehensive solutions
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                {/* Icon & Stats */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{advantage.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {advantage.stats}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
                  {advantage.title}
                </h3>
                
                {/* Description */}
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-primary-700)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h3>
          <p className="text-xl text-[var(--color-primary-100)] mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have achieved next-level success with our comprehensive solutions and AI-powered strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary-700)] font-semibold rounded-full hover:bg-[var(--color-primary-50)] transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[var(--color-primary-700)] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      info: "info@bizmastersolutions.com",
      subInfo: "hello@bizmastersolutions.com"
    },
    {
      icon: "📞",
      title: "Call Us", 
      info: "+94 77 796 0231",
      subInfo: "+94 77 796 0231"
    },
    {
      icon: "📍",
      title: "Visit Us",
      info: "123 Business District",
      subInfo: "Innovation City, IC 12345"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      subInfo: "Sat - Sun: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            Get In <span className="text-[var(--color-primary)]">Touch</span>
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a consultation and discover how we can drive your success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-foreground)] font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-foreground)] font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-foreground)] font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-foreground)] font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors"
                  >
                    <option value="">Select a Service</option>
                    <option value="biztech">BIZtech Hub</option>
                    <option value="creative">BIZ Creative Forge</option>
                    <option value="growth">BIZ Strategic Growth</option>
                    <option value="advisor">BIZ Advisor</option>
                    <option value="investor">BIZ Investor Hub</option>
                    <option value="academy">BIZ Academy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-foreground)] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Tell us about your business needs and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-700)] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-foreground)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[var(--color-muted-foreground)]">
                        {item.info}
                      </p>
                      <p className="text-[var(--color-muted-foreground)] text-sm">
                        {item.subInfo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-[var(--color-primary-100)] mb-6">
                Schedule a free consultation and discover how BIZmaster Solutions can transform your business today.
              </p>
              <button className="px-8 py-3 bg-white text-[var(--color-primary-700)] font-semibold rounded-full hover:bg-[var(--color-primary-50)] transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyChooseUsSection, ContactSection };