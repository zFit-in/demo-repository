import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eating-image">
              <img src="/eating.png" alt="Healthy eating illustration" className="eating-illustration" />
            </div>
            <div className="hero-text-content">
              <h1 className="hero-title">
                <span className="hero-highlight">Healthy that tastes SINFUL.</span>
              </h1>
              <p className="hero-subtitle">
                Think healthy means boring? Think again.
              </p>
              <p className="hero-description">
                PG life or work grind ruining your gains? Eat clean. Lift heavy. Repeat.
              </p>
              <div className="hero-cta">
                <span className="hero-cta-text">Order Online at ZFIT • 5PM-11PM</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/zfit.svg" alt="ZFIT - The McDonald's of Healthy Food" className="hero-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 