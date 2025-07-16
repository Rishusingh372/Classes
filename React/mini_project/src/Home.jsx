import React from 'react'
import Mycomp from './Mycomp'


function Home(props) {
  return (
    <>
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
       
          <div>
            <h1>{props.img}</h1>
            <img src={props.img[0]} alt="" />
          </div>
        
      </section>
      <Mycomp/>
      </>
  )
}

export default Home