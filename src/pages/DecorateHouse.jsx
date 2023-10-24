import React, { useState } from "react";
import title from "../assets/images/decorate-house/heading-text.png";
import leaderboardTag from "../assets/images/decorate-house/rewards-winners-text.png";
import "../styles/decorate-house.scss";
import GameLeaderboartItem from "../components/GameLeaderboartItem";
import RewardsHistoryPopup from "../popups/RewardsHistoryPopup";
import AreUSure from "../popups/AreUSure";
import Purchased from "../popups/Purchased";
const DecorateHouse = () => {
  const [showRewardsHist, setShowRewardsHist] = useState(false);
  const [showSurePopUp, setShowSurePopup] = useState(false);
  const [purchasePopup, setPurchasePopup] = useState(false);
  const toggleRewardsHist = () => {
    setShowRewardsHist((prevState) => !prevState);
  };
  const toggleRSurePopuo = () => {
    setShowSurePopup((prevState) => !prevState);
  };
  const togglePurchasePopup = () => {
    setShowSurePopup(false);
    setPurchasePopup((prevState) => !prevState);
  };
  return (
    <div className="decorate-house">
      <div className="decorate-house-game">
        <button className="reward-hist-btn" onClick={toggleRewardsHist} />

        <button className="purchase-btn" onClick={toggleRSurePopuo} />
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
      {showRewardsHist && (
        <RewardsHistoryPopup popUpHandler={toggleRewardsHist} />
      )}
      {showSurePopUp && (
        <AreUSure
          popUpHandeler={toggleRSurePopuo}
          togglePurchasePopup={togglePurchasePopup}
        />
      )}
      {purchasePopup && <Purchased popUpHandeler={togglePurchasePopup} />}
    </div>
  );
};

export default DecorateHouse;
