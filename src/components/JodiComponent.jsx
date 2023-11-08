import React from "react";
import jodiFrame from "../assets/images/diwali-dhamka/Best-partnership-frame-combine.png";
import beans from "../assets/images/bean-icon.png";
import unknown from "../assets/images/unknown-user.png";
import "../styles/jodi-component.scss";
import { gotoProfile, getLevelImage } from "../functions";
const JodiComponent = ({ currentData }) => {
  // debugger;
  return (
    <div className="jodi-component">
      {currentData?.expectedBeans ? (
        <div className="expected-beans">
          <span>Beans Won</span>
          <span>{currentData?.expectedBeans}</span>
        </div>
      ) : (
        ""
      )}

      <div className="jodi-images">
        <img src={jodiFrame} className="frame" />
        <img
          className="user-img"
          src={currentData?.userPortrait ? currentData?.userPortrait : unknown}
          onClick={() => gotoProfile(currentData?.userId)}
        />
        <img
          className="talent-img"
          src={
            currentData?.talentPortrait ? currentData?.talentPortrait : unknown
          }
          onClick={() => gotoProfile(currentData?.talentId)}
        />
      </div>
      <div className="level-images">
        <img src={getLevelImage(currentData.userLevel)} className="user" />
        <img
          src={getLevelImage(currentData.talentLevel, true)}
          className="talent"
        />
      </div>
      <div className="names">
        <div className="uname">
          <span>{`${currentData?.userNickname.slice(0, 12)}...`}</span>
          <div className="beans-div">
            <span>{currentData?.contributeBeans}</span>
            <img src={beans} />
          </div>
        </div>
        <div className="tname">
          <span>{`${currentData?.talentNickname.slice(0, 12)}...`}</span>
          <div className="beans-div">
            <span>{currentData?.contributeBeans}</span>
            <img src={beans} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JodiComponent;
