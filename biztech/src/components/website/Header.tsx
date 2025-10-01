import React, { useState, useEffect } from 'react';

// Navigation Component
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-lg border-b border-[var(--color-border)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-700)] flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-[var(--color-foreground)]">
                BIZ<span className="text-[var(--color-primary)]">master</span>
              </h1>
              <p className="text-xs text-[var(--color-muted-foreground)] hidden sm:block">
                Strategic Growth Partner
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-[var(--color-foreground)] hover:text-[var(--color-primary)] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-600)] via-[var(--color-primary-700)] to-[var(--color-primary-800)]">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary-400)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--color-primary-300)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[var(--color-primary-500)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            BIZ<span className="text-[var(--color-primary-200)]">master</span> Solutions
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--color-primary-100)] mb-4">
            Your Strategic Growth Partner
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--color-primary-50)] mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering Businesses for Next-Level Success through AI-integrated solutions, 
            strategic partnerships, and comprehensive execution across all business functions.
          </p>

          {/* Key Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-[var(--color-primary-200)] text-2xl mb-2">🚀</div>
              <h3 className="text-white font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-[var(--color-primary-100)] text-sm">
                Cutting-edge AI integration across all business processes
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-[var(--color-primary-200)] text-2xl mb-2">🤝</div>
              <h3 className="text-white font-semibold mb-2">Long-term Partnerships</h3>
              <p className="text-[var(--color-primary-100)] text-sm">
                Execution-focused approach with continuous monitoring
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-[var(--color-primary-200)] text-2xl mb-2">📈</div>
              <h3 className="text-white font-semibold mb-2">Scalable Growth</h3>
              <p className="text-[var(--color-primary-100)] text-sm">
                From SMEs to enterprises - tailored solutions for all
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary-700)] font-semibold rounded-full hover:bg-[var(--color-primary-50)] transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[var(--color-primary-700)] transition-all duration-300">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export { Header, HeroSection };