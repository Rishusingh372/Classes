import React from "react";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Nab from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./pages/Display";
// import Contact from "./pages/Contact";
import Update from "./pages/Update";
import Serach from "./pages/Serach";
import Conection from "./pages/Conection";
import Footer from "./components/Footer";

function App (){
  return(
    <Router>
      <Nab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/search" element={<Serach />} />
          <Route path="/conection" element={<Conection />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  )

}

export default App;
