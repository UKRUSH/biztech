import React from 'react';

// About Section Component
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            About <span className="text-[var(--color-primary)]">BIZmaster</span> Solutions
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            A dynamic business development company established in July 2024, transforming enterprises into industry leaders
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)]">Our Vision</h3>
            </div>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              To transform businesses into industry leaders known for delivering unparalleled quality and professional 
              service, creating a vibrant ecosystem where innovation, collaboration, and sustained profitability 
              lead to financial freedom for all connected stakeholders.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)]">Our Mission</h3>
            </div>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              To empower businesses at every stage by providing integrated, next-level strategic solutions, 
              comprehensive management, and a supportive community, ensuring continuous growth and the 
              creation of professional, smooth, and classy business models.
            </p>
          </div>
        </div>

        {/* Three-Pronged Business Model */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">
              Our Unique <span className="text-[var(--color-primary)]">Three-Pronged</span> Business Model
            </h3>
            <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
              Addressing diverse market needs through interconnected channels for long-term partnerships and collective growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-[var(--color-card)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)] h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    Connecting Resources
                  </h4>
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  Strategic intermediary bringing together products, ventures, investors, business locations, 
                  and skilled professionals to develop entirely new, profitable business models with full 
                  management responsibility.
                </p>
              </div>
            </div>

            {/* Model 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-[var(--color-card)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)] h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    Direct Services
                  </h4>
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  Comprehensive, customized services through our six specialized pillars for ongoing businesses, 
                  startups, SMEs, and corporate-level clients with tailored, scalable solutions.
                </p>
              </div>
            </div>

            {/* Model 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-[var(--color-card)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)] h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    Product Sales
                  </h4>
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  Direct sales of standardized products and solutions including innovative AI products, 
                  operational software, mobile apps, and e-commerce platforms with advanced AI modules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">6</div>
            <div className="text-[var(--color-primary-100)] font-medium">Service Pillars</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-[var(--color-primary-100)] font-medium">AI Solutions</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-[var(--color-primary-100)] font-medium">Support</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-[var(--color-primary-100)] font-medium">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };