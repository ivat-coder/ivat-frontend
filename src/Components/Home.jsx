import React from 'react';
import bg from '../assets/bg.png';  // Ensure this path is correct
import bg1 from '../assets/bg1.jpg';
import logo from '../assets/logo.png'
import background from '../assets/background.jpg'
import Form from './Form';
import box from '../assets/box.png'
import clock from '../assets/clock.png'
import puzzle from '../assets/puzzle.png'
import smilingface from '../assets/smiling-face.png'
import suitcase from '../assets/suitcase.png'
import truck from '../assets/truck.png'
import HowWeWork from './HowWeWork';
import TestimonialSection from './TestionialSection';
import Footer from './Footer';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';



const services = [
    {
      icon: suitcase, // Replace with your custom icons
      title: 'Expertise and Experience',
      description:
        'With years in the industry, we are a trusted name in office relocations, handling every aspect with precision.',
    },
    {
      icon: puzzle, // Replace with your custom icons
      title: 'Customized Solutions',
      description:
        'We offer tailored solutions for moves of any size, from small offices to large corporate spaces.',
    },
    {
      icon: box, // Replace with your custom icons
      title: 'Packing and Handling',
      description:
        'Our professionals use high-quality materials and techniques to ensure safe transportation.',
    },
    {
      icon: smilingface, // Replace with your custom icons
      title: 'Customer Satisfaction',
      description:
        'We strive for exceptional service from start to finish, making your experience stress-free.',
    },
    {
      icon: truck, // Replace with your custom icons
      title: 'Comprehensive Services',
      description:
        'We handle packing, transportation, unpacking, setup, and furniture reassembly to cut business disruption.',
    },
    {
      icon: clock, // Replace with your custom icons
      title: 'Timely and Safe Transportation',
      description:
        'Our well-maintained fleet ensures timely and secure delivery of your belongings.',
    },
  ];

const Home = () => {



  return (
    <div       className="relative w-full h-full bg-no-repeat bg-cover bg-opacity-10"         style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'left center',
      backgroundSize: 'cover',
    }} >

<div className="bg-[#00477A] h-16 relative z-10 px-4 text-white md:flex-row flex-col md:space-x-4">
  <div className='h-full flex items-center justify-between  container mx-auto'>
  <a 
    href="mailto:ivatmover@gmail.com" 
    className="hover:underline flex items-center"
  >
    <span className="mr-2"><FiMail /></span> ivatmover@gmail.com
  </a>

  
  <a 
    href="tel:+91 8588996655" 
    className="hover:underline flex items-center"
  >
   <span className="mr-2"><FiPhone /></span> +91 8588996655
  </a>
  </div>
</div>
       <div className="absolute inset-0  bg-white opacity-90"></div>

<div className='bg-white'>
       <div className='h-16 md:h-28 w-full bg-white px-4 container mx-auto flex items-center relative z-10'>
         <img 
         src={logo}
         alt=""
         className='h-12  md:h-24'
         />
       </div>
       </div>
    <div className="min-h-screen flex  justify-center  relative font-Poppins"
    >
      {/* Background Section */}
      <div className="absolute inset-0 w-full  ">
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
              <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
      }}
    ></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto relative z-10 px-4 py-16 md:mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:flex-row-reverse md:justify-between gap-4 items-center">
          {/* Left Section: Text */}
          <div className="text-left max-w-3xl  backdrop-blur-custom rounded-xl p-4 md:p-8 md:m-8 lg:px-20">
            <p className="text-4xl md:text-5xl font-bold text-black mb-4 md:leading-loose ">
              Effortless Office Relocation with IVAT
            </p>
            <p className="text-white text-md leading-loose">
            Experience a smooth, stress-free office move with our expert team. We handle every detail, ensuring minimal disruption to your business, whether local or long-distance.
            </p>
          </div>

          {/* Right Section: Form */}
          <div className='md:ml-8 lg:ml-12 '>
          <Form />
          </div>

        </div>
      </div>
      
    </div>
    
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className='mb-[80px]'>
    <h1 className="text-3xl md:text-6xl font-bold text-center font-PlayFair text-[#00477A]">Why Choose IVAT?</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-24 font-Poppins">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#F4F4F4] rounded-lg shadow-lg p-6 md:px-8 flex flex-col  hover:shadow-xl transition-shadow duration-300"
          >
            <img 
            src={service.icon}
            className='h-12 w-12 mb-4'
            alt=""
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className='mb-[80px]'>
    <h1 className="text-3xl md:text-6xl font-bold text-center font-PlayFair text-[#00477A]">How We Work?</h1>
    </div>
    <HowWeWork />
    </div>

    <div className='relative z-10'>
        <TestimonialSection />
    </div>

    <div className='w-full flex justify-center items-center px-4 container mx-auto my-[40px] relative z-10'>
    <div className="bg-amber-500 text-white rounded-xl p-8 md:p-12 w-full text-center shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Move?</h2>
        <p className="text-md md:text-lg mb-6">
          Contact us today for a consultation and make your office move effortless.
        </p>
        <button className="bg-white text-amber-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-all">
          Contact us
        </button>
      </div>
      </div>

      {/* <div className='w-full flex flex-col md:flex-row justify-center items-center px-4 md:px-[200px] lg:px-[250px] my-[20px] md:my-[100px]'>

        <div className='m-4 md:m-12'>
            <p className='font-bold text-2xl text-center mb-4'>Our Address</p>
            <p className='text-lg text-center text-gray-500'>
            Contact us today for a consultation and make your office move effortless.
            </p>
        </div>

        
        <div className='m-4 md:m-12'>
            <p className='font-bold text-2xl text-center mb-4'>Our Phones</p>
            <p className='text-lg text-center text-gray-500'>
            Contact us today for a consultation and make your office move effortless.
            </p>
        </div>

        
        <div className='m-4 md:m-12'>
            <p className='font-bold text-2xl text-center mb-4'>Our Email</p>
            <p className='text-lg text-center text-gray-500'>
            Contact us today for a consultation and make your office move effortless.
            </p>
        </div>

      </div> */}
      <div className='relative z-10'>
        <Footer />
      </div>

    </div>
  );
};

export default Home;  