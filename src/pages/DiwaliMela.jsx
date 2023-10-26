import React, { useContext, useEffect, useState } from "react";
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
import { getRewardsImage, gotoProfile } from "../functions";
import moment from "moment/moment";
import RewardsHistoryPopup from "../popups/RewardsHistoryPopup";
import Marquee from "react-fast-marquee";
import unknowUser from "../assets/images/unknown-user.png";
import { baseUrl, testToken, testUserId } from "../api";
import Purchased from "../popups/Purchased";
import DiwaliDhamakaGame from "../popups/DiwaliDhamakaGame";
import token from "../assets/images/diwali-dhamka/token-icon.png";
const DiwaliMela = () => {
  const { info, getGameRewardHistroy, getInfo, partnershipData, user } =
    useContext(AppContext);

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
  const [showRewardsHist, setShowRewardsHist] = useState(false);

  const [isInputZero, setIsInputZero] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDecimalInput, setIsDecimalInput] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [shakeText, setShakeText] = useState(false);
  const [warn, setWarn] = useState("");
  const [gamePopup, setGamePopup] = useState(false);
  const [gameRewards, setGameRewards] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const toggleRewardsHist = () => {
    setShowRewardsHist((prevState) => !prevState);
  };
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

  const toggleGamePopup = () => {
    setIsDisabled(false);
    setGamePopup((prevState) => !prevState);
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

  useEffect(() => {
    if (isSliderOn) {
      setCurrentData(partnershipData?.prev);
    } else {
      setCurrentData(partnershipData?.current);
    }
  }, [isSliderOn, partnershipData]);

  function timeSet() {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();

    var timertwelevehOur = " 11:59:59";
    var timertwentyFourhOur = " 23:59:59";

    var timerData = hours <= 12 ? timertwelevehOur : timertwentyFourhOur;

    let endTime = year + "-" + month + "-" + day + timerData;
    // console.log("end time:", endTime);
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
      // console.log("d is:", d);
      // console.log("h is:", h);
      // console.log("m is:", m);
      // console.log("s is:", s);
    }, 1000);
  }
  timeSet();

  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      // let max = userInfo.throwsLeft < 99 ?  userInfo.throwsLeft : 99;
      if (info.chances <= 99 && info.chances > 0) {
        max = info.chances;
      } else if (info.chances > 99) {
        max = 99;
      } else if (info.chances === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };
  const onChangeHandle = (event) => {
    if (!event.target.value) {
      setIsInputZero(true);
    } else {
      setShakeText(false);
      setIsInputZero(false);
    }
    setInputValue(parseInt(event.target.value));
  };

  const playGame = () => {
    if (!inputValue) {
      setWarn("Enter Some value");
      setShakeText(true);
      return;
    } else {
      setShakeText(false);
    }
    if (inputValue.toString().includes(".")) {
      setIsDecimalInput(true);
      setGamePopup(true);
      return;
    }

    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    if (!inputValue) {
      setIsInputZero(true);
      setIsDisabled(false);
      return;
    }

    fetch(
      `${baseUrl}/api/activity/diwaliMela/playGame?playCount=${inputValue}`,
      {
        method: "POST",
        headers: {
          checkTag: "",
          userId: user.userId,
          token: user.token,
          // userId: testUserId,
          // token: testToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response.json().then((response) => {
          setErrorCode(response.errorCode);
          setErrMsg(response?.msg);
          if (response.errorCode === 0) {
            setIsPlaying(true);
            setGameRewards(response.data.rewardContent.split("+"));
            // setRewardsContent(response.data.rewardContent);

            // getGameLeaderboardData();

            // getInfo();
          }
          setTimeout(() => {
            setGamePopup(true);
            setIsPlaying(false);
            getInfo();
            setInputValue(1);
            setIsDisabled(false);
            getGameRewardHistroy();
            // getGameLeaderboardData();
          }, 3000);
        })
      )
      .catch((error) => {
        console.error(error);
        setInputValue(1);
        setIsDisabled(false);
        setIsPlaying(false);
      });
  };

  return (
    <div className="diwali-mela">
      <div style={{ position: "relative", top: "-31vw" }}>
        <Marquee>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
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

      <div className="game-section">
        <p className="tokens">
          Festive Tokens={info.festiveToken} <img src={token} />
        </p>
        <p className="info-text">
          25k <img src={bean} /> on event gifts = 1 Chance
        </p>
        <button className="reward-hist-btn" onClick={toggleRewardsHist} />

        <div className="play-sec">
          <p className="my-chances">My Chances:{info.gamePoints}</p>
          <input
            type="number"
            value={inputValue}
            min={1}
            max={999}
            onChange={onChangeHandle}
            onKeyUp={onUpCheck}
            pattern="[0-9]*"
            // style={{ border: isInputZero ? "1px solid red" : "" }}
          />
          {shakeText && (
            <span className={`warning-text shaking-text`}>
              Enter some value
            </span>
          )}
          <button
            className={`launch-btn ${isDisabled && "blackNWhite"}`}
            onClick={playGame}
          ></button>
        </div>
      </div>
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
        <div className="contributors-items">
          {leaderboardTabs.rank1
            ? currentData
                .slice(0, 10)
                ?.map((partners, index) => (
                  <JodiLeaderboardItem partners={partners} index={index} />
                ))
            : leaderboardTabs.rank2
            ? currentData
                .slice(10, 21)
                ?.map((partners, index) => (
                  <JodiLeaderboardItem partners={partners} index={index} />
                ))
            : currentData
                .slice(21, 31)
                ?.map((partners, index) => (
                  <JodiLeaderboardItem partners={partners} index={index} />
                ))}
        </div>
      </div>
      {showRewardsHist && (
        <RewardsHistoryPopup popUpHandler={toggleRewardsHist} />
      )}
      {gamePopup && (
        <DiwaliDhamakaGame
          popUpHandeler={toggleGamePopup}
          errorCode={errorCode}
          gameRewards={gameRewards}
          errMsg={errMsg}
        />
      )}
    </div>
  );
};

export default DiwaliMela;
