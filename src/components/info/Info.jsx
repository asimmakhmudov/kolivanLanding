import React from "react";
import "./info.scss";
import truckImg from "../../assets/truck2.png";

const Info = () => {
  return (
    <div className="info">
      <div className="infoBox">
        <div className="infoContent">
          <h3>For more information call us</h3>
          <p>
            You can contact us for more information. All your questions will be
            answered promptly.
          </p>
          <a href="tel:0515287097">
            <button>
              Contact us <span>&#x3e;</span>
            </button>
          </a>
        </div>
      </div>
      <img src={truckImg} alt="" />
    </div>
  );
};

export default Info;
