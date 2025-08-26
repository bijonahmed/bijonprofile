import React from "react";

const CardProfile = () => {
  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <img
            src="/assets/img/developer_bijon.jpg"
            alt="bijon ahmed"
            style={{ width: "100%", height: "250px" }} // Change as needed
          />
        </div>
        <div className="text">
          <h3 className="card-title">Md. Bijon Ahmed</h3>
          <p className="card-text">
            Full Stack Developer specializing in modern web technologies
            including React, Nuxt , Laravel, and API integration. Passionate
            about building scalable and high-performance applications.
          </p>
          <div className="common-button-groups">
            <a className="btn btn-call w-100" href="/assets/cv/download_bijon_cv.pdf">
              Download Resume
            </a>
            <button
              className="btn btn-copy mt-2 w-100"
              data-clipboard-text="mdbijon@gmail.com"
            >
              <svg
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Email
            </button>
          </div>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/bijon.ahmed.3/">
                  <i className="fab fa-facebook" />
                </a>
              </li>

              <li>
                <a href="https://github.com/bijonahmed">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bijonahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801915728982"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ color: "#25D366" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
