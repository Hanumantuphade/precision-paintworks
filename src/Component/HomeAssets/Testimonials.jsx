import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import SectionTitle from "../ui/SectionTitle";

const slideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};


const testimonials = [
  {
    text: `“I hired Suresh House Painter Contractor in Mohali | Chandigarh for a full home repaint, and the results were stunning. Neat work, perfect colors, and on-time delivery!”`,
    name: 'Priya Sharma',
  },
  {
    text: `“Their team is professional, polite, and hardworking. Highly recommended for interior wall painting.”`,
    name: 'Amit Verma',
  },
  {
    text: `“Outstanding Work From Start To Finish! The Team Transformed Our Home With Their Expert Painting And Carpentry. Highly Recommend For Quality And Professionalism.”`,
    name: 'Ritika Joshi',
  },
  {
    text: `“Exceptional Service And Results! The Duco Painting And PU Polish On Our Doors Are Flawless. Maa Luxmi Painting Exceeded All Our Expectations.”`,
    name: 'Rohan Mehta',
  },
  {
    text: `“From Spray Painting To Intricate Plaster Work, Maa Luxmi Painting Delivered Beautifully. Their Attention To Detail And Customer Care Were Superb.”`,
    name: 'Neha Kapoor',
  },
];

const Testimonials = () => {


  const [index, setIndex] = useState(0);


  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(testimonialTimer);
  }, []);


  return (
    <>
      {/* <motion.div
        className="text-center pt-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Testimonials" subtitle="What our customer think
about our service" center={true} />
      </motion.div> */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
      // Replace with your image
      >
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-primary-100  py-20 bg-cover bg-center bg-no-repeat backdrop-blur-sm "   ></div>

        {/* Foreground Content */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-400 mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-700">
              What our customer think
              about our service.
            </p>
          </motion.div>


          <div className="relative h-56 md:h-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute w-full  bg-teal-50	  rounded-lg backdrop-blur-sm h-full p-8 shadow-xl  border border-blue-100"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed text-center">
                  {testimonials[index].text}
                </p>
                <div className="font-semibold text-primary-800 text-center">
                  - {testimonials[index].name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
