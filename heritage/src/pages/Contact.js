// import React, { useEffect } from "react";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import ContactForm from "./components/ContactForm";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import scrollreveal from "scrollreveal";
// import ScrollToTop from "../components/ScrollToTop";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

// export default function App() {
//   useEffect(() => {
//     const sr = scrollreveal({
//       origin: "top",
//       distance: "80px",
//       duration: 2000,
//       reset: true,
//     });
//     sr.reveal(
//       `
//         nav,
//         #hero,
//         #services,
//         #recommend,
//         #testimonials,
//         footer
//         `,
//       {
//         opacity: 0,
//         interval: 300,
//       }
//     );
//   }, []);
//   return (
//     <div>
//       <ScrollToTop />
//       <Navbar />
//       <Hero />
//       <ContactForm/>
//       <Footer />
//     </div>
//   );
// }
