import React from "react";
import borderRight from "../assets/images/decorate-house/leaderboard-no-line.png";
import unknown from "../assets/images/unknown-user.png";
import frame from "../assets/images/decorate-house/leaderboard-frame.png";
import level from "../assets/images/level-img.png";
import "../styles/game-leaderboard-item.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import { leaderBoardSliderData } from "../testData";
const GameLeaderboartItem = () => {
  return (
    <div className="game-board-item">
      <div className="leftDiv">
        <div className="index">
          <span>1</span>
        </div>
        <img src={borderRight} className="border-img" />
        <div className="user-with-frame">
          <img className="frame" src={frame} />
          <img className="user-avatar" src={unknown} />
        </div>
        <div className="user-details">
          <span>User Name</span>
          <img src={level} />
        </div>
      </div>
      <div className="right-div">
        <LeaderBoardSlider rewards={leaderBoardSliderData} />
      </div>
    </div>
  );
};

export default GameLeaderboartItem;
