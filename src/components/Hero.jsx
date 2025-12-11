import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMerchants = () => {
    const element = document.getElementById("merchants");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingIcons = [
    { icon: "fa-shopping-bag", delay: 0, duration: 5 },
    { icon: "fa-cart-shopping", delay: 0.5, duration: 5.5 },
    { icon: "fa-tag", delay: 1, duration: 6 },
    { icon: "fa-gift", delay: 1.5, duration: 5.2 },
    { icon: "fa-star", delay: 2, duration: 5.8 },
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-badge">
              <i className="fas fa-fire"></i>
              <span>Live Commerce Marketplace</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Your Premium Live Shopping{" "}
              <span className="text-gradient">Destination</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-description">
              Shop smart. Sell smarter. AOIN connects shoppers and merchants
              through live, interactive commerce experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-stats">
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <div className="stat-info">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Active Users</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-store"></i>
                <div className="stat-info">
                  <span className="stat-number">1,000+</span>
                  <span className="stat-label">Merchants</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-box"></i>
                <div className="stat-info">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">Products</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-actions">
              <motion.button
                className="btn btn-primary btn-lg"
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play-circle"></i>
                Start Shopping Now
              </motion.button>
              <motion.button
                className="btn btn-outline btn-lg"
                onClick={scrollToMerchants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-rocket"></i>
                Become a Merchant
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-features">
              <div className="feature-badge">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Payments</span>
              </div>
              <div className="feature-badge">
                <i className="fas fa-truck"></i>
                <span>Fast Delivery</span>
              </div>
              <div className="feature-badge">
                <i className="fas fa-headset"></i>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="floating-icons-container">
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="floating-icon"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: item.duration * 2.5,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${10 + (index % 2) * 70}%`,
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                </motion.div>
              ))}

              <motion.div
                className="hero-image-placeholder"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <i className="fas fa-shopping-bag"></i>
              </motion.div>
            </div>

            <div className="hero-decorations">
              <motion.div
                className="decoration-circle decoration-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="decoration-circle decoration-2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          className="scroll-arrow"
          onClick={scrollDown}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
