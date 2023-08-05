import React from "react";
import "./footer.scss";
import whiteLogo from "../../assets/whiteLogo.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="fBox">
        <div className="fSection">
          <img src={whiteLogo} alt="logo" />
          <p>Your Trusted Partner in Transportation Services</p>
        </div>
        <div className="fSection">
          <h4>Our services</h4>
          <ul>
            <li>Cargo transportation</li>
            <li>Passenger transportation</li>
            <li>Sign in as a driver</li>
          </ul>
        </div>
        <div className="fSection">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:0515287097">+994-051-528-70-97</a>
            </li>
            <li>
              <a href="mailto:kolivancompany@gmail.com">
                kolivancompany@gmail.com
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagram} alt="" />
              </a>
              <a href="/">
                <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
