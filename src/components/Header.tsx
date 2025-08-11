import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link
            to="/"
            className="logo"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Go to home"
          >
            <img src="/favicon.svg" alt="ZFIT Logo" className="logo-image" />
          </Link>

          <nav
            className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
            aria-expanded={isMenuOpen}
          >
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/subscription" onClick={() => setIsMenuOpen(false)}>
                  Subscription
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="nav-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
