import React,{useState, useEffect} from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { MdKeyboardArrowRight } from "react-icons/md";





const Footer = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
      }, []); // Empty dependency array ensures that effect runs only once after mount
    
      const initialXLeft = windowSize.width >= 640 ? -200 : -70; // Initial X position for left animation
      const initialXRight = windowSize.width >= 640 ? 200 : 70; // Initial X position for right animation
    
      const initialGreen = {
        x: initialXLeft, // Set initial position for green element
        opacity: 0
      };
    
      const initialRed = {
        x: initialXRight, // Set initial position for red element
        opacity: 0
      };

  return (
    <>

     <div className='bg-[#191C24] md:px-0 px-5 overflow-hidden'>

    <div className='max-w-[1240px] mx-auto mt-7 px-3 text-gray-300'>
    <div className='flex flex-wrap justify-center gap-'>
    <div className='w-full md:w-4/12'>
    <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
         className='space-y-3 mt-16'>
        <h6 className='text-[#FFFFFF] text-2xl font-family font-bold ps-2'>GET IN TOUCH</h6>
          <div className="mt-20 text-white py-4 space-y-3">
        <div className="flex items-center space-x-4 text-white">
        <a href='#' className='px-2 py-2 group duration-300 bg-black hover:bg-[#EB1616]'>
        <FiMapPin className='group-hover:text-white text-[#EB1616] text-xl' />
        </a>
          <span className='text-[#8488a0]'>123 Street, New York, USA</span>
        </div>
        <div className="flex items-center space-x-4 text-white">
        <a href='#' className='px-2 py-2 group duration-300 bg-black hover:bg-[#EB1616]'>
         <FiPhone className='group-hover:text-white text-[#EB1616] text-xl' />
          </a>
          <span className='text-[#8488a0]'>+012 345 67890</span>
        </div>


        <div className="flex items-center space-x-4 text-white">
        <a href='#' className='px-2 py-2 group duration-300 bg-black hover:bg-[#EB1616]'>
         <FiMail className='group-hover:text-white text-[#EB1616] text-xl' />
          </a>                         
           <span className='text-[#8488a0]'>info@example.com</span>
        </div>
      </div>
      </motion.div>
      </div>


  
      <div className='w-full md:w-4/12'>

    <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
    
       className='space-y-3 mt-16'>
      <h6 className='text-white text-2xl font-family font-bold ps-2'>QUICK LINKS</h6>
          <ul>
      <a href='#' className='flex items-center group text-[#8488a0]'>
        <MdKeyboardArrowRight className='mr-1 text-xl group-hover:text-[#EB1616]' />
        <li className='py-2 group-hover:tracking-widest group-hover:text-[#EB1616] duration-500'>About Us</li>
      </a>
      <a href='#' className='flex items-center group text-[#8488a0]'>
        <MdKeyboardArrowRight className='mr-1 text-xl group-hover:text-[#EB1616]' />
        <li className='py-2 group-hover:tracking-widest duration-500 group-hover:text-[#EB1616]'>Contact Us</li>
      </a>
      <a href='#' className='flex items-center group text-[#8488a0]'>
        <MdKeyboardArrowRight className='mr-1 text-xl group-hover:text-[#EB1616]' />
        <li className='py-2 group-hover:tracking-widest duration-500 group-hover:text-[#EB1616]'>Our Services</li>
      </a>
      <a href='#' className='flex items-center group text-[#8488a0]'>
        <MdKeyboardArrowRight className='mr-1 text-xl group-hover:text-[#EB1616]' />
        <li className='py-2 group-hover:tracking-widest duration-500 group-hover:text-[#EB1616]'>Terms & Condition</li>
      </a>

      <a href='#' className='flex items-center group text-[#8488a0]'>
        <MdKeyboardArrowRight className='mr-1 text-xl group-hover:text-[#EB1616]' />
        <li className='py-2 group-hover:tracking-widest duration-500 group-hover:text-[#EB1616]'>Support</li>
      </a>
    </ul>
        </motion.div>
      </div>


    <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
    
       className='w-full md:w-4/12'>
      <div className='space-y-3 mt-16'>
        <h6 className='text-white text-2xl font-family font-bold'>NEWSLETTER</h6>
      </div>
      
      <div className="flex mt-7 items-start">
      <input
        className="border border-gray-600 bg-white text-gray-900 focus:outline-none placeholder-gray-500 w-full px-5 py-3"
        placeholder="Your Email"
      />
      <button className="bg-[#EB1616] text-white px-4 py-3 border-y border-y-[#EB1616] hover:bg-[#eb1616d7] transition duration-300">
       SignUp
      </button>
    </div>

        <div className="mt-8 flex flex-wrap text-white py-4 space-x-3">
        <div className="flex items-center space-x-4 text-white">
        <a href='#' className='px-4 py-4 group duration-300 bg-black hover:bg-[#EB1616]'>
                      <AiOutlineTwitter className='group-hover:text-white text-[#EB1616] text-2xl' />
                  </a>
        </div>
        <a href='#' className='px-4 py-4 group duration-300 bg-black hover:bg-[#EB1616]'>
                      <FaFacebookF className='group-hover:text-white text-[#EB1616] text-2xl' />
                  </a>
        <a href='#' className='px-4 py-4 group duration-300 bg-black hover:bg-[#EB1616]'>
                      <FaInstagram className='group-hover:text-white text-[#EB1616] text-2xl' />
                  </a>         

                  <a href='#' className='px-4 py-4 group duration-300 bg-black hover:bg-[#EB1616]'>
                      <AiFillLinkedin className='group-hover:text-white text-[#EB1616] text-2xl' />
                  </a>        
      </div>
    </motion.div>


    
  </div> 
</div>


        <div className='tracking-wide flex flex-col md:flex-row bg-black p-10 text-center mx-auto max-w-[1240px] mt-20 overflow-hidden'>
          <motion.div
          initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
          whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
          transition={{ 
          delay: 0.2, 
          x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
          opacity: { duration: 1 }, // Smooth opacity transition
          ease: "easeIn", // Easing function
          duration: 1 // Overall animation duration
        }}
         className='md:text-start text-center w-full md:w-1/2 mb-4 md:mb-0'>
            <h1 className='text-[#8488a0]'>© <span className='text-[#EB1616]'>HAIRCUT </span>, All Right Reserved.</h1>
            </motion.div>

            <motion.div
            initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
            whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
            transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
          }}
             className='md:text-end text-center md:w-1/2 w-full'>
            <h1 className='text-[#8488a0]'> Designed and Developed By <span className='text-[#EB1616] cursor-pointer'> Sudais Khan </span> .</h1>
            </motion.div>
        </div>
   </div>

    </>
  )
}

export default Footer