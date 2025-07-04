// src/pages/Index.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import axios from "/config/axiosConfig";
import Navbar from "../components/GuestNavbar";
import BackgroundShape from "../components/BackgroundShape";
import CardProfile from "../components/CardProfile";

import "../assets/customcss.css";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Helmet>
        <title>Bijon Ahmed | Full Stack Developer</title>
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
          <section className="home-area">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-4">
                  <CardProfile/>
                </div>
                <div className="col-xl-4">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body work-experiance-card">
                          <h3
                            className="card-title text-justify"
                            style={{
                              textAlign: "justify",
                              fontSize: "17px",
                              color: "#333",
                              lineHeight: "1.6",
                            }}
                          >
                            Work Experience
                          </h3>
                          <p
                            style={{
                              textAlign: "justify",
                              fontSize: "15px",
                              color: "#333",
                              lineHeight: "1.6",
                            }}
                            className="mt-3"
                          >
                           I have over 7 years of experience working as a Full Stack Developer across several IT companies including Swisstex Group, Wellfoodsylhet, RapidInfosys, Meritstec Ltd., and Delta Hospital. My responsibilities included designing and developing ERP solutions, POS systems, task management applications, and scalable eCommerce platforms. I have built database-driven applications using technologies such as React, Laravel, Node.js, and MySQL. Additionally, I have contributed to CMS platform development and implemented secure RESTful APIs for various enterprise solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card expertise-card">
                        <div className="card-body">
                          <h3 className="card-title">My Expert Area</h3>
                          <div className="expertise-main mt-24">
                            <div className="row g-3">
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: "10px",
                                }}
                              >
                                {[
                                  "Laravel",
                                  "React.js",
                                  "Nuxt.js",
                                  "Node.js",
                                  "MySQL",
                                  "GitHub",
                                  "CodeIgniter",
                                  "MVC",
                                  "REST APIs",
                                  "JWT",
                                  "JavaScript",
                                  "PHP",
                                  "Redux",
                                  "Bootstrap CSS",
                                ].map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      backgroundColor: "#e0f0ff",
                                      color: "#1a1a1a",
                                      padding: "6px 12px",
                                      borderRadius: "20px",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      border: "1px solid #c0dffa",
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card card-projects">
                    <div className="card-body">
                      <h3 className="card-title">
                        Recent Projects&nbsp;&nbsp;
                        <Link className="link-btn" to="portfolio">
                          All Projects
                          <svg
                            className="icon"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.16699 10H15.8337"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.833 15L15.833 10"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.833 5L15.833 10"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </h3>
                      <div className="projects-main mt-24">
                        <div className="row g-4 parent-container">
                          <div className="col-lg-12">
                            <div className="project-item">
                              <div className="image">
                                <img
                                  src="/assets/img/projects/isumax_img.png"
                                  alt="project-1"
                                  className="img-fluid w-100"
                                />
                                
                                <div className="info">
                                  <span className="category">
                                    Freelancer Market Place
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="project-item">
                              <div className="image">
                                <img
                                  src="/assets/img/projects/pdf_tools.png"
                                  alt="project-2"
                                  className="img-fluid w-100"
                                />
                                <div className="info">
                                  <span className="category">
                                    PDF Tools
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="project-item mt-4">
                              <div className="image">
                                <img
                                  src="/assets/img/projects/occn-trade.png"
                                  alt="project-2"
                                  className="img-fluid w-100"
                                />
                                <div className="info">
                                  <span className="category">
                                    Trading Platform
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-area mt-24">
                <div className="row g-4">
                  <div className="col-xl-8">
                    <div className="card services-card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Services I Offered &nbsp;
                          <Link className="link-btn" to="services">
                            {" "}
                            See All Services
                            <svg
                              className="icon"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.16699 10H15.8337"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.833 15L15.833 10"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.833 5L15.833 10"
                                stroke="#4770FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </h3>
                        <div className="services-main mt-24">
                          <div className="row g-4">
                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-code fa-2x text-primary"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  Frontend Development
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-database fa-2x text-success"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  Backend Development
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-plug fa-2x text-warning"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  API Integration
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-database fa-2x text-danger"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  Database Design
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-shopping-cart fa-2x text-info"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  eCommerce Development
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-cogs fa-2x text-dark"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  CMS Customization
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-tools fa-2x text-secondary"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  Site Maintenance
                                </h3>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                              <div className="services-item text-center">
                                <div className="icon mb-2">
                                  <i className="fas fa-cloud-upload-alt fa-2x text-primary"></i>
                                </div>
                                <h3 className="title serviceOffer">
                                  Cloud Deployment
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card lets-talk-together-card">
                      <div className="card-body">
                        <div className="slider-item">
                          <p>
                            💻 Full Stack Developer for hire — transforming
                            ideas into full-featured web applications. Skilled
                            in React, Laravel, Node.js, and more. Let’s
                            collaborate to build secure, responsive, and
                            high-performing digital solutions.
                          </p>
                        </div>

                        <h3 className="card-title">
                          Let's
                          <span className="d-block">Work Together</span>
                        </h3>
                        <Link className="link-btn" to="/contact">
                          {" "}
                          Let's Talk
                        </Link>
                      </div>
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

export default Index;
