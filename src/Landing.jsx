import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import TrackVisibility from "react-on-screen";
// import Spline from "@splinetool/react-spline";

function Landing() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row land gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>
                    Be an Automotive Dev
                    </h2>
                    <h1>
                      <p>
                      Android Head UNIT and HMI
                        {/* Revolutionizing <span className="spin"></span> */}
                      </p>
                    </h1>
                  </div>
                )}
              </TrackVisibility>
              <div className="d-flex home-btn justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
  href="https://wa.me/919072502065"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp btn-whatsapp d-flex align-items-center"
  style={{
    marginLeft: "10px",
  }}
>
  <img
    src="assets/img/w.png"
    alt="WhatsApp"
    width="20"
    height="20"
  />
  <span style={{
      paddingLeft: "15px",
    }}>Let's Talk</span>
</a>

                {/* <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 baner-im">
              {/* <Spline
                className="drm"
                scene="https://prod.spline.design/6UzixtiOjUNL79eq/scene.splinecode"
              /> */}
              <img
                src="assets/img/hero.png"
                className="img-fluid hero-img moveArrow"
                alt=""
                data-aos="zoom-out"
              />
            </div>
          </div>
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-easel"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Expertise
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-bounding-box-circles"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Custom Solutions
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-broadcast"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Results-Driven
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-command"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Training
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
