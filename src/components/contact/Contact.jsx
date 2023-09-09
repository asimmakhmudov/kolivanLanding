import React, { useRef, useState } from "react";
import "./contact.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import contactImg from "../../assets/contactimg.png";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [phoneNum, setPhoneNum] = useState();
  const [sended, setSended] = useState(false);
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    token &&
      emailjs
        .sendForm(
          "service_whrx4gj",
          "template_zpa43lf",
          e.target,
          "uCRhV-dtMClq0v9dw"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSended(true);
            swal(
              `${t("contact.succesHeader")}`,
              `${t("contact.succesDescription")}`,
              "success"
            );
          },
          (error) => {
            swal(
              `${t("contact.errorHeader")}`,
              `${t("contact.errorDescription")}`,
              "error"
            );
            console.log(error.text);
          }
        );
  };

  const { t, i18n } = useTranslation();

  return (
    <div className="contact" id="contact">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>{t("contact.header")}</h2>
          <p>{t("contact.description")}</p>
          <label htmlFor="">
            <p>{t("contact.name")}</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </label>
          <label htmlFor="">
            <p>{t("contact.surname")}</p>
            <input
              type="text"
              id="surname"
              name="name"
              placeholder={t("contact.surnamePlaceholder")}
              required
            />
          </label>
          <label htmlFor="phone">
            <p>{t("contact.phone")}</p>
            <PhoneInput
              international
              defaultCountry="AZ"
              onChange={setPhoneNum}
              id="phone"
              name="phone"
              style={{
                maxWidth: "498px",
              }}
              required
            />
          </label>
          <label htmlFor="message">
            <p>{t("contact.message")}</p>
            <textarea
              name="message"
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              required
            ></textarea>
          </label>
          <label>
            <ReCAPTCHA
              sitekey="6Ld1zhAoAAAAACQQAt5nUDcrSj-AAp5ZsDlMaoQP"
              size="invisible"
              ref={recaptchaRef}
            />
          </label>
          <button className="sendButton" type="submit">
            {t("contact.send")}
          </button>
        </form>
      </div>
      <div className="animationContact">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
