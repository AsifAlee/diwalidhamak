import React from "react";
// import levelImg from "../assets/images/level-img.png";
import bean from "../assets/images/bean-icon.png";
import twoFrame from "../assets/images/diwali-dhamka/talent-user-frame-combine.png";
import unknown from "../assets/images/unknown-user.png";
import beansContribute from "../assets/images/diwali-dhamka/Beans-contributed-text.png";
import "../styles/jodi-leaderboard-item.scss";
import { getLevelImage, gotoProfile } from "../functions";

const JodiLeaderboardItem = ({ partners, index, isCurrent }) => {
  return (
    <div className={`jodi-leaderboard-item ${index > 7 ? "second-strip" : ""}`}>
      <div className="left-div">
        <p className="name">{partners.userNickname.slice(0, 8)}</p>
        <img src={getLevelImage(partners?.userLevel)} className="level" />
        {partners.expectedBeans && !isCurrent ? (
          <div className="beans-div">
            <img src={bean} />
            <span>{partners.expectedBeans}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="center-div">
        <div>
          <div className="images-with-frames">
            <img className="two-frame" src={twoFrame} />
            <img
              className="user-img"
              src={partners?.userPortrait ? partners?.userPortrait : unknown}
              onClick={() => gotoProfile(partners.userId)}
            />
            <img
              className="talent-img"
              src={
                partners?.talentPortrait ? partners?.talentPortrait : unknown
              }
              onClick={() => gotoProfile(partners.talentId)}
            />
          </div>
        </div>

        <img src={beansContribute} className="beans-cont-text" />
        <div className="beans-cont-value">
          <img src={bean} />
          <span>{partners?.contributeBeans}</span>
        </div>
      </div>
      <div className="right-div">
        <p className="name">{partners?.talentNickname.slice(0, 8)}</p>
        <img
          src={getLevelImage(partners?.talentLevel, true)}
          className="level"
        />
      </div>
    </div>
  );
};

export default JodiLeaderboardItem;
