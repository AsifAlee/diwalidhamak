import React from "react";
import levelImg from "../assets/images/level-img.png";
import bean from "../assets/images/bean-icon.png";
import twoFrame from "../assets/images/diwali-dhamka/talent-user-frame-combine.png";
import unknown from "../assets/images/unknown-user.png";
import beansContribute from "../assets/images/diwali-dhamka/Beans-contributed-text.png";
import "../styles/jodi-leaderboard-item.scss";
import { getLevelImage } from "../functions";

const JodiLeaderboardItem = ({ partners, index }) => {
  return (
    <div className={`jodi-leaderboard-item ${index > 7 ? "second-strip" : ""}`}>
      <div className="left-div">
        <p className="name">{partners.userNickname.slice(0, 8)}</p>
        <img src={getLevelImage(partners?.userLevel)} className="level" />
        {/* <div className="beans-div">
          <img src={bean} />
          <span>12345</span>
        </div> */}
      </div>
      <div className="center-div">
        <div className="images-with-frames">
          <img className="two-frame" src={twoFrame} />
          <img className="user-img" src={unknown} />
          <img className="talent-img" src={unknown} />
        </div>
        <img src={beansContribute} className="beans-cont-text" />
        <div className="beans-cont-value">
          <img src={bean} />
          <span>{partners?.contributeBeans}</span>
        </div>
      </div>
      <div className="right-div">
        <p className="name">{partners?.talentNickname.slice(0, 8)}</p>
        <img src={getLevelImage(partners?.talentLevel)} className="level" />
      </div>
    </div>
  );
};

export default JodiLeaderboardItem;
