import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../ui/ThemeToggle'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      background: 'linear-gradient(135deg, #580088 0%, #7a0fa0 50%, #8b1bb3 100%)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      maxWidth: '1200px',
      width: 'calc(100% - 40px)',
      boxShadow: '0 20px 40px rgba(88, 0, 136, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      animation: 'floatNavbar 6s ease-in-out infinite'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 32px',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.textShadow = '0 4px 8px rgba(0,0,0,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.textShadow = 'none'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            ✨
          </div>
          <span style={{ display: window.innerWidth >= 768 ? 'block' : 'none' }}>
            BIZmaster
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul style={{
          display: window.innerWidth >= 1024 ? 'flex' : 'none',
          alignItems: 'center',
          gap: '8px',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {['Home', 'About', 'Services', 'Business Model', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : item === 'Business Model' ? '/business-model' : `/${item.toLowerCase()}`}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  padding: '12px 24px',
                  borderRadius: '20px',
                  fontWeight: '500',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div style={{
          display: window.innerWidth >= 1024 ? 'flex' : 'none',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            padding: '4px',
            backdropFilter: 'blur(10px)'
          }}>
            <ThemeToggle 
              variant="icon" 
              size="md" 
              className="theme-toggle-navbar"
            />
          </div>
          <Link
            to="/contact"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = '#8B5CF6'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get Started
            <span style={{ fontSize: '14px' }}>→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth >= 1024 ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: window.innerWidth >= 1024 ? 'none' : 'block',
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0 0 32px 32px',
          padding: '24px 32px'
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {['Home', 'About', 'Services', 'Business Model', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : item === 'Business Model' ? '/business-model' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    fontWeight: '500',
                    fontSize: '18px',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          
          <div style={{ 
            marginTop: '24px', 
            paddingTop: '24px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '4px',
                backdropFilter: 'blur(10px)'
              }}>
                <ThemeToggle 
                  variant="icon" 
                  size="md" 
                  className="theme-toggle-mobile"
                />
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'white',
                color: '#8B5CF6',
                padding: '16px 28px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              Get Started
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}