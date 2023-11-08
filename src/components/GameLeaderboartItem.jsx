import React from "react";
import borderRight from "../assets/images/decorate-house/leaderboard-no-line.png";
import unknown from "../assets/images/unknown-user.png";
import frame from "../assets/images/decorate-house/leaderboard-frame.png";
// import level from "../assets/images/level-img.png";
import "../styles/game-leaderboard-item.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import { leaderBoardSliderData } from "../testData";
import { getLevelImage, gotoProfile } from "../functions";
import bean from "../assets/images/bean-icon.png";
const GameLeaderboartItem = ({ item, index }) => {
  return (
    <div className="game-board-item">
      <div className="leftDiv">
        <div className="index">
          <span>{index + 1}</span>
        </div>
        <img src={borderRight} className="border-img" />
        <div className="user-with-frame">
          <img
            className="frame"
            src={frame}
            onClick={() => gotoProfile(item.userId)}
          />
          <img
            className="user-avatar"
            src={item?.portrait ? item?.portrait : unknown}
            onClick={() => gotoProfile(item.userId)}
          />
        </div>
        <div className="user-details">
          <span>{item.nickname}</span>
          <img src={getLevelImage(item.userLevel)} />
        </div>
      </div>
      <div className="rightDiv">
        {/* <LeaderBoardSlider rewards={leaderBoardSliderData} /> */}
        <img src={bean} />
        <span>{item.userScore}</span>
      </div>
    </div>
  );
};

export default GameLeaderboartItem;
