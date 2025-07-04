// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
          <div className="container">
            <div className="text text-center">
              <p>
                © {new Date().getFullYear()} <strong>Md. Bijon Ahmed</strong> —
                Full Stack Developer | Crafted with ❤️ using React, Nuxtjs
                Laravel, and Node.js.
                <br />
              </p>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;
