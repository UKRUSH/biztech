import { useState } from 'react'

export default function StyleShowcase() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      title: "Glass Effect Card",
      description: "Modern glassmorphism design with backdrop blur",
      className: "card-glass",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Hover Lift Card", 
      description: "Interactive card with smooth lift animation",
      className: "card-hover hover-lift",
      gradient: "bg-gradient-purple-blue"
    },
    {
      title: "Gradient Border Card",
      description: "Stunning gradient border with custom styling",
      className: "gradient-border",
      gradient: "bg-gradient-purple-pink"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text-animated">
            Enhanced Design System
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Experience our modern CSS enhancements with advanced animations, 
            glassmorphism effects, and interactive components.
          </p>
        </div>

        {/* Button Showcase */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button className="btn-primary hover-glow animate-fade-in-up">
            Primary Button
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="btn-secondary hover-scale animate-fade-in-up animate-stagger-1">
            Secondary Button
          </button>
          <button className="btn-outline ripple animate-fade-in-up animate-stagger-2">
            Outline Button
          </button>
          <button className="btn-ghost hover-lift animate-fade-in-up animate-stagger-3">
            Ghost Button
          </button>
        </div>

        {/* Card Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 cursor-pointer transition-all duration-300 ${card.className} ${
                activeCard === index ? 'scale-105' : ''
              }`}
              onClick={() => setActiveCard(index)}
            >
              <div className={`w-16 h-16 ${card.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto animate-float`}>
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center font-heading">{card.title}</h3>
              <p className="text-muted text-center">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Animation Showcase */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Animation Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl animate-bounce mx-auto mb-4"></div>
              <span className="text-sm text-muted">Bounce</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl animate-pulse mx-auto mb-4"></div>
              <span className="text-sm text-muted">Pulse</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple-blue rounded-2xl animate-float mx-auto mb-4"></div>
              <span className="text-sm text-muted">Float</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple-pink rounded-2xl animate-glow mx-auto mb-4"></div>
              <span className="text-sm text-muted">Glow</span>
            </div>
          </div>
        </div>

        {/* Typography Showcase */}
        <div className="mt-16 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold font-heading gradient-text-animated">Typography</h1>
            <h2 className="text-4xl font-semibold text-secondary-600">Enhanced Fonts</h2>
            <p className="text-xl font-medium text-muted-foreground">Inter & Space Grotesk</p>
            <p className="text-base font-normal text-muted">
              Professional typography with perfect spacing and readability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}