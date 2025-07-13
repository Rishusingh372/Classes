import React from 'react'

const Contact = () => {
  return (
    <>
<section className="contact-section">
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p className="contact-subtitle">Have questions or need assistance? Reach out to us!</p>
    
    <div className="contact-content">
      <div className="contact-image">
        <img 
          src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/145655/x440-right-side-view-15.jpeg?isig=0&q=80&wm=3" 
          alt="Motorcycle service center" 
        />
      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your name" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Your email" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="Your message here..." 
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">
          Send Message
          <span className="button-icon">→</span>
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact
