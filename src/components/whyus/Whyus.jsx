import React from "react";
import Why from "./Why";
import "./why.scss";
import wImgOne from "../../assets/clickUnscreen.gif";
import wImgTwo from "../../assets/ideaUnscreen.gif";
import wImgThree from "../../assets/ratingUnscreen.gif";
import wImgFour from "../../assets/happyUnscreen.gif";

const Whyus = () => {
  return (
    <div className="whyus">
      <h2>Why Choose us</h2>
      <p>
        You can choose us based on the following features. We are always at your
        service. You are in the right place for reliable and quality service.
      </p>
      <div className="whyusBox">
        <Why
          wImg={wImgOne}
          wColor="#FBF1FF"
          wHeader="One Click Hailing"
          wParagraph="This feature is easier than calling. This way you can contact us with one click"
        />
        <Why
          wImg={wImgTwo}
          wColor="#FFF6EF"
          wHeader="Individual Solution"
          wParagraph="You just tell us what you want and we solve your problem instantly."
        />
        <Why
          wImg={wImgThree}
          wColor="#DEFFEF"
          wHeader="Great Drivers"
          wParagraph="There is a driver rating system for customers. Through this feature, you can choose the most ideal driver for yourself."
        />
        <Why
          wImg={wImgFour}
          wColor="#F2F8FF"
          wHeader="Customer Happiness"
          wParagraph="We always think of our customers and do our best for their happiness."
        />
      </div>
    </div>
  );
};

export default Whyus;
