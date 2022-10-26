import * as React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../src/Component/Header/Header"
import Footer from "../src/Component/Footer/Footer"
import Home from "../src/Component/Home/Home"
import About from "../src/Component/About/About"
import Services from "../src/Component/Services/Services"
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import "../src/Style.css"
import Testimonials from './Component/Testimonials/Testimonials';
import Iframe from 'react-iframe'

function App() {


  return (

    <>
  <Header/>
  <Home/>
  <About/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  
  <Footer/>
{/* <Routes>

  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
  <Route path="/contact" element={<Contact/>} />

</Routes> */}


    </>


  );
}

export default App;
