import React from 'react'
import "../mycss/style.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
        <nav>
        <div className="logo">ReactNode</div>
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/Insert">Insert</Link></li>
                <li><Link to="/Display">Display</Link></li>
                <li><Link to="/Update">Update</Link></li>
                <li><Link to="/Search">Search</Link></li>
            </ul>
        </nav>
        <hr color='red'/>
    </>
  );
};

export default Nav;