import { useState, useEffect, useCallback, useMemo } from "react";
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

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const navLinks = useMemo(
    () => [
      { id: "features", label: "Features" },
      { id: "merchants", label: "For Merchants" },
      { id: "how-it-works", label: "How It Works" },
      { id: "trust", label: "Trust & Scale" },
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
              src="/logo.png"
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
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="mobile-nav-link"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={buttonTap}
                  >
                    {link.label}
                    <i className="fas fa-chevron-right"></i>
                  </motion.button>
                ))}

                <div className="mobile-menu-actions">
                  <motion.button
                    className="btn btn-outline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileTap={buttonTap}
                  >
                    <i className="fas fa-user-circle"></i>
                    Sign In
                  </motion.button>
                  <motion.button
                    className="btn btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={buttonTap}
                  >
                    <i className="fas fa-rocket"></i>
                    Join Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
