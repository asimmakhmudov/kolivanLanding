import React from "react";
import "./navbar.scss";
import whiteLogo from "../../assets/whiteLogo.png";
// import blackLogo from "../../assets/blackLogo.png";
import whiteLang from "../../assets/whiteLangLogo.png";
import blackLang from "../../assets/blackLangLogo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

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

  const toggleHandle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="nav" style={navbarStyle}>
      <div className="left">
        <a href="/">
          {toggleMenu ? (
            <img src="https://res.cloudinary.com/dumlkkkwe/image/upload/v1692735203/landingPhoto/bacwhsdjjplx6cu9dob0.png" alt="logo" />
          ) : (
            <img src={navbarBg ? "https://res.cloudinary.com/dumlkkkwe/image/upload/v1692735203/landingPhoto/bacwhsdjjplx6cu9dob0.png" : whiteLogo} alt="logo" />
          )}
        </a>
      </div>
      <div className={toggleMenu ? "menu active" : "menu"}>
        <ul>
          <li>
            <a href="/#kolivan-haqqında" onClick={toggleHandle}>{t("navbar.about")}</a>
          </li>
          <li>
            <a href="/#yük-və-sərnişin-daşıma-xidmətləri" onClick={toggleHandle}>{t("navbar.service")}</a>
          </li>
          <li>
            <a href="/#niyə-kolivan" onClick={toggleHandle}>{t("navbar.why")}</a>
          </li>
          {/* <li>
            <a href="/#kolivan-necə-işləyir" onClick={toggleHandle}>{t("navbar.how")}</a>
          </li> */}
          <li>
            <a href="/#kolivan-komandası" onClick={toggleHandle}>{t("navbar.our")}</a>
          </li>
          <li>
            <a href="/#kolivan-tez-tez-verilən-suallar" onClick={toggleHandle}>{t("navbar.faq")}</a>
          </li>
          <li>
            <a href="/#kolivan-əlaqə" onClick={toggleHandle}>{t("navbar.contact")}</a>
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
            <option value="az" selected={localLang === "" || localLang === "az"}>
              {t("navbar.azerbaijani")}
            </option>
            <option value="en" selected={localLang === "en"}>
              {t("navbar.english")}
            </option>
          </select>
          <img src={navbarBg ? blackLang : whiteLang} alt="" />
        </div>
      </div>
      <div className="navBTN" onClick={toggleHandle}>
        {toggleMenu ? (
          <span className="spanX">&#x2715;</span>
        ) : (
          <label class="burger" for="burger">
            {/* <input type="checkbox" id="burger" /> */}
            <span
              style={navbarBg ? { background: "#111" } : { background: "#fff" }}
            ></span>
            <span
              style={navbarBg ? { background: "#111" } : { background: "#fff" }}
            ></span>
            <span
              style={navbarBg ? { background: "#111" } : { background: "#fff" }}
            ></span>
          </label>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
