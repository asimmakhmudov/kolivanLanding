import React from "react";
import "./navbar.scss"
import whiteLogo from "../../assets/whiteLogo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left">
        <img src={whiteLogo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>About Us</li>
          <li>Our Service</li>
          <li>Why Choose Us</li>
          <li>Our Team</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="right">
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
