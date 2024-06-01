import React from 'react'
import AboutUs from "../../AboutUs/AboutUs";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Pricing from "../../Pricing/Pricing";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Services from "../../Services/Services";
import Team from "../../Team/Team";
import Testimonial from "../../Testimonial/Testimonial";
import WorkingHours from "../../WorkingHours/WorkingHours";
import Layout from '../../Layout/Layout';



const Home = () => {
  return (
    <>
    
    <Layout>
     <Hero />
     <AboutUs />
     <Services />
     <Pricing />
     <Team />
     <WorkingHours />
     <Testimonial />
     <Footer />
     <ScrollButton />
     </Layout>
      
    </>
  )
}

export default Home
