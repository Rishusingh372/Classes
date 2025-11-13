import { useState, useEffect } from "react";
import '../css/style.css';

const Home=()=>{
   const validateAuth=async()=>{
  
   }
   useEffect(()=>{
    validateAuth();
   }, [])
 
    return(
        <div className="home-container">
          <h1> Welcome To JWT Login</h1>
          <p>This is the home page for authenticated users.</p>
        </div>
    )
}

export default Home;