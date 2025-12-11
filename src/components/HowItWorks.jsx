import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HowItWorks.css";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: "fa-user-plus",
      title: "Sign Up",
      description: "Create your account in under 2 minutes",
      color: "#ea580c",
    },
    {
      icon: "fa-search",
      title: "Browse & Discover",
      description: "Explore live streams and curated collections",
      color: "#0ea5e9",
    },
    {
      icon: "fa-shopping-cart",
      title: "Shop Live",
      description: "Purchase products during live demonstrations",
      color: "#10b981",
    },
    {
      icon: "fa-truck-fast",
      title: "Fast Delivery",
      description: "Get your products delivered to your doorstep",
      color: "#f59e0b",
    },
  ];

  const merchantSteps = [
    {
      icon: "fa-store",
      title: "Create Your Store",
      description: "Set up your branded shop with our easy tools",
    },
    {
      icon: "fa-upload",
      title: "Add Products",
      description: "Upload your inventory with detailed descriptions",
    },
    {
      icon: "fa-video",
      title: "Go Live",
      description: "Start live streaming to showcase your products",
    },
    {
      icon: "fa-chart-line",
      title: "Track & Grow",
      description: "Monitor analytics and optimize your sales",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <i className="fas fa-lightbulb"></i>
            <span>How It Works</span>
          </div>
          <h2 className="section-title">
            Get Started in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="section-description">
            Whether you're shopping or selling, getting started is quick and
            easy
          </p>
        </motion.div>

        {/* Shopper Steps */}
        <div className="steps-section">
          <motion.h3
            className="steps-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-shopping-bag"></i>
            For Shoppers
          </motion.h3>

          <motion.div
            ref={ref}
            className="steps-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card"
                variants={stepVariants}
              >
                <div className="step-number">{index + 1}</div>
                <div
                  className="step-icon"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <i
                    className={`fas ${step.icon}`}
                    style={{ color: step.color }}
                  ></i>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <motion.i
                      className="fas fa-arrow-right"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.i>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Merchant Steps */}
        <div className="steps-section">
          <motion.h3
            className="steps-subtitle merchant-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-store"></i>
            For Merchants
          </motion.h3>

          <motion.div
            className="steps-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {merchantSteps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card merchant-step"
                variants={stepVariants}
              >
                <div className="step-number merchant-number">{index + 1}</div>
                <div className="step-icon merchant-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>

                {index < merchantSteps.length - 1 && (
                  <div className="step-connector">
                    <motion.i
                      className="fas fa-arrow-right"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.i>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Ready to Get Started?</h3>
          <div className="cta-buttons">
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-rocket"></i>
              Join AOIN Today
            </motion.button>
            <motion.button
              className="btn btn-outline btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-play-circle"></i>
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
