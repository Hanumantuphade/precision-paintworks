
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';



const Hero = () => {
  
  const heroSlides = [
    {
      id: 1,
      image: '/Homepage/h1.png',
      title: 'Bringing Color to Life, One Wall at a Time',
      subtitle: 'Interior & Exterior Painting Services | 10+ Years Experience | 100% Satisfaction Guarantee'
    },
    {
      id: 2,
      image: '/Homepage/h2.png',
      title: 'Transform Your Space with a Splash of Color',
      subtitle: 'Trusted Residential & Commercial Painting Experts You Can Rely On.'
    },
    {
      id: 3,
      image: '/Homepage/h3.jpeg',
      title: 'Your Dream Home, Painted to Perfection',
      subtitle: 'High-Quality Finishes. Affordable Prices. Guaranteed Satisfaction.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="relative min-h-screen bg-white">
        {/* Hero Slider */}
        <div className="relative h-[95vh] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="absolute inset-0 z-20  px-20 flex items-center">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-4xl"
              >
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/Gallery"
                    className="btn bg-white text-primary-800 hover:bg-primary-50 hover:text-primary-900 transition-all p-3 rounded-lg duration-300"
                  >
                    View Our Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="btn border-2 border-white text-white hover:bg-white hover:text-black transition-all p-3 rounded-lg duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col items-center pt-5">
          {/* <h3 className="text-gray-600 text-3xl text-center font-semibold uppercase tracking-wider pt-3 pb-0.5">
        How We Works
      </h3> */}

          <motion.div
            className="w-48 h-0.5 bg-primary-700 mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "18rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </div>

      </section>
    </>
  )
}

export default Hero
