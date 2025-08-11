import { Helmet } from 'react-helmet-async';
import './ContactPage.scss';
import { Youtube, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="section">
      <Helmet>
        <title>ZFIT Contact</title>
        <meta
          name="description"
          content="Contact ZFIT: Phone, email, and address."
        />
        <link rel="canonical" href="https://zfit.in/contact" />
        <meta property="og:title" content="Contact ZFIT" />
        <meta
          property="og:description"
          content="Reach us via phone, email, or visit our address."
        />
      </Helmet>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">We&apos;d love to hear from you.</p>

        <div className="card" style={{ padding: '1rem' }}>
          <p>
            <strong>Phone:</strong>{' '}
            <a className="clean-link" href="tel:+919693438548">
              +91 96934 38548
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a className="clean-link" href="mailto:contact@zfit.in">
              contact@zfit.in
            </a>
          </p>
          <p>
            <strong>Address:</strong> ZFIT, Munnekollal, Kundalahalli, Silver
            Springs Layout, Sai Baba Temple Road, Near HDFC Bank ATM,
            Marathahalli, Bangalore
          </p>
          <p>
            <strong>FSSAI License:</strong> 21224008002624
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <strong>Social:</strong>
            <a
              className="clean-link"
              href="https://www.youtube.com/@zfit-in"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ZFIT on YouTube"
              title="ZFIT on YouTube"
            >
              <Youtube className="social-icon" data-icon="youtube" />
            </a>
            <a
              className="clean-link"
              href="https://www.instagram.com/zfit_in/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ZFIT on Instagram"
              title="ZFIT on Instagram"
            >
              <Instagram className="social-icon" data-icon="instagram" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
