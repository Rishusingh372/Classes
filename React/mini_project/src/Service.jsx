import React from "react";

const Service = ({}) => {
  return (
    <>
      <section className="service-section">
        <div className="service-container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="card-icon">⚙️</div>
              <h3>High-Performance Servicing</h3>
              <p>
                Expert servicing for high-performance bikes like KTM and Yamaha
                R-series.
              </p>
            </div>
            <div className="service-card">
              <div className="card-icon">🔧</div>
              <h3>Genuine Parts</h3>
              <p>
                We use only genuine parts to ensure your bike runs smoothly and
                efficiently.
              </p>
            </div>
            <div className="service-card">
              <div className="card-icon">📊</div>
              <h3>Advanced Diagnostics</h3>
              <p>
                State-of-the-art diagnostic tools to identify and fix issues
                quickly.
              </p>
            </div>
            <div className="service-card">
              <div className="card-icon">🛠️</div>
              <h3>Custom Modifications</h3>
              <p>
                Tailor your bike to your style with our custom modification
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
