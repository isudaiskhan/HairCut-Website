import React from 'react'
import image1 from '../Assets/team-1.jpg'
import image2 from '../Assets/team-2.jpg'
import image3 from '../Assets/team-3.jpg'
import image4 from '../Assets/team-4.jpg'
import { FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import {motion} from 'framer-motion';



const Team = () => {
  return (
    <>


    <div className='w-full py-16 overflow-hidden'>
    <motion.div
        initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }} className='sm:px-0 px-3'>
            <h1 className='text-center text-[#EB1616] w-32 py-1 text-lg font-semibold mx-auto bg-[#191C24]'>Our Barber</h1>
            <h1 className='text-center text-white sm:text-5xl text-4xl mt-6 font-family font-bold'>MEET OUR BARBER</h1>
        </motion.div>
      <div className='w-full xl:px-6 lg:px-8 px-1 md:px-20 sm:px-10 mt-5'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2'>

      {/* Card 1 */}
      <motion.div
        initial={{ y: 250, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 40 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
              className='w-full my-4 p-4 relative group'>
          <div className='relative'>
          <img src={image1} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaTwitter className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaFacebookF className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaLinkedinIn className='w-5 h-5 text-[#EB1616]' />
              </a>
            </div>
          </div>
        </div>

        <div className='bg-[#191C24] py-3'>
          <h1 className='text-center text-xl mt-3 font-semibold font-family text-white'>BARBER NAME</h1>
          <p className='text-center p-2 text-[#EB1616]'>Designation</p>
        </div>
      </motion.div>





      {/* Card 2 */}
      <motion.div
        initial={{ y: 350, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 40 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
       className='w-full my-4 p-4 relative group'>
          <div className='relative'>
          <img src={image2} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaTwitter className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaFacebookF className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaLinkedinIn className='w-5 h-5 text-[#EB1616]' />
              </a>
            </div>
          </div>
        </div>

        <div className='bg-[#191C24] py-3'>
          <h1 className='text-center text-xl mt-3 font-semibold font-family text-white'>BARBER NAME</h1>
          <p className='text-center p-2 text-[#EB1616]'>Designation</p>
        </div>
      </motion.div>






       {/* Card 3 */}
       <motion.div
        initial={{ y: 450, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 40 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
        className='w-full my-4 p-4 relative group'>
          <div className='relative'>
          <img src={image3} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaTwitter className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaFacebookF className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaLinkedinIn className='w-5 h-5 text-[#EB1616]' />
              </a>
            </div>
          </div>
        </div>

        <div className='bg-[#191C24] py-3'>
          <h1 className='text-center text-xl mt-3 font-semibold font-family text-white'>BARBER NAME</h1>
          <p className='text-center p-2 text-[#EB1616]'>Designation</p>
        </div>
      </motion.div>






      {/* Card 4 */}
      <motion.div
        initial={{ y: 500, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 40 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
       className='w-full my-4 p-4 relative group'>
          <div className='relative'>
          <img src={image4} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaTwitter className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaFacebookF className='w-5 h-5 text-[#EB1616]' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 hover:bg-white'>
                <FaLinkedinIn className='w-5 h-5 text-[#EB1616]' />
              </a>
            </div>
          </div>
        </div>

        <div className='bg-[#191C24] py-3'>
          <h1 className='text-center text-xl mt-3 font-semibold font-family text-white'>BARBER NAME</h1>
          <p className='text-center p-2 text-[#EB1616]'>Designation</p>
        </div>
      </motion.div>

        </div>
       </div>
      </div>

      
    </>
  )
}

export default Team