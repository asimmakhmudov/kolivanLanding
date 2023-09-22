import React, { useState } from "react";
import "./about.scss";
import aboutImg from "../../assets/truck1.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const { t } = useTranslation();

  const buttonStyle = {
    background: readMore ? "var(--white)" : "var(--primary)",
    color: readMore ? "var(--secondary)" : "var(--white)",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    padding: "15px",
    margin: "15px 10px",
    width: "200px",
    borderRadius: "6px",
    cursor: "pointer",
    outline: "none",
    border: readMore ? "1px solid red" : "none",
    transition: "all ease 400ms",
  };

  const paragraphStyle = {
    height: readMore ? "120px" : "0px",
    transition: "all ease 400ms",
  };

  const readMoreHandling = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about" id="kolivan-haqqında">
      <div className="cont">
        <div>
          <h2>{t("about.header")}</h2>
          <p>{t("about.description1")}</p>
          <p style={paragraphStyle}>{t("about.description2")}</p>
          <button onClick={readMoreHandling} style={buttonStyle}>
            {readMore ? t("about.showLess") : t("about.readMore")}
          </button>
        </div>
      </div>
      <div className="cont contTruck">
        <img src={aboutImg} alt="aboutTruck" />
      </div>
    </div>
  );
};

export default About;
