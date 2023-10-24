import React, { useContext, useState } from "react";
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
import { AppContext } from "../AppContext";
import { getRewardsImage } from "../functions";
import moment from "moment/moment";
const DiwaliMela = () => {
  const { info } = useContext(AppContext);

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

  let d = null;
  let h = null;
  let m = null;
  let s = null;

  const [days, setDays] = useState(null);
  const [hrs, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [secs, setSecs] = useState(null);

  function timeSet() {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();

    console.log(
      "time is",
      `${year}-${month}-${day} 
             ${hours}:${minutes}:${seconds}.${milliseconds}`
    );
    var timertwelevehOur = " 11:59:59";
    var timertwentyFourhOur = " 23:59:59";

    var timerData = hours <= 12 ? timertwelevehOur : timertwentyFourhOur;

    let endTime = year + "-" + month + "-" + day + timerData;
    console.log("end time:", endTime);
    let startTime = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    let t = moment(endTime).diff(startTime) / 1000; //计算本地时间和utc时间差

    let timeInterval = setInterval(() => {
      t--;
      d = Math.floor(t / (24 * 3600));
      h = Math.floor((t - 24 * 3600 * d) / 3600);
      m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
      s = Math.floor(t - 24 * 3600 * d - h * 3600 - m * 60);
      setDays(d);
      setHours(h);
      setMins(m);
      setSecs(s);
      if (d < 0) {
        clearInterval(timeInterval);
        return;
      }
      console.log("d is:", d);
      console.log("h is:", h);
      console.log("m is:", m);
      console.log("s is:", s);
    }, 1000);
  }
  timeSet();

  return (
    <div className="diwali-mela">
      <div className="game-section"></div>
      <div className="jodi-album-sec">
        <img className="title" src={albumTitle} />
        <JodiSlider data={jodiData} showIndicators={true} />
      </div>
      <div className="d-flex j-sa" style={{ marginTop: "3vw" }}>
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
      <>
        {rewardsTabs.user ? (
          <div className="beans-pot">
            <p className="text">Beans Pot will be rewarded to TOP 5 Users.</p>
            <div className="pot-value">
              <img src={bean} />
              <span>{info?.partnershipBeansPot?.current}</span>
            </div>
          </div>
        ) : (
          <div className="rew-container">
            <div className="reward-item">
              <div className="image-div">
                <img src={getRewardsImage("Bunny profile Frame")} />
              </div>
              <p className="center">Bunny profile Frame x3 days</p>
            </div>
          </div>
        )}
      </>

      <div className="favrt-jodi-partnership">
        <img src={parternshipTitle} className="title" />
        <div className="hourGlass">
          <div
            className="d-flex p-rel al-center"
            style={{ left: "5vw", top: "8vw" }}
          >
            <TimeUnit unit="Hr" value={hrs} />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Min" value={mins} />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Sec" value={secs} />
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
