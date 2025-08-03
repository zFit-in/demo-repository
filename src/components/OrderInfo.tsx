import { Clock, Smartphone, AlertCircle, ExternalLink } from 'lucide-react';
import './OrderInfo.css';

const OrderInfo = () => {
  // Check if current time is within ordering hours (5PM-11PM)
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 17 && currentHour < 23;

  return (
    <section id="order" className="order-info">
      <div className="container">
        <div className="order-info-content">
          <div className="order-status">
            <div className="status-indicator">
              {isOpen ? (
                <>
                  <div className="status-dot open"></div>
                  <span className="status-text">Currently Open for Online Ordering</span>
                </>
              ) : (
                <>
                  <div className="status-dot closed"></div>
                  <span className="status-text">Currently Closed for Online Ordering</span>
                </>
              )}
            </div>
          </div>

          <div className="order-details">
            <div className="order-detail-item">
              <Clock className="order-icon" />
              <div className="order-detail-content">
                <h3>Ordering Hours</h3>
                <p>5:00 PM - 11:00 PM</p>
                <p className="order-note">Daily</p>
              </div>
            </div>

            <div className="order-detail-item">
              <Smartphone className="order-icon" />
              <div className="order-detail-content">
                <h3>Order via Mobile App</h3>
                <p>Download our app for the best ordering experience</p>
                <button className="btn btn-primary app-download-btn">
                  Download App
                </button>
              </div>
            </div>

            <div className="order-detail-item">
              <AlertCircle className="order-icon" />
              <div className="order-detail-content">
                <h3>Live Tracking</h3>
                <p className="order-note">Live tracking not available</p>
                <p>Orders will be delivered within 30-45 minutes</p>
              </div>
            </div>
          </div>

          <div className="delivery-platforms">
            <h3 className="platforms-title">Order on Popular Platforms</h3>
            <div className="platform-buttons">
              <a 
                href="https://www.zomato.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn zomato-btn"
              >
                <div className="platform-icon zomato-icon">
                  <span className="platform-text">Z</span>
                </div>
                <div className="platform-info">
                  <span className="platform-name">Zomato</span>
                  <span className="platform-desc">Order on Zomato</span>
                </div>
                <ExternalLink className="external-link" />
              </a>

              <a 
                href="https://www.swiggy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn swiggy-btn"
              >
                <div className="platform-icon swiggy-icon">
                  <span className="platform-text">S</span>
                </div>
                <div className="platform-info">
                  <span className="platform-name">Swiggy</span>
                  <span className="platform-desc">Order on Swiggy</span>
                </div>
                <ExternalLink className="external-link" />
              </a>
            </div>
          </div>

          <div className="delivery-illustration">
            <img src="/delivering.png" alt="Food delivery illustration" className="delivering-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo; 