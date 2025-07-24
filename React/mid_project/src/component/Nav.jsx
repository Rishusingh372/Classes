import React from "react";
import "../mycss/style.css";
import { Link } from "react-router-dom";  


const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">Racer<span>Care</span></div>
        <ul>
        <li><Link to={"/"}> Page1</Link></li>
        <li><Link to={"/page2"}> Page2</Link></li>
        <li><Link to={"/dashboard"}> Dashboard</Link></li>
        <li><Link to={"/gallery"}> Gallery</Link></li>
        <li><Link to={"/contact"}> Contact</Link></li>

        </ul>
      </nav>

     

    
    </>
  );
};

export default Nav;