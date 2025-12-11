import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Trust from "../components/Trust";

/**
 * HomePage component - Main landing page with all sections
 */
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Trust />
    </main>
  );
};

export default HomePage;
