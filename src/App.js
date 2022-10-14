import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../src/Component/Header/Header"
import Home from "../src/Component/Mainfile/Home"
import About from "../src/Component/Mainfile/About"
import Services from "../src/Component/Mainfile/Services"
import Portfolio from './Component/Mainfile/Portfolio';
import Contact from './Component/Mainfile/Contact';
















function App() {


  return (

    <>
  <Header/>
<Routes>

  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
  <Route path="/contact" element={<Contact/>} />

</Routes>
    </>


  );
}

export default App;
