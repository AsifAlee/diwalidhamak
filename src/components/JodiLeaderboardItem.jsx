import React from "react";
import levelImg from "../assets/images/level-img.png";
import bean from "../assets/images/bean-icon.png";
import twoFrame from "../assets/images/diwali-dhamka/talent-user-frame-combine.png";
import unknown from "../assets/images/unknown-user.png";
import beansContribute from "../assets/images/diwali-dhamka/Beans-contributed-text.png";
import "../styles/jodi-leaderboard-item.scss";

const JodiLeaderboardItem = () => {
  return (
    <div className="jodi-leaderboard-item">
      <div className="left-div">
        <p className="name">Username</p>
        <img src={levelImg} className="level" />
        <div className="beans-div">
          <img src={bean} />
          <span>12345</span>
        </div>
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
          <span>123456</span>
        </div>
      </div>
      <div className="right-div">
        <p className="name">Talentname</p>
        <img src={levelImg} className="level" />
      </div>
    </div>
  );
};

export default JodiLeaderboardItem;
