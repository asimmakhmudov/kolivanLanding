import React from "react";
import "./faq.scss";
import { Faq } from "./Faq";

export const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqHeader">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="accordions">
        <Faq
          title="What is Kolivan?"
          content="Kolivan offers a simplified and efficient process for finding cargo and passenger transportation service is a revolutionary platform that connects car owners with customers."
        />
        <Faq
          title="Is Kolivan available for both cargo and passenger transportation?"
          content="Yes, Kolivan meets the needs of both cargo and passenger transportation, offering an optimal solution for various transportation requirements."
        />
        <Faq
          title="What are the benefits of using Kolivan?"
          content="By using Kolivan, customers can easily find transportation services without the need for multiple phone calls and negotiations. Also, car owners can maximize their earning potential by tapping into a large customer base."
        />
        <Faq
          title="How does Kolivan work?"
          content="Kolivan uses advanced AI models to analyze various factors such as location, cargo/passenger type and available vehicles. It offers the most suitable transport solutions to customer requirements."
        />
      </div>
    </div>
  );
};
