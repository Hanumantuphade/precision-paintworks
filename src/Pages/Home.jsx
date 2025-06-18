import { motion } from 'framer-motion';
import Hero from '../Component/HomeAssets/Hero';
import About from '../Component/HomeAssets/About';
import ServicesSection from '../Component/HomeAssets/Services';
import Testimonials from '../Component/HomeAssets/Testimonials';



const Home = () => {
  // Variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
     <Hero/> 
     <About/>
     <ServicesSection/>
      <Testimonials/>
    </motion.div>
  );
};

export default Home;