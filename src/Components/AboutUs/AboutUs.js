import React,{useState, useEffect} from 'react'
import image1 from '../Assets/about.jpg'
import {motion} from 'framer-motion';



const AboutUs = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 768px)").matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
  
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
  

  return (
    <>

         
<div className="relative w-full overflow-hidden flex flex-col items-center justify-end">  


<div className='relative w-full py-28 px-5'>
  <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row lg:px-4 md:px-20 sm:px-10'>

     <div className="relative lg:ml-auto sm:mx-auto lg:mt-8 mt-12">
      {/* Image Div */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
      >
        <img src={image1} className='lg:w-[440px] w-full' alt="Experience" />
      </motion.div>

      {/* Text Box Div */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
      
       className="absolute text-[#EB1616] xl:bottom-12 lg:bottom-36 bottom-0 left-0 bg-[#191C24] p-8 lg:p-10 text-2xl lg:text-4xl font-bold font-family">
        <span className='ps-4'>25 YEARS</span> 
        <h1 className='mt-4 ps-4 text-white'>EXPERIENCE</h1>
      </motion.div>
    </div>




    {/* First Div */}
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
     className='lg:md:w-7/12 w-full lg:mt-0 mt-20 lg:p-7'>
      <h3 className='font-family text-[#EB1616] text-xl font-semibold lg:ps-2 ps-4 tracking-wide'>About Us</h3>
      <h1 className='md:text-5xl font-family text-white sm:text-4xl text-3xl ps-3 lg:px-2 font-bold tracking-wide py-2' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>MORE THAN JUST A HAIRCUT. LEARN MORE ABOUT US!</h1>
      <p className='text-lg text-[#8488a0] lg:pe-10 lg:px-2 ps-3 mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet .</p>
      <p className='text-lg text-[#8488a0] lg:pe-10 lg:px-2 ps-3 mt-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>

      <section className='mt-3'>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

         {/* Box 1 - Completed Projects */}
         <div className=" p-2">
            <h2 className="sm:text-3xl text-2xl text-white font-family font-bold mt-5">SINCE 1990</h2>
            <p className="text-lg text-[#8488a0] mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
          </div>

           {/* Box 2 - Happy Clients */}
           <div className="p-2">
            <h2 className="sm:text-3xl text-2xl text-white font-family font-bold mt-5">1000+ CLIENTS</h2>
            <p className="text-lg text-[#8488a0] mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
          </div>


        </div>
      </div>
    </section>

    </motion.div>

   
   
  </div>
</div>
</div>


      
    </>
  )
}

export default AboutUs