import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Service from './Components/Pages/Service/Service';
import Contact from './Components/Pages/Contact/Contact';
import PricePlan from './Components/Pages/Pages/PricePlan';
import OurBarbers from './Components/Pages/Pages/OurBarbers';
import Working from './Components/Pages/Pages/Working';
import Testimonials from './Components/Pages/Pages/Testimonials';




function App() {
  return (
    <>

   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/pricingplan" element={<PricePlan/>} />
          <Route path="/ourbarbers" element={<OurBarbers/>} />
          <Route path="/workinghours" element={<Working/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact />} />
   </Routes>
    
   
    </>
  );
}

export default App;