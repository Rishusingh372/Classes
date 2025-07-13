import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">Racer<span>Care</span></div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">Gallery</a>
          </li>
        </ul>
      </nav>

      <section>
        <div className="hero">
          <div className="hero_content">
            <h1>Welcome to Racer<span>Care</span></h1>
            <p>Your one-stop solution for all your needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores numquam eaque in, dolorem consequatur tenetur dolor quos magni! Perspiciatis porro quia est commodi eaque expedita impedit harum, vero voluptates vel ratione obcaecati rem temporibus accusamus dolor minus mollitia repellendus blanditiis nemo perferendis dicta ipsum sint? Obcaecati rerum dolorum quis unde quibusdam minus ducimus est aspernatur! Blanditiis aliquam possimus tenetur.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fbig%2Fktm%2Frc-200%2Fktm-rc-200.jpg%3Fv%3D27&w=3840&q=75" alt="Hero" />
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Nav;
