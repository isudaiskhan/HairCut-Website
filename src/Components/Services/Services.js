import React from 'react'
import image1 from '../Assets/haircut.png'
import image2 from '../Assets/beard-trim.png'
import image3 from '../Assets/mans-shave.png'
import image4 from '../Assets/hair-dyeing.png'
import image5 from '../Assets/mustache.png'
import image6 from '../Assets/stacking.png'
import { FaPlus } from 'react-icons/fa';
import {motion} from 'framer-motion';




const Services = () => {
  return (
    <>


      <div className='mt-28 max-w-[1240px] mx-auto overflow-hidden'>

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
         className='sm:px-0 px-3'>
            <h1 className='text-center text-[#EB1616] w-32 py-1 text-lg font-semibold mx-auto  bg-[#191C24]'>Services</h1>
            <h1 className='text-center text-white sm:text-5xl text-4xl mt-6 font-family font-bold'>WHAT WE PROVIDE</h1>
        </motion.div>


        <div className='grid grid-cols-1 mt-20 md:grid-cols-2 xl:px-6 lg:px-8 md:px-20 sm:px-10 px-5 lg:grid-cols-3 gap-7'>
        

        {/* Box 1 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
       className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image1} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>HAIRCUT</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>



           
        {/* Box 2 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image2} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>BEARD TRIM</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>

     


        {/* Box 3 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.4, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image3} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>MANS SHAVE</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>
 

            
        {/* Box 4 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.5, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
       className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image4} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>HAIR DYEING</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>



            
        {/* Box 5 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.6, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
       className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image5} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>MUSTACHE</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>



     
        {/* Box 6 */}
        <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.6, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='bg-[#191C24] py-8 flex flex-col items-center relative group'>
      <div className='py-5 px-6 bg-black relative z-10'>
        <img src={image6} alt="Experience" />
      </div>
      <h1 className='text-2xl text-white text-center tracking-wide font-bold font-family mt-6'>STACKING</h1>
      <p className='text-[#8488a0] text-lg text-center mt-3 px-14'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
      <h1 className='text-lg text-center mt-3 text-[#EB1616] font-semibold'>FROM $15</h1>
      
      {/* Plus Icon */}
      <div className="absolute bottom-0 bg-black p-4 cursor-pointer right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaPlus className="text-[#EB1616] text-xl" />
      </div>
    </motion.div>

        </div>
        </div>
      


    </>
  )
}

export default Services