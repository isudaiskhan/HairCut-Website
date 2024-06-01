import React,{useState, useEffect} from 'react'
import image1 from '../Assets/testimonial-1.jpg'
import image2 from '../Assets/testimonial-2.jpg'
import image3 from '../Assets/testimonial-3.jpg'
import { motion } from 'framer-motion';



const Testimonial = () => {

    
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: image1, title: 'CLIENT NAME', about: 'Profession', text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.' },
    { image: image2, title: 'CLIENT NAME', about: 'Profession', text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.' },
    { image: image3, title: 'CLIENT NAME', about: 'Profession', text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Automatic slideshow every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);



  return (
    <>


    <motion.div
        initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
    className="relative sm:py-20 py-28 mt-10 overflow-hidden">


   <h1 className="tracking-widest text-lg text-center font-semibold text-[#EB1616]">TESTIMONIAL</h1>
        <h1 className="mt-4 py-2 font-family md:text-5xl sm:px-0 px-3 sm:text-4xl font-bold text-3xl overflow-hidden text-center text-white">WHAT OUR CLIENTS SAY!</h1>

  <div className="max-w-screen mx-auto sm:h-[500px] h-[600px] flex items-center justify-center relative mt-5">
  

    {slides.map((slide, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="absolute inset-0 text-white text-center"
      >

        <h1 className="text-3xl mt-6 text-white font-bold font-family mx-auto">{slide.title}</h1>
        <h1 className="mt-6 text-[#EB1616] text-lg font-semibold mx-auto">{slide.about}</h1>
        <p className='sm:mt-6 tracking-wider rounded-md text-lg leading-loose text-[#8488a0] p-10 sm:w-3/4 mx-auto'>{slide.text}</p>
        <img src={slide.image} alt={slide.title} className='w-24 mx-auto sm:mt-6 rounded-md' />


      </motion.div>
    ))}
    <button className="prev absolute text-white text-2xl top-1/2 sm:left-8 left-4 transform -translate-y-1/2" onClick={prevSlide}>
      &#10094;
    </button>
    <button className="next absolute top-1/2 text-white text-2xl sm:right-8 right-4 transform -translate-y-1/2" onClick={nextSlide}>
      &#10095;
    </button>
  </div>


</motion.div> 
      

    </>
  )
}

export default Testimonial