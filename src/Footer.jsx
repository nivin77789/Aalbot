import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Footer() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Aalbot</span>
              </a>
              <p>Engineering Intelligence, Empowering Innovation.</p>
              <div className="social-links d-flex mt-4">
                
                <a href="https://www.instagram.com/aalbot.ai/" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/aalbot/" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./">About us</a>
                </li>
                <li>
                  <a href="./">Services</a>
                </li>

                <li>
                  <a href="./">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="./">Android Development Training</a>
                </li>
                <li>
                  <a href="./">Linux Programming Mastery</a>
                </li>
                <li>
                  <a href="./">AI-Powered Business ERP Solutions</a>
                </li>
               
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                <strong>Location:</strong> Kollam
              </p>
              <p>
                <strong>Phone:</strong> +91 907 250 2065
              </p>
              <p>
                <strong>Email:</strong> contact@aalbot.in
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Aalbot</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
