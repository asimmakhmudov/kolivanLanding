import React, { useState } from "react";
import "./contact.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import contactImg from "../../assets/contactimg.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  // const formRef = useRef();
  const [phoneNum, setPhoneNum] = useState();
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState();
  // const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_whrx4gj",
        "template_zpa43lf",
        e.target,
        "uCRhV-dtMClq0v9dw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="contact">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Contact us</h2>
          <p>Contact us, we will get back to you soon.</p>
          <label htmlFor="">
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              // onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </label>
          <label htmlFor="">
            <p>Surname</p>
            <input
              type="text"
              id="surname"
              name="name"
              // onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter your surname"
              required
            />
          </label>
          <label htmlFor="phone">
            <p>Phone</p>
            <PhoneInput
              placeholder="Enter phone number"
              international
              defaultCountry="AZ"
              onChange={setPhoneNum}
              id="phone"
              name="phone"
              style={{
                maxWidth: "498px",
              }}
              required
            />
          </label>
          <label htmlFor="message">
            <p>Message</p>
            <textarea
              name="message"
              id="message"
              // onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message"
              required
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
