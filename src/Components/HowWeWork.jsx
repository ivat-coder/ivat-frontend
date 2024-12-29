import React from 'react';
import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'
import step4 from '../assets/step4.png'
import step5 from '../assets/step5.png'


const steps = [
  {
    id: '01',
    title: '1. Initial Consultation',
    description: 'We begin with a detailed consultation to understand your office relocation requirements and create a tailored moving plan.',
    image: step1,
    reverse: false, // Image on the right
  },
  {
    id: '02',
    title: '2. Packing and Labeling',
    description: 'Our team carefully packs and labels each item to ensure organized unpacking at your new office.',
    image: step2,
    reverse: true, // Image on the left
  },
  {
    id: '03',
    title: '3. Transportation',
    description: 'We handle the transportation logistics, ensuring your belongings reach the destination safely and on schedule.',
    image: step3,
    reverse: false, // Image on the right
  },
  {
    id: '04',
    title: '4. Unpacking and Setup',
    description: 'Upon arrival, we unpack and set up your office according to your specifications, so you can resume business operations swiftly.',
    image: step4,
    reverse: true, // Image on the left
  },
  {
    id: '05',
    title: '5. Post-Move Support',
    description: 'Our support doesn’t end with delivery. We assist with unpacking, organizing, and settling in to ensure your office is running smoothly.',
    image:step5,
    reverse: false, // Image on the right
  },
];

const HowWeWork = () => {
  return (
    <div className="flex flex-col items-center py-12  font-Poppins">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full mb-12 relative ${
              step.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className= {`w-full md:w-5/12 px-4 text-center md:text-left  ${step.reverse ? 'md:ml-[200px]':'md:mr-[200px]'}`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            <div className="w-full md:w-5/12 px-4 mt-4 md:mt-0 flex justify-center">
              <img src={step.image} alt={`Step ${step.id}`} className="h-32 w-32 md:h-48 md:w-48  " />
            </div>

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 justify-center items-center h-12 w-12 rounded-full bg-white border border-red-500 z-10 text-red-500 font-bold">
              {step.id}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile dotted line */}
      <div className="block md:hidden w-1 bg-gray-200 h-full mx-auto my-8"></div>
    </div>
  );
};

export default HowWeWork;
