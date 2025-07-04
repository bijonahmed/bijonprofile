import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import GuestNavbar from "../components/GuestNavbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "/config/axiosConfig";

const SiteMap = () => {
  return (
    <>
      <Helmet>
        <title>SiteMap</title>
        <meta name="description" content="Bijon profile" />
        <meta name="keywords" content="Bijon profile" />
      </Helmet>
      <GuestNavbar />
      <div className="page_wrapper">
        {/* Back To Top - Start */}
        <div className="backtotop">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up" />
            <i className="far fa-arrow-up" />
          </a>
        </div>

        <main className="page_content">
          <section className="page_banner decoration_wrap">
            <div className="container">
              <br /> <br />
              <br />
              <h1 className="page_heading">Site Map</h1>
            </div>
          </section>

          <section className="container category_section">
            <div className="category2_items_wrapper row justify-content-center">
              <div className="col-md-12">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Works</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <br />
        <Footer />
      </div>
    </>
  );
};

export default SiteMap;
