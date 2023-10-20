import React from "react";
import beans from "../assets/images/bean-icon.png";
import { getLevelImage, getRewardsImage } from "../functions";
// import "../styles/gifting.scss";
const Gift = () => {
  return (
    <div className="gift">
      <div className="gift-details">
        <span className="name">Beans</span>
        <img src={getRewardsImage("beans")} />
      </div>
      <div className="price">
        <span>12,000</span>

        <img src={beans} />
      </div>
    </div>
  );
};

export default Gift;
