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

  let image=["/bick1.webp","/bick2.webp","/bick3.webp","/bick4.webp"]
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home img={image}/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/Gallery" element={<Gallery name={"Rishu"}/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
