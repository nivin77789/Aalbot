import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
     <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Welcome to the School of Android & Linux Programming, where Aalbot provides top-notch training and professional services. Our mission is to equip individuals and businesses with the skills and tools needed to excel in the ever-evolving world of technology.
            </p>
          </div>
          
          <div className="row about-div abt gy-4" data-aos="fade-right">
            <div className="col-lg-6 abt-img ab-img1">
              <div class="pyramid-loader">
                <div class="wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content">
                    <p className="blik">
                      At Aalbot, we specialize in training individuals in Android and Linux programming while also offering AI-powered solutions for business ERP systems. Our programs are designed to empower learners with practical knowledge and hands-on experience to build robust, scalable applications.
                      <span class="terminal_cursor"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="row about-div2 abt gy-4" data-aos="fade-left">
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content">
                    <p>
                      Our expertise extends beyond education, as we also provide AI-driven solutions for Business ERP, enabling companies to automate operations, enhance decision-making, and drive efficiency. From predictive analytics to intelligent automation, we help businesses stay ahead with cutting-edge AI technology.
                      <span class="terminal_cursor"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 abt-img ab-img2">
              <div class="cube-loader">
                <div class="cube-top"></div>
                <div class="cube-wrapper">
                  <span style={{ "--i": 0 }} class="cube-span"></span>
                  <span style={{ "--i": 1 }} class="cube-span"></span>
                  <span style={{ "--i": 2 }} class="cube-span"></span>
                  <span style={{ "--i": 3 }} class="cube-span"></span>
                  <div class="cube-container">
                    <div class="cube">
                      <div class="face front"></div>
                      <div class="face back"></div>
                      <div class="face right"></div>
                      <div class="face left"></div>
                      <div class="face top"></div>
                      <div class="face bottom"></div>
                    </div>
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

export default About;
