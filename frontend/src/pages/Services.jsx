// src/pages/Index.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import axios from "/config/axiosConfig";
import Navbar from "../components/GuestNavbar";
import "../assets/customcss.css";
import "../assets/FullStackServices.css";
import CardProfile from "../components/CardProfile";
import BackgroundShape from "../components/BackgroundShape";

const tags = [
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "Vue.js",
  "React.js",
  "Nuxt.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap 5",
  "Laravel",
  "Node.js",
  "Express.js",
  "Custom CMS Development",
  "SaaS Development",
  "E-commerce Solutions",
  "REST API",
  "JWT Authentication",
  "Admin Dashboard",
  "Responsive Design",
  "Web App Development",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Server Deployment",
  "VPS Hosting",
  "cPanel Integration",
  "Third-Party API",
  "Stripe",
  "PayPal",
  "Real-time Chat App",
  "Role-based Access",
  "SEO Optimization",
  "SSL Security",
  "Performance Optimization",
  "Single Page App",
  "Progressive Web App",
  "Bug Fixing",
  "Maintenance Support",
];

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services</title>
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
                      <div className="text">
                        <div className="fullstack-container">
                          <div className="header">
                            <center><p>Full Stack Web Development Services</p></center>
                            <span className="sub-tagline">
                              Custom solutions for modern digital businesses
                            </span>
                          </div>

                          <div className="tag-grid">
                            {tags.map((tag, index) => (
                              <div key={index} className="tag-item">
                                #{tag.replace(/\s+/g, "")}
                              </div>
                            ))}
                          </div>
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

export default Services;
