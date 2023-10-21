import React from "react";
import title from "../assets/images/decorate-house/heading-text.png";
import leaderboardTag from "../assets/images/decorate-house/rewards-winners-text.png";
import "../styles/decorate-house.scss";
import GameLeaderboartItem from "../components/GameLeaderboartItem";
const DecorateHouse = () => {
  return (
    <div className="decorate-house">
      <div className="decorate-house-game">
        <button className="reward-hist-btn" />
      </div>
      <div className="house-info">
        <img src={title} className="title" />
        <div className="info-content">
          <div className="list-item">
            <div className="bullet"></div>
            <span>
              Use <span className="yellow">FESTIVAL TOKENS</span> collected to
              purchase new items.
            </span>
          </div>
          <div className="list-item">
            <div className="bullet"></div>
            <span>
              Additional <span className="yellow">BEANS REWARDS</span> will be
              rewarded for every new purchase you make.
            </span>
          </div>
          <div className="list-item">
            <div className="bullet"></div>
            <span>
              After all the items are purchase,the game will reset,the game will
              reset.
            </span>
          </div>
        </div>
      </div>

      <div className="rewards-leaderboard">
        <img src={leaderboardTag} className="tag" />
        <div className="winners">
          <GameLeaderboartItem />
        </div>
      </div>
    </div>
  );
};

export default DecorateHouse;
