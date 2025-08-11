import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <Helmet>
        <title>
          ZFIT - The McDonald&apos;s of Healthy Food | High Protein & Anti-Aging
          Meals
        </title>
        <meta
          name="description"
          content="Order healthy, high-protein meals online at ZFIT. The future McDonald's of healthy food with anti-aging options."
        />
        <link rel="canonical" href="https://zfit.in/" />
      </Helmet>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eating-image">
              <img
                src="/eating.png"
                alt="Healthy eating illustration"
                className="eating-illustration"
              />
            </div>
            <div className="hero-text-content">
              <h1 className="hero-title">
                <span className="hero-highlight">
                  Healthy that tastes SINFUL.
                </span>
              </h1>
              <p className="hero-subtitle">
                Think healthy means boring? Think again.
              </p>
              <p className="hero-description">
                PG life or work grind ruining your gains? Eat clean. Lift heavy.
                Repeat.
              </p>
              <div className="hero-cta">
                <div className="hero-platform-buttons">
                  <a
                    href="https://link.zomato.com/xqzv/rshare?id=1131557533056327c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-platform-btn zomato-btn"
                  >
                    <div className="hero-platform-icon zomato-icon">
                      <span className="hero-platform-text">Z</span>
                    </div>
                    <div className="hero-platform-info">
                      <span className="hero-platform-name">Zomato</span>
                      <span className="hero-platform-desc">
                        Order on Zomato
                      </span>
                    </div>
                    <ExternalLink className="hero-external-link" />
                  </a>

                  <a
                    href="https://www.swiggy.com/direct/brand/585107?source=swiggy-direct&subSource=generic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-platform-btn swiggy-btn"
                  >
                    <div className="hero-platform-icon swiggy-icon">
                      <span className="hero-platform-text">S</span>
                    </div>
                    <div className="hero-platform-info">
                      <span className="hero-platform-name">Swiggy</span>
                      <span className="hero-platform-desc">
                        Order on Swiggy
                      </span>
                    </div>
                    <ExternalLink className="hero-external-link" />
                  </a>
                </div>

                <div className="hero-subscription-cta">
                  <Link
                    to="/subscription"
                    className="subscription-cta-btn"
                    aria-label="Explore food subscription plans"
                  >
                    Get Food Subscription
                  </Link>
                  <span className="subscription-cta-note">
                    From ₹4,999/month · High protein · Customizable
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/zfit.svg" alt="ZFIT" className="hero-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
