// src/pages/Index.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import axios from "/config/axiosConfig";
import Navbar from "../components/GuestNavbar";
import BackgroundShape from "../components/BackgroundShape";
import "../assets/customcss.css";
import "../assets/certificate.css";
import CardProfile from "../components/CardProfile";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="I’m Bijon Ahmed, a full stack developer passionate about empowering IT professionals through w3programmers.net. Explore expert-curated resources, coding courses, interview preparation, and career tools across programming, web development, cybersecurity, and more. Advance your tech career with confidence!"
        />
        <meta
          name="keywords"
          content="Bijon Ahmed, full stack developer, w3programmers, IT education, programming tutorials, web development, software engineering, coding resources, online tech courses, interview preparation, MCQs, practice tests, JavaScript, Python, HTML, CSS, Node.js, React.js, PHP, Laravel, SQL, database design, mobile app development, DevOps, cloud computing, AWS, Google Cloud, ethical hacking, cybersecurity, software testing, system design, data structures, coding challenges, tech career, resume tips, freelance programming, remote IT jobs, tech community, Git, GitHub, Agile, Scrum, tech portfolio, tech mentoring, career guidance, IT certifications, online learning platform"
        />
        <link rel="canonical" href="https://bijonprofile.com/" />
      </Helmet>

      {/* Start */}

      <div>
        {/* header part start */}
        <Navbar />

        {/* header part end */}
        {/* main area part start */}

        <main>
          <section className="content-box-area mt-4">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-4">
                  <CardProfile />
                </div>
                <div className="col-xl-8">
                  <div className="card content-box-card">
                    <div className="card-body">
                      <div className="top-info">
                        <div className="text">
                          <h1 className="main-title">
                            Hi, I’m <span>Md. Bijon Ahmed</span> 👋
                          </h1>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            I’m a passionate{" "}
                            <strong>Full Stack Developer</strong> with extensive
                            hands-on experience in designing, developing, and
                            deploying scalable web applications and
                            enterprise-level solutions. From crafting modern
                            frontend interfaces using <strong>React.js</strong>{" "}
                            and <strong>Vue.js</strong> to building robust
                            backend systems with <strong>Laravel</strong>,{" "}
                            <strong>Node.js</strong>, and <strong>MySQL</strong>
                            , I specialize in delivering complete,
                            performance-driven digital products that generate
                            real business value.
                            <br />
                            <br />
                            My professional journey includes collaborating with
                            clients across multiple industries and countries,
                            contributing to the development of ERP platforms,
                            eCommerce solutions, secure API integrations, and
                            cloud-based applications. I combine technical
                            expertise with clean coding practices and a
                            user-first mindset to transform ideas into reliable,
                            production-ready systems.
                          </p>
                        </div>
                        <div className="available-btn">
                          <span>
                            <i className="fas fa-circle" /> Available For Hire
                          </span>
                        </div>
                      </div>

                      <div className="client-feedback">
                        <h2 className="main-common-title">
                          Trusted By Clients Review
                        </h2>
                        <div className="row client-feedback-slider">
                          {/* Dennisasmith */}
                          <div className="col-lg-6">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "It was great working with Mdbijonahmed. He
                                  communicated well with me and finished the job
                                  on time. The quality of work was great and I
                                  will be calling on him again."
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Dennisasmith</span> – United States
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Sammysterling */}
                          <div className="col-lg-6">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "One of the best I ever worked with on Fiverr.
                                  Will order again."
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Sammysterling</span> – United Kingdom
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Davidlissparis */}
                          <div className="col-lg-6 mt-2">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "THE BEST! Perfect customer service! If you go
                                  with him, you'll be a happy customer!"
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Davidlissparis</span> – United Kingdom
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Sulhamqasem */}
                          <div className="col-lg-6 mt-2">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "It was quick and professional. Thank you!"
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Sulhamqasem</span> – Germany
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Kyambaddesimon */}
                          <div className="col-lg-6 mt-2">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "Ahmed communicated clearly and delivered
                                  earlier than expected. He was also very
                                  patient with me."
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Kyambaddesimon</span> – Uganda
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Atlas316 */}
                          <div className="col-lg-6 mt-">
                            <div className="feedback-item">
                              <div className="feedback-top-info">
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <div className="website">
                                  <a
                                    href="https://www.fiverr.com/mdbijonahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Fiverr.com
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                    >
                                      <path d="M9.91634 4.5835L4.08301 10.4168" />
                                      <path d="M4.66699 4.5835H9.91699V9.8335" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="details">
                                <p>
                                  "Excellent service, fast responses, and
                                  product delivered as expected. I'm very happy
                                  with the services. Communication was
                                  exceptional."
                                </p>
                              </div>
                              <div className="designation">
                                <p>
                                  <span>Atlas316</span> – Tunisia
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <section className="certifications">
                        <h2 className="section-title">
                          🎓 Certifications &amp; Professional Development
                        </h2>
                        <div className="cert-grid">
                          <div className="cert-card card-purple">
                            <h4>Developing International Software</h4>
                            <p>
                              <span style={{ color: "yellow" }}>
                                Verified Certificate from <strong>edX</strong>
                              </span>{" "}
                              –
                              <a
                                href="https://courses.edx.org/certificates/bd415bf1d0c240019ab6381f210de0cc"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-blue">
                            <h4>UML Class Diagrams for Software Engineering</h4>
                            <p>
                              <span style={{ color: "yellow" }}>
                                Verified Certificate from <strong>edX</strong>
                              </span>
                              –
                              <a
                                href="https://courses.edx.org/certificates/53913e028d1f43418b05aa763f4daedf"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-orange">
                            <h4>JavaScript Algorithms and Data Structures</h4>
                            <p>
                              <span style={{ color: "yellow" }}>
                                Developer Certificate from{" "}
                                <strong>freeCodeCamp</strong>
                              </span>{" "}
                              –
                              <br />
                              <a
                                href="https://www.freecodecamp.org/certification/fccc03e4dfc-241c-41f8-bb1c-53773ce67f58/javascript-algorithms-and-data-structures"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-green">
                            <h4>Responsive Web Design</h4>

                            <p>
                              <span style={{ color: "yellow" }}>
                                Developer Certificate from{" "}
                                <strong>freeCodeCamp</strong>-
                              </span>

                              <br />

                              <a
                                href="https://www.freecodecamp.org/certification/fccc03e4dfc-241c-41f8-bb1c-53773ce67f58/responsive-web-design"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-pink">
                            <h4>PHP Programming</h4>
                            <p>
                              <span style={{ color: "yellow" }}>
                                Course Completion Certificate from &nbsp;
                                <strong>SoloLearn</strong>-
                              </span>

                              <br />

                              <a
                                href="https://www.sololearn.com/Certificate/1059-6321642/pdf/"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-yellow">
                            <h4>JavaScript Essentials</h4>
                            <p>
                               <span style={{ color: "green" }}>
                                Course Completion Certificate from &nbsp;
                                <strong>SoloLearn</strong>-
                              </span>
                              
                              <a
                                href="https://www.sololearn.com/Certificate/1024-6321642/pdf/"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                          <div className="cert-card card-cyan">
                            <h4>SQL Fundamentals</h4>
                            <p>
                               <span style={{ color: "yellow" }}>
                                Course Completion Certificate from &nbsp;
                                <strong>SoloLearn</strong>-
                              </span>
                              
                              <a
                                href="https://www.sololearn.com/Certificate/1060-6321642/pdf/"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* background shape area start */}
          <BackgroundShape/>
          {/* background shape area end */}
        </main>

        {/* main area part end */}
        {/* footer part start */}
        <Footer />

        {/* footer part end */}
      </div>

      {/* END */}
    </div>
  );
};

export default About;
