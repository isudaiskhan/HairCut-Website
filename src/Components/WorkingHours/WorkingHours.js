import React,{useState, useEffect} from 'react'
import image1 from '../Assets/open.jpg'
import {motion} from 'framer-motion';



const WorkingHours = () => {

    
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 1024px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

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



     <div className='w-full py-12'>   

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
       className='w-full py-16 lg:px-20 md:px-24 sm:px-14 px-5'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>

        {/* img */}
        <div>
            <img src={image1} className='h-full w-full' />
          </div>

          <div className='flex flex-col justify-center p-6 md:p-12 bg-[#191C24]'>
          <h1 className='text-center text-[#EB1616] w-40 py-1 text-lg font-semibold bg-black'>Working Hours</h1>
            <h1 className='lg:text-5xl font-family sm:text-4xl text-3xl font-bold mt-4 text-white' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>
            PROFESSIONAL BARBERS ARE WAITING FOR YOU
            </h1>
          

            <div className="flex items-center border-b border-b-[#8488a0] py-3 mt-6">
              
              <h2 className='text-white font-family text-lg font-semibold'>MONDAY</h2>
              <span className='ms-auto text-lg text-[#8488a0]'>09 AM - 09 PM</span>
            </div>

            
            <div className="flex items-center border-b border-b-[#8488a0] py-3">
              
              <h2 className='text-white font-family text-lg font-semibold'>TUESDAY</h2>
              <span className='ms-auto text-lg text-[#8488a0]'>09 AM - 09 PM</span>
            </div>


            
            <div className="flex items-center border-b border-b-[#8488a0] py-3">
              
              <h2 className='text-white font-family text-lg font-semibold'>WEDNESDAY</h2>
              <span className='ms-auto text-lg text-[#8488a0]'>09 AM - 09 PM</span>
            </div>


            
            <div className="flex items-center border-b border-b-[#8488a0] py-3">
              
              <h2 className='text-white font-family text-lg font-semibold'>THURSDAY</h2>
              <span className='ms-auto text-lg text-[#8488a0]'>09 AM - 09 PM</span>
            </div>


            
            <div className="flex items-center border-b border-b-[#8488a0] py-3">
              
              <h2 className='text-white font-family text-lg font-semibold'>FRIDAY</h2>
              <span className='ms-auto text-lg text-[#8488a0]'>09 AM - 09 PM</span>
            </div>

            
            <div className="flex items-center border-b border-b-[#8488a0] py-3">
              
              <h2 className='text-white font-family text-lg font-semibold'>SAT / SUN</h2>
              <span className='ms-auto text-lg text-[#EB1616]'>CLOSED</span>
            </div>

          </div>
         
        </div>
      </motion.div>
    </div>
      
    </>
  )
}

export default WorkingHours