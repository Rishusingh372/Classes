import React from 'react'
import "../mycss/style.css"
import { Link } from 'react-router-dom'


const Nab = () => {
  return (
    <>
        <nav>
        <div className="logo">React<span>Node</span></div>
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