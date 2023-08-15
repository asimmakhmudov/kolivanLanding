import React from "react";
import { useTranslation } from "react-i18next";
import "./info.scss";
import truckImg from "../../assets/truck2.png";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="info">
      <div className="infoBox">
        <div className="infoContent">
          <h3>{t("info.title")}</h3>
          <p>{t("info.description")}</p>
          <a href="tel:0515287097">
            <button>
              {t("info.contactButton")} <span>&#x3e;</span>
            </button>
          </a>
        </div>
        <img src={truckImg} alt="" />
      </div>
    </div>
  );
};

export default Info;
