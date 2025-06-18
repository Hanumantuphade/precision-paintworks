import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: "url('/f2.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-3 text-yellow-400">ABOUT</h2>
            <ul className="space-y-2 text-sm">
              <li>◎ Home</li>
              <li>◎ About Us</li>
              <li>◎ Our Services</li>
              <li>◎ Gallery</li>
              <li>◎ Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold mb-3 text-yellow-400">OUR SERVICES</h2>
            <ul className="space-y-2 text-sm">
              <li>◎ Contractor In Chandigarh</li>
              <li>◎ Contractor In Mohali</li>
              <li>◎ Contractor In Zirakpur</li>
              <li>◎ Sector 82, Mohali</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-bold mb-3 text-yellow-400">ADDRESS</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                <span>shreeprasadgupta150@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" />
                <span>088476 72884</span>
              </li>
              <li className="flex items-center gap-2">
                <FaBuilding className="text-yellow-400" />
                <span>1130 sector 45-b, Burail, Chandigarh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-yellow-300">
          © 2024 <span className="font-semibold text-white">Paint Service Contractor</span> | Designed & Maintained by <span className="text-white">Epic Web Service</span>
        </div>
      </div>

      {/* Optional: WhatsApp Floating Icon */}
      {/* <a
        href="https://wa.me/918847672884"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a> */}
    </footer>
  );
};

export default Footer;
