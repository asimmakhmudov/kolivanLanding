import React from "react";
import "./navbar.scss";
import whiteLogo from "../../assets/whiteLogo.png";
import blackLogo from "../../assets/blackLogo.png";
import whiteLang from "../../assets/whiteLangLogo.png";
import blackLang from "../../assets/blackLangLogo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

  const selectStyle = {
    background: "transparent",
    transition: "all ease 400ms",
    color: navbarBg ? "black" : "white",
    border: navbarBg ? "1px solid var(--secondary)" : "1px solid var(--white)",
  };

  const { t, i18n } = useTranslation();
  const localLang = localStorage.getItem("language");

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("language", selectedLang);
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
        <div className="selectDiv">
          <select
            name=""
            id=""
            style={selectStyle}
            onChange={handleLanguageChange}
          >
            <option value="en" selected={localLang === "en"}>
              {t("navbar.english")}
            </option>
            <option value="az" selected={localLang === "az"}>
              {t("navbar.azerbaijani")}
            </option>
            <option value="ru" selected={localLang === "ru"}>
              {t("navbar.russian")}
            </option>
          </select>
          <img src={navbarBg ? blackLang : whiteLang} alt="" />
        </div>
      </div>
      <div className="navBTN">
        <label class="burger" for="burger">
          <input type="checkbox" id="burger" />
          <span style={navbarBg ? {background: "#111"} : {background: "#fff"}}></span>
          <span style={navbarBg ? {background: "#111"} : {background: "#fff"}}></span>
          <span style={navbarBg ? {background: "#111"} : {background: "#fff"}}></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
