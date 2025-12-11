import { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

// Animation variants
const navbarVariants = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

const buttonHover = { scale: 1.05 };
const buttonTap = { scale: 0.95 };

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    setIsOpen(false);

    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // Fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  }, []);

  const navLinks = useMemo(
    () => [
      { id: "features", label: "Features", icon: "fa-star" },
      { id: "merchants", label: "For Merchants", icon: "fa-store" },
      { id: "how-it-works", label: "How It Works", icon: "fa-lightbulb" },
      { id: "trust", label: "Trust & Scale", icon: "fa-shield-alt" },
    ],
    [],
  );

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <motion.img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AOIN Logo"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu desktop">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <div className="navbar-actions desktop">
            <motion.button
              className="btn-link"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <i className="fas fa-user-circle"></i>
              Sign In
            </motion.button>
            <motion.button
              className="btn btn-primary"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <i className="fas fa-rocket"></i>
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="navbar-toggle mobile"
            onClick={toggleMenu}
            whileTap={buttonTap}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu-content">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="mobile-nav-link"
                  >
                    <div className="mobile-nav-link-content">
                      <i className={`fas ${link.icon}`}></i>
                      <span>{link.label}</span>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                ))}

                <div className="mobile-menu-actions">
                  <button className="btn btn-outline">
                    <i className="fas fa-user-circle"></i>
                    Sign In
                  </button>
                  <button className="btn btn-primary">
                    <i className="fas fa-rocket"></i>
                    Join Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default Navbar;
