import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Nab from "./components/Nab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Conection from "./pages/Conection";
import Footer from "./components/Footer";

function App (){
  return(
    <Router>
      <Nab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conection" element={<Conection />} />
        </Routes>
      <Footer />
    </Router>
  )

}

export default App;
