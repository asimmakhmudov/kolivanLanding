import React from "react";
import "./howitwork.scss";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import How from "./How"; // "How" komponenti doğru təyin edildiyindən əmin olun
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const Step1 = () => {
    return (
      <How
        hImg={step1}
        hHeader={t("how.step1.header")}
        hParagraph={t("how.step1.paragraph")}
        barStyle={{ alignItems: "start" }}
      />
    );
  };

  const Step2 = () => {
    return (
      <How
        hImg={step2}
        hHeader={t("how.step2.header")}
        hParagraph={t("how.step2.paragraph")}
        barStyle={{ alignItems: "center" }}
      />
    );
  };

  const Step3 = () => {
    return (
      <How
        hImg={step3}
        hHeader={t("how.step3.header")}
        hParagraph={t("how.step3.paragraph")}
        barStyle={{ alignItems: "flexEnd" }}
      />
    );
  };

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const currentStep = steps[currentStepIndex];

  return (
    <div className="howItWork" id="howItWork">
      <h2>{t("how.howItWorks.title")}</h2>
      <div className="hBox">{currentStep}</div>
    </div>
  );
};

export default HowItWorks;
