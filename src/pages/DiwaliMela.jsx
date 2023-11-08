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
import leaderBoradTitle from "../assets/images/leaderboard-text.png";
import CountdownTimer from "../components/Timer";
import rewardsText from "../assets/images/rewards-text.png";
import CountDownTimerFromBe from "../components/CountDownTimerFromBe";
import CountdownTimer3 from "../components/CountDownTimer3";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const DiwaliMela = () => {
  const {
    info,
    getGameRewardHistroy,
    getInfo,
    partnershipData,
    user,
    diwaliGameLeaderboard,
    getGameRewardLeaderboard,
  } = useContext(AppContext);

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

    var timertwelevehOur = " 11:59:59";
    var timertwentyFourhOur = " 23:59:59";

    var timerData = hours <= 12 ? timertwelevehOur : timertwentyFourhOur;

    let endTime = year + "-" + month + "-" + day + timerData;
    let startTime = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    let t = moment(endTime).diff(startTime) / 1000; //计算本地时间和utc时间差

    let timeInterval = setInterval(() => {
      t--;
      d = Math.floor(t / (24 * 3600));
      h = Math.floor((t - 24 * 3600 * d) / 3600);
      m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
      s = Math.floor(t - 24 * 3600 * d - h * 3600 - m * 60);

      // console.log("days:", d);
      // console.log("hours:", h);

      // console.log("mins:", m);

      // console.log("s:", s);

      setHours(h);
      setMins(m);
      setSecs(s);
      if (d < 0) {
        clearInterval(timeInterval);
        return;
      }
    }, 1000);
  }

  // useEffect(() => {
  //   timeSet();
  // }, []);
  // timeSet();

  const onUpCheck = (e) => {
    let max;
    // if (/[+-.]/.test(e.key)) {
    //   setInputValue("");
    // }
    //  else {

    if (info?.gamePoints <= 99 && info?.gamePoints > 0) {
      max = info.gamePoints;
    } else if (info?.gamePoints > 99) {
      max = 99;
    } else if (info?.gamePoints === 0) {
      max = 1;
    }
    let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
    // setInputValue(parseInt(number));
    setInputValue(number);

    // }
  };
  const onChangeHandle = (event) => {
    if (!event.target.value) {
      setIsInputZero(true);
    } else {
      setShakeText(false);
      setIsInputZero(false);
    }
    // setInputValue(parseInt(event.target.value));
    setInputValue(event.target.value);
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
      `${baseUrl}/api/activity/diwaliMela/playGame?playCount=${parseInt(
        inputValue
      )}`,
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
            getInfo();
            getGameRewardLeaderboard();
            getGameRewardHistroy();
          }
          setTimeout(() => {
            setIsPlaying(false);
            setGamePopup(true);

            setInputValue(1);
            setIsDisabled(false);
          }, 2100);
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
        <Marquee play={true}>
          {diwaliGameLeaderboard?.map((item) => {
            return (
              <div className="mela-marquee">
                <div className="marquee-item">
                  <img
                    src={item.portrait ? item.portrait : unknowUser}
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
                      )} has won `}</span>

                      <span className="rew-desc">{`${
                        item?.userScore === 1
                          ? "750"
                          : item?.userScore === 2
                          ? "500"
                          : item?.userScore === 3
                          ? "1500"
                          : "1000"
                      } Beans `}</span>
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
      <div id="extraContent"></div>
      <div
        className={`game-section ${
          isPlaying && inputValue === 99
            ? "max-reward"
            : isPlaying
            ? "small-reward"
            : "forever"
        }`}
      >
        <p className="tokens">
          <span>Festive Tokens</span>
          <div style={{ position: "relative", bottom: "0.5vw" }}>
            <span>{info.festiveToken}</span>
            <img src={token} />
          </div>
        </p>

        <button className="reward-hist-btn" onClick={toggleRewardsHist} />

        <div className="play-sec">
          <p className="my-chances">My Sparklers : {info.gamePoints}</p>
          <input
            type="number"
            value={inputValue}
            min={1}
            max={99}
            onChange={onChangeHandle}
            onKeyUp={onUpCheck}
            // pattern="[0-9]*"
            step={0.01}
          />
          {shakeText && (
            <span className={`warning-text shaking-text`}>
              Enter some value
            </span>
          )}
          <button
            className={`launch-btn ${isDisabled && "blackNWhite"}`}
            onClick={playGame}
            isDisabled={isDisabled}
          ></button>
        </div>
      </div>
      <div className="jodi-album-sec">
        <img className="title" src={albumTitle} />
        {/* <JodiSlider data={partnershipData?.prev} showIndicators={true} /> */}
        {/* <Carousel
          centerMode={true}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={false}
        >
          {partnershipData?.prev.map((item) => (
            <JodiComponent currentData={item} />
          ))}
        </Carousel> */}
        {!partnershipData?.prev?.length ? (
          <div className="no-data-found">No Data Found</div>
        ) : (
          <Carousel>
            {partnershipData?.prev?.slice(0, 5).map((item) => (
              <CarouselItem>
                <JodiComponent currentData={item} />
              </CarouselItem>
            ))}
          </Carousel>
        )}
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
            <img src={rewardsText} className="title" />
            <p
              style={{
                fontSize: "3vw",
                position: "relative",
                bottom: "2vw",
              }}
            >
              Top 1st - 5th
            </p>
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
            {/* <TimeUnit unit="Hr" value={hrs} />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Min" value={mins} />
            <span className="timer-colon">:</span>
            <TimeUnit unit="Sec" value={secs} /> */}

            {/* <CountDownTimerFromBe /> */}

            <CountdownTimer3 targetTimestamp={info.endTime} />
          </div>
        </div>
      </div>

      <div className="jodi-leaderboard-wrap">
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
        <div className="jodi-leaderboard">
          <img src={leaderBoradTitle} className="title" />
          <div className="contributors-items">
            {leaderboardTabs.rank1
              ? currentData
                  .slice(0, 10)
                  ?.map((partners, index) => (
                    <JodiLeaderboardItem
                      partners={partners}
                      index={index}
                      isCurrent={isSliderOn}
                    />
                  ))
              : leaderboardTabs.rank2
              ? currentData
                  .slice(10, 20)
                  ?.map((partners, index) => (
                    <JodiLeaderboardItem
                      partners={partners}
                      index={index}
                      isCurrent={isSliderOn}
                    />
                  ))
              : currentData
                  .slice(20, 30)
                  ?.map((partners, index) => (
                    <JodiLeaderboardItem
                      partners={partners}
                      index={index}
                      isCurrent={isSliderOn}
                    />
                  ))}

            {leaderboardTabs.rank1 && !currentData.length && (
              <div className="no-data-found">No Data Found</div>
            )}
            {leaderboardTabs.rank2 && !currentData.slice(10, 21).length && (
              <div className="no-data-found">No Data Found</div>
            )}
            {leaderboardTabs.rank3 && !currentData.slice(21, 31).length && (
              <div className="no-data-found">No Data Found</div>
            )}
          </div>
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
          inputValue={inputValue}
        />
      )}
    </div>
  );
};

export default DiwaliMela;
