import React from "react";
import Typewriter from 'typewriter-effect';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/rehan-174993201"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"> </i>
              </a>
              <a
                href="https://github.com/rehan1608"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"> </i>
              </a>
              <a
                href="https://www.instagram.com/_this_is_rehan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"> </i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Rehan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Ethusiastic Dev 💻",
                      "Full Stack Dev 👨‍💻",
                      "MERN Stack Dev 😎",
                      "Python Dev 🧑‍💻",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Fond of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="MyResume.pdf" download="Rehan Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
