import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Service() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
    <section id="services" className="services sections-bg">
      <div className="container " data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            At Aalbot, we provide top-tier training in Android and Linux programming, along with AI-powered solutions for Business ERP. Our goal is to equip businesses and individuals with the skills and tools needed to thrive in the digital era.
          </p>
        </div>

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 ">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Android Development Training</h3>
              <p>
                Comprehensive training in Android app development, covering fundamentals, advanced techniques, and real-world project implementation.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 ">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-terminal"></i>
              </div>
              <h3>Linux Programming Mastery</h3>
              <p>
                Hands-on Linux programming training, including shell scripting, system administration, and kernel development.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-gear-wide-connected"></i>
              </div>
              <h3>AI-Powered Business ERP Solutions</h3>
              <p>
                Custom AI-driven ERP solutions to automate workflows, enhance decision-making, and optimize business operations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>

  );
}


export default Service;
