import React from "react";
import "./info.scss";
import truckImg from "../../assets/truck2.png";

const Info = () => {
  return (
    <div className="info">
      <div className="infoBox">
        <h3>For more information call us</h3>
        <p>
          You can contact us for more information. All your questions will be
          answered promptly.
        </p>
        <button>
          Contact us <img src="" alt="" />
        </button>
      </div>
        <img src={truckImg} alt="" />
    </div>
  );
};

export default Info;
