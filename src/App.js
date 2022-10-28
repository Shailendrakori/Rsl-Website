import * as React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/Footer";
import Home from "../src/Component/Home/Home";
import About from "../src/Component/About/About";
import Services from "../src/Component/Services/Services";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import "../src/Style.css";
import Testimonials from "./Component/Testimonials/Testimonials";
// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Fade from "@mui/material/Fade";
// import PropTypes from "prop-types";
// import useScrollTrigger from "@mui/material/useScrollTrigger";


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
 
  


      
    </>
  );
}

export default App;
