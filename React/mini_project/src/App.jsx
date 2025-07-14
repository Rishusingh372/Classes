import { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
