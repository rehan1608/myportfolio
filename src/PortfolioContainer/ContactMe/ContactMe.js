import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  /* eslint-disable no-unused-vars */
  const _fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      // Validation checks
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        toast.error("All fields are required.");
        return;
      }

      if (!validateEmail(email)) {
        toast.error("Please enter a valid email (ending with @gmail.com).");
        return;
      }

      let data = {
        name,
        email,
        message,
      };
      setBool(true);

      const res = await axios.post("/.netlify/functions/contactForm", data);
      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      } else {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error processing the form submission.");
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Get In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typewriter
              options={{
                strings: ["Get In Touch 🤝"],
                autoStart: true,
                loop: true,
                delay: 500,
              }}
            />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="No Internet" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="No internet" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
