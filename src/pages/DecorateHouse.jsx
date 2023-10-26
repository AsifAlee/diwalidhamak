import React, { useState } from "react";
import title from "../assets/images/decorate-house/heading-text.png";
import leaderboardTag from "../assets/images/decorate-house/rewards-winners-text.png";
import "../styles/decorate-house.scss";
import GameLeaderboartItem from "../components/GameLeaderboartItem";
import RewardsHistoryPopup from "../popups/RewardsHistoryPopup";
import AreUSure from "../popups/AreUSure";
import Purchased from "../popups/Purchased";
import HouseItem from "../components/HouseItem";
import unknowUser from "../assets/images/unknown-user.png";
import { houseItems } from "../constants";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { getRewardsImage, gotoProfile } from "../functions";
import bean from "../assets/images/bean-icon.png";
import { errorCodes } from "../api";

const DecorateHouse = () => {
  const { decorGameLeaderboard } = useContext(AppContext);
  const [showRewardsHist, setShowRewardsHist] = useState(false);
  const [showSurePopUp, setShowSurePopup] = useState(false);
  const [purchasePopup, setPurchasePopup] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [id, setId] = useState(0);
  const toggleRewardsHist = () => {
    setShowRewardsHist((prevState) => !prevState);
  };
  const toggleRSurePopuo = () => {
    setShowSurePopup((prevState) => !prevState);
  };
  const setItemId = (id) => {
    setId(id);
  };
  const togglePurchasePopup = () => {
    setShowSurePopup(false);
    setPurchasePopup((prevState) => !prevState);
  };

  const [errorCode, setErrorCode] = useState(null);

  // const purchaseItem = (id) => {
  //   fetch(`${baseUrl}/api/activity/diwaliMela/decorateHouse?index=${id}`, {
  //     method: "POST",
  //     headers: {
  //       checkTag: "",
  //       // userId: user.userId,
  //       // token: user.token,
  //       userId: testUserId,
  //       token: testToken,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) =>
  //       response.json().then((response) => {
  //         setErrorCode(response.errorCode);
  //         setErrMsg(response?.msg);
  //         if (response.errorCode === 0) {
  //           // setIsPlaying(true);
  //           // setRewardsContent(response.data.rewardContent);
  //           // getGameLeaderboardData();
  //           // getInfo();
  //         }
  //         setTimeout(() => {
  //           // setIsPlaying(false);
  //           // getInfo();
  //           // setIsDisabled(false);
  //         }, 3000);
  //       })
  //     )
  //     .catch((error) => {
  //       console.error(error);
  //       setInputValue(1);
  //       setIsDisabled(false);
  //       setIsPlaying(false);
  //     });
  // };
  return (
    <div className="decorate-house">
      <div style={{ position: "relative", top: "-31vw" }}>
        <Marquee>
          {decorGameLeaderboard?.map((item) => {
            return (
              <div className="game-marquee">
                <div className="marquee-item">
                  <img
                    src={unknowUser}
                    className="marq-user-img"
                    onClick={() => gotoProfile(item?.userId)}
                  />

                  <div
                    className="marq-user-details"
                    style={{ fontWeight: "bold" }}
                  >
                    <p>
                      <span className="name">{`${item?.nickname?.slice(
                        0,
                        6
                      )} has successfully purchased sampe item and has won`}</span>

                      <span className="rew-desc">{`${item?.userScore} Beans `}</span>
                      <img src={bean} className="rew-img" />

                      <span>.&nbsp;Congratulations!</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="decorate-house-game">
        <div className="house-items">
          {houseItems.map((item) => (
            <HouseItem
              item={item}
              toggleRSurePopuo={toggleRSurePopuo}
              setItemId={setItemId}
            />
          ))}
        </div>
        <button className="reward-hist-btn" onClick={toggleRewardsHist} />

        <div className="play-sec">
          <p>Festive Tokens:XXX</p>
          <p>Play</p>
          <button className="purchase-btn" onClick={toggleRSurePopuo} />
        </div>
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
          {decorGameLeaderboard.map((item, index) => (
            <GameLeaderboartItem item={item} index={index} />
          ))}
        </div>
      </div>
      {showRewardsHist && (
        <RewardsHistoryPopup popUpHandler={toggleRewardsHist} />
      )}
      {showSurePopUp && (
        <AreUSure
          popUpHandeler={toggleRSurePopuo}
          togglePurchasePopup={togglePurchasePopup}
          tokens={houseItems.find((item) => item.id === id).tokens}
        />
      )}
      {purchasePopup && (
        <Purchased
          popUpHandeler={togglePurchasePopup}
          errorCode={errorCodes.succes}
          errMsg={errMsg}
        />
      )}
    </div>
  );
};

export default DecorateHouse;
