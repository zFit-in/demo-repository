import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/zfit.png" alt="ZFIT Logo" className="footer-logo-image" />
              <span className="footer-logo-text">ZFIT</span>
            </div>
            <p className="footer-tagline">
              The McDonald's of healthy food. Making healthy eating exciting and delicious.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+91 96934 38548</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>contact@zfit.in</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>ZFIT, Munnekollal, Kundalahalli, Silver Springs Layout, Sai Baba Temple Road, Near HDFC Bank ATM, Marathahalli, Bangalore
              </span>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#order">Order</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <div className="license-info">
              <Shield className="license-icon" />
              <div>
                <p className="license-label">FSSAI License No.</p>
                <p className="license-number">21224008002624</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ZFIT. All rights reserved.</p>
          <p>Healthy food, delivered fresh to your doorstep.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 