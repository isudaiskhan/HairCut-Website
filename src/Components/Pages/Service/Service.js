import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/carousel-1.jpg'
import Services from '../../Services/Services';
import Testimonial from '../../Testimonial/Testimonial';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Service = () => {
  return (
    <>

   <Navbar />

   <div className="relative">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#000000ce]" style={{ backgroundImage: `url(${bgimage})` }}>

         <motion.div
               initial={{x:-100,opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
                duration:1}}
           className="flex flex-col items-center pt-10 sm:ps-16 sm:px-0 px-5 h-full">
             <h1 className="sm:text-6xl text-5xl font-family font-bold text-center text-white mt-28">SERVICE</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-white mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-white mr-3">PAGES</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-[#EB1616]">SERVICE</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

             </div>


             <Services />
             <Testimonial />
             <Footer />
             <ScrollButton />
      
    </>
  )
}

export default Service