import React, { useState } from "react";
import "../styles/diwalimela.scss";
import albumTitle from "../assets/images/diwali-dhamka/Best-partnership-album-text.png";
import parternshipTitle from "../assets/images/diwali-dhamka/Festival-favourite-partnership-text.png";
import JodiComponent from "../components/JodiComponent";
import Carousel, { CarouselItem } from "../components/Carousel";
import JodiSlider from "../components/JodiSlider";
import { jodiData } from "../testData";
import TabButton from "../components/TabButtons";
import bean from "../assets/images/bean-icon.png";
import TimeUnit from "../components/TimeUnit";
import currBtn from "../assets/images/Current-btn.png";
import prevBtn from "../assets/images/prev-btn.png";
import switchBg from "../assets/images/current-previous-btn-bg.png";
import SwitchButton from "../components/SwitchButton";
import JodiLeaderboardItem from "../components/JodiLeaderboardItem";

const DiwaliMela = () => {
  const [rewardsTabs, setRewardsTabs] = useState({
    user: true,
    talent: false,
  });
  const [leaderboardTabs, setLeaderBoardTabs] = useState({
    rank1: true,
    rank2: false,
    rank3: false,
  });
  const [isSliderOn, setIsSliderOn] = useState(false);
  const toggleRewardsTabs = (name) => {
    if (name === "user") {
      setRewardsTabs({
        user: true,
        talent: false,
      });
    } else if (name === "talent") {
      setRewardsTabs({
        user: false,
        talent: true,
      });
    }
  };
  const toggleLeaderBoardTabs = (name) => {
    if (name === "rank1") {
      setLeaderBoardTabs({
        rank1: true,
        rank2: false,
        rank3: false,
      });
    } else if (name === "rank2") {
      setLeaderBoardTabs({
        rank1: false,
        rank2: true,
        rank3: false,
      });
    } else if (name === "rank3") {
      setLeaderBoardTabs({
        rank1: false,
        rank2: false,
        rank3: true,
      });
    }
  };
  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  return (
    <div className="diwali-mela">
      <div className="game-section"></div>
      <div className="jodi-album-sec">
        <img className="title" src={albumTitle} />
        <JodiSlider data={jodiData} showIndicators={true} />
      </div>
      <div className="d-flex j-sa">
        <TabButton
          handleClick={toggleRewardsTabs}
          name="user"
          btnImg={rewardsTabs.user ? "user-sel" : "user-un"}
          arrowImage={false}
          showArrowImg={false}
        />
        <TabButton
          handleClick={toggleRewardsTabs}
          name="talent"
          btnImg={rewardsTabs.talent ? "talent-sel" : "talent-un"}
          arrowImage={false}
          showArrowImg={false}
        />
      </div>
      <div className="beans-pot">
        <p className="text">Beans Pot will be rewarded to TOP 5 Users.</p>
        <div className="pot-value">
          <img src={bean} />
          <span>000,000,00</span>
        </div>
      </div>
      <div className="favrt-jodi-partnership">
        <img src={parternshipTitle} className="title" />
        <div className="hourGlass">
          <div
            className="d-flex p-rel al-center"
            style={{ left: "5vw", top: "8vw" }}
          >
            <TimeUnit unit="Hr" />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Min" />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Sec" />
          </div>
        </div>
      </div>

      <div className="jodi-leaderboard">
        <div className="d-flex j-center" style={{ marginTop: "4vw" }}>
          <SwitchButton
            bg={switchBg}
            onToggle={handleSliderToggle}
            btn={isSliderOn ? prevBtn : currBtn}
          />
        </div>
        <div className="d-flex j-center">
          <div className="leaderboard-tabs">
            <button
              className={`rank1-10 ${!leaderboardTabs.rank1 && "hide"}`}
              onClick={() => toggleLeaderBoardTabs("rank1")}
            />
            <button
              className={`rank11-20 ${!leaderboardTabs.rank2 && "hide"}`}
              onClick={() => toggleLeaderBoardTabs("rank2")}
            />

            <button
              className={`rank21-30 ${!leaderboardTabs.rank3 && "hide"}`}
              onClick={() => toggleLeaderBoardTabs("rank3")}
            />
          </div>
        </div>
        <div className="d-flex j-center">
          <JodiLeaderboardItem />
        </div>
      </div>
    </div>
  );
};

export default DiwaliMela;
