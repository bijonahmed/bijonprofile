import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/MobileNavbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", to: "/", icon: "fas fa-home" },
    { id: "about", label: "About", to: "/about", icon: "fas fa-info-circle" },
    { id: "services", label: "Services", to: "/services", icon: "fas fa-cogs" },
    { id: "works", label: "Works", to: "/portfolio", icon: "fas fa-briefcase" },
    {
      id: "contact",
      label: "Contact",
      to: "/contact",
      icon: "fas fa-envelope",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = menuItems.find(
      (item) => item.to === currentPath || item.href === currentPath
    );
    if (activeItem) {
      setActiveMenu(activeItem.id);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="header-area">
        <nav className="navbar mt-n28-desktop">
          <div className="container d-flex justify-content-between align-items-center custom-navbar-style">
            <div className="logo">
              <Link className="navbar-brand me-0" to="/">
                <span className="primary">Bijon Ahmed</span>
              </Link>
            </div>
            {/* Desktop menu */}
            <div className="navbar-main d-flex flex-grow-1">
              <div className="logo inner-logo d-block d-xl-none">
                <Link className="navbar-brand me-0" to="/">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                      className="logo-icon"
                    />
                  </svg>
                  <span>
                    Md.&nbsp;<span className="primary">Bijon Ahmed</span>
                  </span>
                </Link>
              </div>

              <ul className="navbar-info mx-auto">
                {menuItems.map(({ id, label, to, href, icon }) => (
                  <li key={id} className="nav-item">
                    {to ? (
                      <Link
                        to={to}
                        className={`nav-link ${
                          activeMenu === id ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveMenu((prev) => (prev === id ? null : id))
                        }
                      >
                        <i className={`${icon} me-2`}></i>
                        {label}
                      </Link>
                    ) : (
                      <Link
                        to={href}
                        className={`nav-link ${
                          activeMenu === id ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveMenu((prev) => (prev === id ? null : id))
                        }
                      >
                        <i className={`${icon} me-2`}></i>
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="header-right-info d-flex align-items-center">
                <Link to="/contact" className="lets-talk-btn">
                  Let's Talk
                  <svg
                    className="icon"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 11.6665V6.6665H12.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="mobile-menu-control-bar d-block d-xl-none">
              <button
                className="btn btn-outline-dark"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <i className="fas fa-bars" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay d-xl-none ${
            isMobileMenuOpen ? "show" : ""
          }`}
        >
          <div className="mobile-menu-content p-4 bg-white shadow">
            <button
              className="btn-close float-end"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <ul className="nav flex-column mt-4">
              {menuItems.map(({ id, label, to }) => (
                <li key={id} className="nav-item">
                  <Link
                    to={to}
                    className="nav-link"
                    onClick={() => {
                      setActiveMenu(id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
