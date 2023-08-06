import React from "react";
import { useTranslation } from "react-i18next";
import Why from "./Why";
import "./why.scss";
import wImgOne from "../../assets/clickUnscreen.gif";
import wImgTwo from "../../assets/ideaUnscreen.gif";
import wImgThree from "../../assets/ratingUnscreen.gif";
import wImgFour from "../../assets/happyUnscreen.gif";

const Whyus = () => {
  const { t } = useTranslation();

  return (
    <div className="whyus" id="whyus">
      <h2>{t("whyus.header")}</h2>
      <p>{t("whyus.description")}</p>
      <div className="whyusBox">
        <Why
          wImg={wImgOne}
          wColor="#FBF1FF"
          wHeader={t("whyus.feature1.header")}
          wParagraph={t("whyus.feature1.description")}
        />
        <Why
          wImg={wImgTwo}
          wColor="#FFF6EF"
          wHeader={t("whyus.feature2.header")}
          wParagraph={t("whyus.feature2.description")}
        />
        <Why
          wImg={wImgThree}
          wColor="#DEFFEF"
          wHeader={t("whyus.feature3.header")}
          wParagraph={t("whyus.feature3.description")}
        />
        <Why
          wImg={wImgFour}
          wColor="#F2F8FF"
          wHeader={t("whyus.feature4.header")}
          wParagraph={t("whyus.feature4.description")}
        />
      </div>
    </div>
  );
};

export default Whyus;
