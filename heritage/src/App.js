import React, { useEffect } from "react";
import Footer from "./components/Footer";

import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'





export default function App() {



  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  
  return (
    <div>
      <ScrollToTop />

  <Router>
  <Navbar/>  
    <Routes>
      <Route path="/" element={ <><Hero/><Services /><Recommend /><Testimonials /></>} />
      <Route path="/contact" element={<ContactForm/>} />
      {/* <Route path="/contact" component={ContactForm} /> */}
    </Routes>
    <Footer />
  </Router>



    </div>
  );
}

