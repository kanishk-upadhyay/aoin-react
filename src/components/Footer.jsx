import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fa-twitter", href: "#", label: "Twitter" },
    { icon: "fa-instagram", href: "#", label: "Instagram" },
    { icon: "fa-linkedin-in", href: "#", label: "LinkedIn" },
    { icon: "fa-youtube", href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="AOIN Logo"
              />
            </div>
            <p className="footer-tagline">
              Your premium live shopping destination. Connect, shop, and grow
              with AOIN.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h5 className="footer-heading">
              <i className="fas fa-link"></i>
              Quick Links
            </h5>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h5 className="footer-heading">
              <i className="fas fa-headset"></i>
              Support
            </h5>
            <ul className="footer-list">
              {support.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-section">
            <h5 className="footer-heading">Get in Touch</h5>
            <div className="footer-contact">
              <motion.a
                href="mailto:infoaoinstore@gmail.com"
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-envelope"></i>
                <span>infoaoinstore@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919893361162"
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-phone"></i>
                <span>+91 9893361162</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} AOIN. All rights reserved.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">
                <i className="fas fa-shield-alt"></i>
                Secure
              </span>
              <span className="footer-badge">
                <i className="fas fa-bolt"></i>
                Fast
              </span>
              <span className="footer-badge">
                <i className="fas fa-heart"></i>
                Trusted
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
