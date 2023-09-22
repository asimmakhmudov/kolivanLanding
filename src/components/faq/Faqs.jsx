import React from "react";
import { useTranslation } from "react-i18next";
import "./faq.scss";
import { Faq } from "./Faq";

export const Faqs = () => {
  const { t } = useTranslation();

  return (
    <div className="faqs" id="kolivan-tez-tez-verilən-suallar">
      <div className="faqHeader">
        <h3>{t("faqs.header")}</h3>
      </div>
      <div className="accordions">
        <Faq
          title={t("faqs.question1.title")}
          content={t("faqs.question1.content")}
        />
        <Faq
          title={t("faqs.question2.title")}
          content={t("faqs.question2.content")}
        />
        <Faq
          title={t("faqs.question3.title")}
          content={t("faqs.question3.content")}
        />
        <Faq
          title={t("faqs.question4.title")}
          content={t("faqs.question4.content")}
        />
      </div>
    </div>
  );
};
