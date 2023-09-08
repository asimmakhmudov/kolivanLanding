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
                <a href="mailto:kolivancompany@gmail.com">info@kolivan.az</a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Bayil+Plaza/@40.3488813,49.8359303,15z/data=!4m6!3m5!1s0x40307d96e8077821:0xbe3c1e56ae574935!8m2!3d40.3488813!4d49.8359303!16s%2Fg%2F11ghfq2gwz?entry=ttu">
                  Bakı, Azərbaycan, Səbail rayonu, Neftçi Qurban küçəsi 29,
                  Bayıl Plaza
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kolivan.az/">
                  <img
                    src={instagram}
                    alt="https://www.instagram.com/kolivan.az/"
                  />
                </a>
                <a href="https://www.linkedin.com/company/kolivan/">
                  <img
                    src={linkedin}
                    alt="https://www.linkedin.com/company/kolivan/"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
