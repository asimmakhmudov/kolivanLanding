import React from "react";
import "./navbar.scss";
import whiteLogo from "../../assets/whiteLogo.png";
import blackLogo from "../../assets/blackLogo.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: navbarBg ? "white" : "transparent",
    transition: "all ease 400ms",
    color: navbarBg ? "black" : "white",
    boxShadow: navbarBg && "0px 0px 4px 0px rgba(76, 76, 76, 0.25)",
  };

  return (
    <nav className="nav" style={navbarStyle}>
      <div className="left">
        <img src={navbarBg ? blackLogo : whiteLogo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Our Service</a>
          </li>
          <li>
            <a href="/">Why Choose Us</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <select name="" id="">
          <option value="">AZ</option>
          <option value="">EN</option>
          <option value="">RU</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
