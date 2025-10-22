import React from "react";
import "./style.css";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            At <strong>RacerCare</strong>, we are passionate about speed,
            safety, and precision. With years of experience in servicing
            high-performance bikes like KTM, Yamaha R-series, and more, our
            expert technicians ensure your bike gets the care it deserves. We
            combine advanced tools, genuine parts, and a love for racing culture
            to deliver top-tier service.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZSUyMHJlcGFpcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Bike Repair"
          />
        </div>
      </section>
    </>
  );
}

export default About;
