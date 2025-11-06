import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BIZmaster Solutions</h3>
            <p>Focus on your vision. We'll handle the rest.</p>
            
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/bizmaster-solutions/" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://www.facebook.com/BIZmaster.Solutions/" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Strategic Consulting</Link></li>
              <li><Link to="/services">Business Support</Link></li>
              <li><Link to="/services">Growth Solutions</Link></li>
              <li><Link to="/services">Partnership Approach</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Why Choose Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <p>📧 contact@bizmaster-solutions.com</p>
              <p>📞 +94 77 796 0231</p>
              <p>📍 231/A Athurugiriya Road, Malabe</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BIZmaster Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
