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

const projects = [
  {
    title: "Employee Management Software",
    image: "/assets/img/projects/top_employee_management.png",
    link: "https://futuregenit.com/documents/hr/",
  },
  {
    title: "Dropshipping Admin Panel",
    image: "/assets/img/projects/dropshipping_admin_panel.png",
    link: "https://futuregenit.com/documents/hr/",
  },

  {
    title: "B2B Ecommerce Management System",
    image: "/assets/img/projects/b2b_Commerce.png",
    link: "https://futuregenit.com/documents/Ekroybd/",
  },
  {
    title: "POS Management",
    image: "/assets/img/projects/pos_management.png",
    link: "https://futuregenit.com/documents/POS_Documents/",
  },
  {
    title: "Transportation Management",
    image: "/assets/img/projects/transport_management.png",
    link: "https://futuregenit.com/documents/Transport_management_Documents/",
  },
  {
    title: "Crypto Trading Management",
    image: "/assets/img/projects/tradingcrypto.png",
    link: "https://crypto.futuregenit.com/",
  },
  {
    title: "OCCAN Trading and Mining Management",
    image: "/assets/img/projects/occn-trade.png",
    link: "https://crypto.futuregenit.com/",
  },
  {
    title: "Courier Management",
    image: "/assets/img/projects/courier_management.png",
    link: "https://futuregenit.com/service-details/efficient-courier-delivery-management-software-solutions",
  },
  {
    title: "Simple Inventory Management",
    image: "/assets/img/projects/account_management.png",
    link: "https://account.onlinesoft.co.uk/login",
  },

  {
    title: "Learning  Management",
    image: "/assets/img/projects/learning_w3.png",
    link: "https://w3programmer.net/",
  },
  {
    title: "PDF Convert Tools",
    image: "/assets/img/projects/pdf_tools.png",
    link: "https://twopdf.com/",
  },

  {
    title: "Freelancer Marketplace",
    image: "/assets/img/projects/isumax_img.png",
    link: "https://isumax.com/",
  },

  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
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
                    <div className="card-body portfolio-card">
                      <div className="top-info">
                        <div className="text">
                          <h1 className="main-title">
                            Check Out My Latest <span>Projects</span>
                          </h1>
                        </div>
                      </div>
                      <div className="portfolio-area">
                        <div className="row g-4 parent-container">
                          {projects.map((project, index) => (
                            <div className="col-lg-12" key={index}>
                              <div className="portfolio-item">
                                <div className="image">
                                  <img
                                    src={project.image}
                                    alt={`project-${index + 1}`}
                                    className="img-fluid w-100"
                                  />
                                </div>
                                <div className="text">
                                  <div className="info">
                                    <a href="#" className="title">
                                      {project.title}
                                    </a>
                                  </div>
                                  <div className="visite-btn">
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Visit Site
                                      <svg
                                        className="arrow-up"
                                        width={14}
                                        height={15}
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.91634 4.5835L4.08301 10.4168"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.66699 4.5835H9.91699V9.8335"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
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

export default Portfolio;
