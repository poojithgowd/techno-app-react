import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicesHome from './Components/Services/ServicesHome';
import Nav from './Components/Nav';
import ContactHome from './Components/Services/Contact/ContactHome';
import PlanHome from './Components/Plan/PlanHome';
// import Verificationotp from './Components/Services/Contact/verificationotp';
import arrow from './asserts/keyboard_double_arrow_up_76dp_4B77D1_FILL0_wght400_GRAD0_opsz48.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Verificationotp from './Components/Services/Contact/verificationotp';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 50) { // Show button after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Verificationotp/> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicesHome />} />
          <Route path="/Contact" element={<ContactHome />} />
          <Route path="/Plan" element={<PlanHome />} />
        </Routes>
      </BrowserRouter>
      {/* Add the image with conditional rendering */}
      {isVisible && (
        <img
          src={arrow}
          alt="Scroll to top"
          style={{ position: 'fixed', bottom: '10px', right: '1%', cursor: 'pointer', width:"60px"}}
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default App;
