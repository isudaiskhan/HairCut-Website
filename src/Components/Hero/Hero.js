import React,{useRef ,useState, useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage1 from '../Assets/carousel-1.jpg'
import bgimage2 from '../Assets/carousel-2.jpg'
import { BsChevronLeft , BsChevronRight } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";



const Hero = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 640px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    // Initial check
    handleScreenChange();

    // Listen for changes
    mediaQuery.addListener(handleScreenChange);

    // Clean up
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []); // Empty dependency array to run only once on mount


  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };



  return (
    <>

     <div className="relative">
         <button
        className="absolute sm:top-1/2 top-72 transform -translate-y-1/2 lg:left-4 sm:left-1 left-2 text-white rounded-full z-10"
        onClick={goToPrev}
      >
        <BsChevronLeft className='sm:text-5xl text-3xl text-white' />
      </button>
      <button
        className="absolute sm:top-1/2 top-72 transform -translate-y-1/2 lg:right-4 sm:right-1 right-2 text-white rounded-full z-10"
        onClick={goToNext}
      >
        <BsChevronRight className='sm:text-5xl text-3xl text-white' />
      </button>


      <div className="overflow-hidden relative">
      <Slider ref={sliderRef} {...settings} className="relative">
      
     <div className="relative">
      <div
        className='bg-no-repeat h-screen bg-blend-multiply bg-[#000000ce] bg-cover bg-center '
        style={{ backgroundImage: `url(${bgimage1})` }}
      >
        <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
        <div className='max-w-5xl mt-20 sm:p-11 p-6'>
          <h1 className="text-4xl sm:text-6xl font-bold font-family sm:px-0 px-1 lg:text-7xl text-white" style={{ lineHeight: isLargeScreen ? '5.3rem' : '3rem' }}>
            WE WILL KEEP YOU AN AWESOME LOOK
          </h1>
            <div className="flex items-center mt-8">
              <FaLocationDot className='sm:text-2xl text-xl text-[#EB1616]' />
              <span className="text-white font-bold sm:text-2xl text-xl ml-4 font-family">123 STREET, NEW YORK, USA</span>
            </div>
            <div className="flex mt-4 ml-1 items-center">
            <FaPhoneAlt className='sm:text-2xl text-xl text-[#EB1616]' />

              <span className="text-white font-bold sm:text-2xl text-xl ml-4 font-family">+012 345 67890</span>
            </div>
            </div>
          </div>
        </div>
      </div>


        <div className="relative">
          <div
        className='bg-no-repeat h-screen bg-blend-multiply bg-[#000000ce] bg-cover bg-center '
        style={{ backgroundImage: `url(${bgimage2})` }}>
          <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
          <div className='max-w-5xl mt-20 sm:p-11 p-6'>
            <h1 className="text-4xl sm:text-6xl font-bold sm:px-0 px-1 lg:text-7xl text-white font-family" style={{ lineHeight: isLargeScreen ? '5.3rem' : '3rem' }}>
              LUXURY HAIRCUT AT AFFORDABLE PRICE
            </h1>
            
            <div className="flex items-center mt-8">
              <FaLocationDot className='sm:text-2xl text-xl text-[#EB1616]' />
              <span className="text-white font-bold sm:text-2xl text-xl ml-4 font-family">123 STREET, NEW YORK, USA</span>
            </div>
            <div className="flex mt-4 ml-1 items-center">
            <FaPhoneAlt className='sm:text-2xl text-xl text-[#EB1616]' />

              <span className="text-white font-bold sm:text-2xl text-xl ml-4 font-family">+012 345 67890</span>
            </div>
            </div>
          </div>
        </div>
        </div>
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default Hero