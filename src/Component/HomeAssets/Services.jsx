import React from 'react';
import SectionTitle from '../ui/SectionTitle';


const services = [
  {
    id: 1,
    title: 'Interior & Exterior Painting',
    description: `Whether you're looking to refresh your home's interior or give the exterior a stunning new look, our expert painters use high-quality materials and techniques to achieve beautiful, long-lasting results.`,
  },
  {
    id: 2,
    title: 'Door PU Polish',
    description: `Elevate the look of your doors with our premium polyurethane polish. This service ensures a sleek, durable finish that enhances the natural beauty of your woodwork.`,
  },
  {
    id: 3,
    title: 'Duco Painting',
    description: `Our Duco painting service offers a glossy, durable finish ideal for a variety of surfaces. This advanced technique provides a sophisticated look while ensuring longevity.`,
  },
  {
    id: 4,
    title: 'Specialty Painting',
    description: `From intricate spray painting to unique finishes, our team is skilled in various specialty painting techniques to meet your specific design preferences.`,
  },
  {
    id: 5,
    title: 'POP Plaster Work',
    description: `We offer professional plaster work, including decorative ceiling designs and moldings, to add elegance and character to any space.`,
  },
  {
    id: 6,
    title: 'Carpentry Services',
    description: `Our expert carpenters provide custom woodwork solutions, from installations to repairs, ensuring every detail is crafted with precision and care.`,
  },
];

const ServicesSection = () => {
  return (
    <>
    <div className='flex justify-center items-center pt-6 '>
    <SectionTitle title="Our Services" subtitle="Services We’re Offering" center={true} />
    </div>
    
    
    <section className="py-16 bg-primary-50 text-black">
      <div className="container  mx-auto px-4">
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-slate-200  bg-opacity-90 backdrop-blur border-2 border-gray-400 rounded-2xl p-6 shadow-lg transition hover:scale-[1.02]"
              
            >
              <div className="flex  items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  {service.id}
                </div>
                <h3 className="text-lg font-semibold text-orange-400">{service.title}</h3>
              </div>
              <p className="text-base text-gray-900">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;
