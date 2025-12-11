import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Features.css";

/**
 * Features component - Displays shopper and merchant features in separate sections
 */
const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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

  const shopperFeatures = [
    {
      icon: "fa-video",
      title: "AOIN Live",
      description: "Real-time shopping with live product demonstrations",
      color: "#ea580c",
    },
    {
      icon: "fa-layer-group",
      title: "Themed Shops",
      description: "Curated shopping experiences tailored to your interests",
      color: "#0ea5e9",
    },
    {
      icon: "fa-gift",
      title: "Daily Deals",
      description: "Exclusive discounts and flash sales every day",
      color: "#10b981",
    },
    {
      icon: "fa-heart",
      title: "Wishlist & Favorites",
      description: "Save and track products you love",
      color: "#f59e0b",
    },
  ];

  const merchantFeatures = [
    {
      icon: "fa-store",
      title: "Create Your Shop",
      description: "Set up your branded storefront in minutes",
      color: "#ea580c",
    },
    {
      icon: "fa-chart-line",
      title: "Analytics Dashboard",
      description: "Track sales, engagement, and growth metrics",
      color: "#0ea5e9",
    },
    {
      icon: "fa-bullhorn",
      title: "Marketing Tools",
      description: "Promote your products with built-in marketing features",
      color: "#10b981",
    },
    {
      icon: "fa-wallet",
      title: "Secure Payments",
      description: "Fast and reliable payment processing",
      color: "#f59e0b",
    },
  ];

  return (
    <>
      <section id="features" className="section section-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <i className="fas fa-shopping-bag"></i>
              <span>For Shoppers</span>
            </div>
            <h2 className="section-title">
              Shop Smarter with <span className="text-gradient">AOIN</span>
            </h2>
            <p className="section-description">
              Discover a new way to shop with live demonstrations, curated
              collections, and exclusive deals tailored just for you.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {shopperFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="feature-icon"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <i
                    className={`fas ${feature.icon}`}
                    style={{ color: feature.color }}
                  ></i>
                </motion.div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <motion.button
                  className="feature-link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn more
                  <i className="fas fa-arrow-right"></i>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="merchants" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge merchant-badge">
              <i className="fas fa-store"></i>
              <span>For Merchants</span>
            </div>
            <h2 className="section-title">
              Grow Your Business with{" "}
              <span className="text-gradient">Live Commerce</span>
            </h2>
            <p className="section-description">
              Powerful tools to help you reach more customers, increase sales,
              and build your brand on our platform.
            </p>
          </motion.div>

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {merchantFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="feature-icon"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <i
                    className={`fas ${feature.icon}`}
                    style={{ color: feature.color }}
                  ></i>
                </motion.div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <motion.button
                  className="feature-link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn more
                  <i className="fas fa-arrow-right"></i>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
