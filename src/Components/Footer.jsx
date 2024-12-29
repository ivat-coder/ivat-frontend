import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { CiMail, CiPhone } from 'react-icons/ci';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1E] text-white py-8 font-Poppins">
      <div className="container mx-auto px-4 md:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side: Logo and contact info */}

          <div>
          <img
              src={logo} // Replace with the actual path to your logo
              alt=""
              className="h-16 md:h-36 mb-4"
            />
          </div>

          <div className="flex md:flex-col items-center md:space-y-4  space-x-4 mt-4 lg:mt-0 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>



          <div className="flex flex-col items-center lg:items-start">

            <p className="text-center lg:text-left mb-4 md:mb-6">
              <a href="tel:+918588996655" className="flex items-center">
                <span className="mr-2"><FiPhone /></span> +91 8588996655
              </a>
            </p>
            <p className="text-center lg:text-left mb-4 md:mb-6">
              <a href="mailto:info@ivatpackersandmovers.com" className="flex items-center">
                <span className="mr-2"><FiMail /></span> ivatmover@gmail.com
              </a>
            </p>
            <p className=" text-center lg:text-left flex mb-4 md:mb-6"><span className="mr-2"><FiSend /></span>
              T-230, New Palam Vihar Ph-2, Blinkit warehouse, 40 ft road,
              <br /> near dawarka express way, Gurugram, Haryana-122017
            </p>
          </div>



        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <p className="text-sm text-center lg:text-left">© Ivat Packers and Movers 2021</p>
            <div className="flex flex-wrap justify-center lg:justify-start mt-2 lg:mt-0 space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
              <a href="#" className="text-sm hover:text-gray-400">Cancellation Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Referral Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Guarantee</a>
              <a href="#" className="text-sm hover:text-gray-400">Educational Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
