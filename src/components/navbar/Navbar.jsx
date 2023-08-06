import React from "react";
import "./navbar.scss";
import whiteLogo from "../../assets/whiteLogo.png";
import blackLogo from "../../assets/blackLogo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("language", selectedLang); // Store language in localStorage
  };
  return (
    <nav className="nav" style={navbarStyle}>
      <div className="left">
        <a href="/">
          <img src={navbarBg ? blackLogo : whiteLogo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="/#services">{t("navbar.service")}</a>
          </li>
          <li>
            <a href="/#whyus">{t("navbar.why")}</a>
          </li>
          <li>
            <a href="/#team">{t("navbar.our")}</a>
          </li>
          <li>
            <a href="/#faqs">{t("navbar.faq")}</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <select name="" id="" onChange={handleLanguageChange}>
          <option value="az">{t("navbar.azerbaijani")}</option>
          <option value="en">{t("navbar.english")}</option>
          <option value="ru">{t("navbar.russian")}</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
