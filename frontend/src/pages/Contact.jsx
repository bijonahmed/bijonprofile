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
import CardProfile from "../components/CardProfile";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
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
                    <div className="card-body card-body pt-0 px-4 pb-4">
                      <div className="top_info">
                        <div className="text">
                          <section className="container my-5">
                            <h1 className="text-center ">Contact Me</h1>

                            <div className="row justify-content-center">
                              {/* WhatsApp Contact Card 1 */}
                              <div className="col-md-12 mb-4">
                                <div className="card shadow rounded-3 text-center p-4">
                                  <i className="fab fa-whatsapp fa-2x text-success mb-3"></i>
                                  <h5 className="mb-2">WhatsApp (Primary)</h5>
                                  <p className="mb-2 text-center">+8801915728982</p>
                                  <a
                                    href="https://wa.me/8801915728982"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success"
                                  >
                                    <i className="fab fa-whatsapp"></i> Chat on
                                    WhatsApp
                                  </a>
                                </div>
                              </div>

                              {/* WhatsApp Contact Card 2 */}
                              <div className="col-md-12 mb-4">
                                <div className="card shadow rounded-3 text-center p-4">
                                  <i className="fab fa-whatsapp fa-2x text-success mb-3"></i>
                                  <h5 className="mb-2">WhatsApp (Support)</h5>
                                  <p className="mb-2 text-center">+8801301047166</p>
                                  <a
                                    href="https://wa.me/8801301047166"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success"
                                  >
                                    <i className="fab fa-whatsapp"></i> Chat on
                                    WhatsApp
                                  </a>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                       
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

export default Contact;
