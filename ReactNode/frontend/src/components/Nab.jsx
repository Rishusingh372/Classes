import React from 'react'
import { Link } from 'react-router-dom'
import "../mycss/style.css"

const Nab = () => {
  return (
    <>
        <nav>
        <div className="logo">Racer<span>Care</span></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>
  );
};

export default Nab