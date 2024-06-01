import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoCut } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";




const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('HOME');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);

    // const shopPaths = ['/ShopCategory', '/ProductsDetails', '/ProductsCheckout', '/ShoppingCart', '/Confirmation'];
    // const blogPaths = ['/blog'];
    const aboutPaths = ['/about'];
    const servicePaths = ['/service'];
    const pagesPaths = ['/pricingplan', '/ourbarbers', '/workinghours', '/testimonial'];
    const contactPaths = ['/contact'];

    if (aboutPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('ABOUT');
    } else if (servicePaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('SERVICE');
    } else if (pagesPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('PAGES');
    } else if (contactPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('CONTACT');
    } else {
      setActiveMenuItem('HOME');
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    { id: 'about', label: 'ABOUT', link: '/about' },
    { id: 'service', label: 'SERVICE', link: '/service' },

    {
      id: 'pages',
      label: 'PAGES',
      submenu: [
        { label: 'PRICING PLAN', link: '/pricingplan' },
        { label: 'OUR BARBERS', link: '/ourbarbers' },
        { label: 'WORKING HOURS', link: '/workinghours' },
        { label: 'TESTIMONIAL', link: '/testimonials' }

      ]
    },
    { id: 'contact', label: 'CONTACT', link: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      <nav className={`sticky top-0 w-full bg-[#191C24] z-50 transition duration-300 ${hasScrolled ? 'top-0 shadow-xl' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="py-5 mx-auto flex items-center justify-between lg:justify-start">
            <div>
            <div className="flex flex-wrap items-center p-2 cursor-pointer">
            <IoCut className='text-5xl mr-4 text-[#EB1616]' />
            <span className="flex-grow text-4xl font-bold font-family text-[#EB1616]">HAIRCUT</span>
          </div>
            </div>
            <div className="hidden lg:flex items-center space-x-12 ml-auto">
              <ul className="flex items-center space-x-3">
                {navItems.map((item) => (
                  <li key={item.id} className="relative p-4 group cursor-pointer">
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-[#8488a0] text-lg font-family duration-300 font-semibold hover:text-[#EB1616] ${activeMenuItem === item.label ? 'text-[#EB1616]' : ''}`}
                      activeclassname="text-[#81c408] underline"
                       style={{ color: activeMenuItem === item.label ? '#EB1616' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                    </NavLink>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 hidden group-hover:block bg-[#191C24] shadow-lg w-60 z-10 pt-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className="border-b border-b-[#8488a0] hover:border-transparent hover:bg-[#EB1616]">
                            <NavLink
                              to={subItem.link}
                              className="block w-full p-5 px-7 font-bold text-[#EB1616] text-sm hover:text-white transition-colors duration-300"
                               activeclassname="text-[#EB1616]"

                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <button className="flex items-center bg-[#EB1616] text-white px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base hover:bg-[#eb1616de] duration-300">
              <span className="mr-4 font-semibold">Appointment</span>
              <FaArrowRight className='text-lg' />
            </button>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-[#8488a0]" />
                ) : (
                  <IoMdMenu className="text-4xl text-[#8488a0]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen w-full sm:w-3/5 py-4 px-8 shadow md:w-1/3 bg-[#191C24] z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className="relative p-3 select-none group cursor-pointer">
                  {!item.submenu ? (
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-[#8488a0] text-lg font-family duration-300 font-semibold hover:text-[#EB1616] ${activeMenuItem === item.label ? 'text-[#EB1616]' : ''}`}
                      activeclassname="text-[#EB1616] underline"
                       style={{ color: activeMenuItem === item.label ? '#EB1616' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className={`text-[#8488a0] text-lg font-family  duration-300 font-semibold hover:text-[#EB1616] ${activeMenuItem === item.label ? 'text-[#EB1616]' : ''}`}
                       style={{ color: activeMenuItem === item.label ? '#EB1616' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                      {openSubmenu === item.id && (
                        <ul className="pt-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label} className="border-b-[#8488a0] border-b bg-[#191C24] shadow-lg hover:border-transparent hover:bg-[#EB1616]">
                              <NavLink
                                to={subItem.link}
                                onClick={() => setMobileMenu(false)}
                                className="block w-full px-7 font-bold text-[#EB1616] text-sm p-4 hover:text-white transition-colors duration-300"
                                activeclassname="text-[#81c408]"
                               >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="flex mt-5 ms-2 items-center bg-[#EB1616] text-white px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base hover:bg-[#eb1616de] duration-300">
              <span className="mr-4 font-semibold">Appointment</span>
              <FaArrowRight className='text-lg' />
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;