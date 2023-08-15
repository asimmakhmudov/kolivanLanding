import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.scss";
import whiteLogo from "../../assets/whiteLogo.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="fBox">
        <div className="fSection">
          <img src={whiteLogo} alt="logo" />
          <p>{t("footer.trustedPartner")}</p>
        </div>
        <div className="fContent">
          <div className="fSection">
            <h4>{t("footer.ourServices")}</h4>
            <ul>
              <li>{t("footer.cargoTransportation")}</li>
              <li>{t("footer.passengerTransportation")}</li>
              <li>{t("footer.signInAsDriver")}</li>
            </ul>
          </div>
          <div className="fSection">
            <h4>{t("footer.contact")}</h4>
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
                  <img src={instagram} alt="https://www.instagram.com/kolivan.az/" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="https://www.linkedin.com/company/kolivan/" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
