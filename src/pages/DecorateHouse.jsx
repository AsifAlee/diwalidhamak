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
import { baseUrl, errorCodes, testToken, testUserId } from "../api";
import HouseItemsTable from "../popups/HouseItemsTable";
import emptyLantern from "../assets/images/decorate-house/Lartern.png";

const DecorateHouse = () => {
  const {
    decorGameLeaderboard,
    getInfo,
    info,
    user,
    getDecorateGameLeaderboard,
  } = useContext(AppContext);
  const [showRewardsHist, setShowRewardsHist] = useState(false);
  const [showSurePopUp, setShowSurePopup] = useState(false);
  const [purchasePopup, setPurchasePopup] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [id, setId] = useState(0);

  const [isDisabled, setIsDisabled] = useState(false);
  const [rewardsContent, setRewardsContent] = useState("");
  const [purchaseAll, setPurchaseAll] = useState(false);
  const [allUnlocked, setAllUnlocked] = useState(false);
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const toggleRewardsHist = () => {
    setShowRewardsHist((prevState) => !prevState);
  };
  const toggleRSurePopuo = () => {
    setShowSurePopup((prevState) => !prevState);
    setPurchaseAll(false);
  };
  const setItemId = (id) => {
    setId(id);
  };
  const togglePurchasePopup = (removeUnlock) => {
    if (removeUnlock) {
      setAllUnlocked(false);
    }
    setShowSurePopup(false);
    setPurchaseAll(false);
    setPurchasePopup((prevState) => !prevState);
  };

  const [errorCode, setErrorCode] = useState(null);

  const purchaseItem = (id) => {
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    let url;
    if (purchaseAll) {
      url = `${baseUrl}/api/activity/diwaliMela/decorateHouse`;
    } else {
      url = `${baseUrl}/api/activity/diwaliMela/decorateHouse?index=${id}`;
    }
    console.log("the url is:", url);
    fetch(url, {
      method: "POST",
      headers: {
        checkTag: "",
        userId: user.userId,
        token: user.token,
        // userId: testUserId,
        // token: testToken,
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response.json().then((response) => {
          setErrorCode(response.errorCode);
          setErrMsg(response?.msg);
          if (response.errorCode === 0) {
            setRewardsContent(response.data.rewardContent);
            setAllUnlocked(response.data.unlockAllMaterial);
            getDecorateGameLeaderboard();
            getInfo();
          }

          setIsDisabled(false);
          togglePurchasePopup();
        })
      )
      .catch((error) => {
        console.error(error);
        togglePurchasePopup();
        setIsDisabled(false);
      });
  };
  return (
    <div className="decorate-house">
      <div style={{ position: "relative", top: "-31vw" }}>
        <Marquee play={true}>
          {decorGameLeaderboard?.map((item) => {
            return (
              <div className="game-marquee">
                <div className="marquee-item">
                  <img
                    src={item?.portrait ? item?.portrait : unknowUser}
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
                      )} has successfully purchased ${
                        item?.userScore === 1300
                          ? "Lantern"
                          : item?.userScore === 3000
                          ? "Lights"
                          : item?.userScore === 4400
                          ? "Sofa"
                          : item?.userScore === 7100
                          ? "Study Area"
                          : item?.userScore === 9200
                          ? "Bedroom Decoration"
                          : "all items"
                      } and has won `}</span>
                      <span className="rew-desc">{`${item?.userScore} Beans `}</span>
                      <img src={bean} className="rew-img" />.
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
          {houseItems.map((item, index) => (
            <HouseItem
              item={item}
              toggleRSurePopuo={toggleRSurePopuo}
              setItemId={setItemId}
              key={index}
              index={index + 1}
            />
          ))}
          <img src={emptyLantern} className="empty-lantern" />
        </div>
        <button className="reward-hist-btn" onClick={toggleRewardsHist} />

        <div className="play-sec">
          <div className="festive-tokens">
            <span>Festive Tokens:{info.festiveToken}</span>
          </div>
          <button
            className="purchase-all-btn"
            onClick={() => {
              toggleRSurePopuo();
              setPurchaseAll(true);
            }}
          />
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
              After all the items are purchased, the game will be reset.
            </span>
          </div>
        </div>
      </div>

      <div className="rewards-leaderboard">
        <img src={leaderboardTag} className="tag" />
        <div className="winners">
          {decorGameLeaderboard
            ?.slice(0, seeMore ? 10 : 20)
            ?.map((item, index) => (
              <GameLeaderboartItem item={item} index={index} />
            ))}
        </div>

        {decorGameLeaderboard?.length > 10 && (
          <button
            className={seeMore ? "see-more" : "see-less"}
            onClick={toggleSeeMore}
          />
        )}
      </div>
      {showRewardsHist && <HouseItemsTable popUpHandler={toggleRewardsHist} />}
      {showSurePopUp && (
        <AreUSure
          popUpHandeler={toggleRSurePopuo}
          togglePurchasePopup={togglePurchasePopup}
          tokens={houseItems.find((item) => item.id === id)?.tokens || 0}
          purchaseItem={purchaseItem}
          purchaseAll={purchaseAll}
          id={id}
          isDisabled={isDisabled}
          info={info}
        />
      )}
      {purchasePopup && (
        <Purchased
          popUpHandeler={togglePurchasePopup}
          errorCode={errorCode}
          errMsg={errMsg}
          name={houseItems.find((item) => item.id === id)?.name || ""}
          rewardsContent={rewardsContent}
          allUnlocked={allUnlocked}
        />
      )}
    </div>
  );
};

export default DecorateHouse;
