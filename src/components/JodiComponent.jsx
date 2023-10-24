import React from "react";
import jodiFrame from "../assets/images/diwali-dhamka/Best-partnership-frame-combine.png";
import beans from "../assets/images/bean-icon.png";
import unknown from "../assets/images/unknown-user.png";
import "../styles/jodi-component.scss";
const JodiComponent = ({ currentData }) => {
  return (
    <div className="jodi-component">
      <div className="jodi-images">
        <img src={jodiFrame} className="frame" />
        <img className="user-img" src={unknown} />
        <img className="talent-img" src={unknown} />
      </div>
      <div className="names">
        <div className="uname">
          <span>{currentData.user.name}</span>
          <div className="beans-div">
            <span>{currentData.user.score}</span>
            <img src={beans} />
          </div>
        </div>
        <div className="tname">
          <span>{currentData.talent.name}</span>
          <div className="beans-div">
            <span>{currentData.talent.score}</span>
            <img src={beans} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JodiComponent;
