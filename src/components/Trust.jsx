import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import "./Trust.css";

const Trust = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: "fa-users",
      number: 50000,
      suffix: "+",
      label: "Active Users",
      color: "#ea580c",
    },
    {
      icon: "fa-store",
      number: 1000,
      suffix: "+",
      label: "Verified Merchants",
      color: "#0ea5e9",
    },
    {
      icon: "fa-box",
      number: 100000,
      suffix: "+",
      label: "Products Listed",
      color: "#10b981",
    },
    {
      icon: "fa-star",
      number: 4.8,
      suffix: "/5",
      label: "Average Rating",
      color: "#f59e0b",
    },
  ];

  const trustFeatures = [
    {
      icon: "fa-shield-halved",
      title: "Secure Payments",
      description: "Bank-level encryption for all transactions",
    },
    {
      icon: "fa-certificate",
      title: "Verified Sellers",
      description: "All merchants are thoroughly vetted",
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Always here to help you",
    },
    {
      icon: "fa-award",
      title: "Quality Guaranteed",
      description: "100% satisfaction or money back",
    },
  ];

  return (
    <section id="trust" className="section trust-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge trust-badge">
            <i className="fas fa-shield-alt"></i>
            <span>Trust & Scale</span>
          </div>
          <h2 className="section-title">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="section-description">
            Join our growing community of satisfied shoppers and successful merchants
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          ref={ref}
          className="stats-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} />
          ))}
        </motion.div>

        {/* Trust Features */}
        <motion.div
          className="trust-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="trust-feature-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="trust-feature-icon"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`fas ${feature.icon}`}></i>
              </motion.div>
              <h4 className="trust-feature-title">{feature.title}</h4>
              <p className="trust-feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Preview */}
        <motion.div
          className="testimonials-preview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <motion.i
                key={i}
                className="fas fa-star"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              ></motion.i>
            ))}
          </div>
          <p className="testimonial-text">
            "AOIN has transformed the way I shop online. The live demonstrations
            make it so easy to see products before buying!"
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="author-info">
              <strong>Sarah Johnson</strong>
              <span>Verified Customer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component with Counter Animation
const StatCard = ({ stat, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, stat.number]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return num.toFixed(stat.suffix === "/5" ? 1 : 0);
  };

  return (
    <motion.div
      className="stat-card"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <motion.div
        className="stat-icon"
        style={{ backgroundColor: `${stat.color}15` }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <i className={`fas ${stat.icon}`} style={{ color: stat.color }}></i>
      </motion.div>
      <div className="stat-number">
        {inView && formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};

export default Trust;
