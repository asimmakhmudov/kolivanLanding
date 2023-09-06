import React, { useState } from "react";
import "./contact.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import contactImg from "../../assets/contactimg.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [send, setSend] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whrx4gj",
        "template_zpa43lf",
        formRef.current,
        "uCRhV-dtMClq0v9dw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

//   console.log(send);

  return (
    <div className="contact">
      <div className="formBox">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h2>Contact us</h2>
          <p>Contact us, we will get back to you soon.</p>
          <label htmlFor="">
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="">
            <p>Surname</p>
            <input
              type="text"
              id="surname"
              name="name"
              placeholder="Enter your surname"
            />
          </label>
          <label htmlFor="phone">
            <p>Phone</p>
            <PhoneInput
              placeholder="Enter phone number"
              international
              defaultCountry="AZ"
              id="phone"
              name="phone"
              style={{
                width: "498px",
              }}
            />
          </label>
          <label htmlFor="message">
            <p>Message</p>
            <textarea
              name=""
              id="message"
              placeholder="Enter message"
            ></textarea>
          </label>
          <button className="sendButton" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="animationContact">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
