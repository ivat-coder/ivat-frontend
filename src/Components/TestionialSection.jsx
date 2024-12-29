import React, { useRef, useState, useEffect } from 'react';
import User from '../assets/User.png'

// Example testimonial data
const testimonials = [
  {
    id: 1,
    name: "Cameron William",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
  {
    id: 2,
    name: "Bessie Cooper",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
  {
    id: 3,
    name: "Arlene McCoy",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
  {
    id: 4,
    name: "Darlene Robertson",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
  {
    id: 5,
    name: "Mark Johnson",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
  {
    id: 6,
    name: "Sarah Williams",
    quote: "When I joined Top Talent Bridge, I was astounded by their referral system. I never imagined I'd be interacting directly with CTOs and founders of some of the biggest tech firms out there. It was like opening doors I didn't even know existed!",
    image: User
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler for next and previous buttons
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'next' ? scrollLeft + clientWidth : scrollLeft - clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Track scroll position and update active pagination dot
  const handleScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScrollPosition);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScrollPosition);
      }
    };
  }, []);

  return (
    //style={{ backgroundImage: `url(${background})` }}
    <div className="relative py-12 bg-cover bg-center bg-[#6bd4c84d]" >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-6xl font-bold mb-8 font-PlayFair">Our Successful Relocation Stories</h2>
        <div className="relative">
          {/* Testimonial Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-4 no-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none w-full sm:w-80 bg-white p-6 rounded-lg shadow-md snap-start"
              >
                <div className="text-center">
                  <div className='flex justify-center items-center' >
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>


          <div className='flex justify-center'>
            <div className="  flex space-x-1 p-4 ">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>

          </div>
          <div className=" flex items-center space-x-2 p-2">
            <button
              onClick={() => handleScroll('prev')}
              className="p-2 bg-white shadow-md rounded-full z-10"
            >
              &lt;
            </button>
            <button
              onClick={() => handleScroll('next')}
              className="p-2 bg-white shadow-md rounded-full z-10"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
