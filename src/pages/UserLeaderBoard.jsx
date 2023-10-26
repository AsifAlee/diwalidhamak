import React, { useContext, useState } from "react";
import TabButton from "../components/TabButtons";
import SwitchButton from "../components/SwitchButton";
import switchBg from "../assets/images/current-previous-btn-bg.png";
import currentBtn from "../assets/images/Current-btn.png";
import prevButton from "../assets/images/prev-btn.png";
import LeaderboardComponent from "../components/LeaderboardComponent";
import { userHourlyNow, userHourlyPrev, userOverallData } from "../testData";
import { AppContext } from "../AppContext";
import { userOverallPot } from "../beansPot";

const UserLeaderBoard = () => {
  const { info, giftingLeaderboardData } = useContext(AppContext);
  const { userOverll, userHourlyNow, userHourlyPrev } = giftingLeaderboardData;

  const [boardTabs, setBoardTabs] = useState({
    hourly: true,
    overall: false,
  });
  const [isSliderOn, setIsSliderOn] = useState(false);
  const toggleBoardTabs = (name) => {
    setIsSliderOn(false);
    if (name === "hourly") {
      setBoardTabs({
        hourly: true,
        overall: false,
      });
    } else if (name === "overall") {
      setBoardTabs({
        hourly: false,
        overall: true,
      });
    }
  };
  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }

  const calculateEstRewards = (index) => {
    const percent = userOverallPot.find((item) => item.rank === index).percent;
    const result = Math.floor((percent / 100) * info.overallBeansPot);

    return result;
  };
  return (
    <>
      <div className="d-flex j-sa">
        <TabButton
          handleClick={toggleBoardTabs}
          name="hourly"
          btnImg={boardTabs.hourly ? "hourly-sel" : "hourly-un"}
          arrowImage={false}
          showArrowImg={false}
          width="22vw"
          height="7vw"
        />
        <TabButton
          handleClick={toggleBoardTabs}
          name="overall"
          btnImg={boardTabs.overall ? "overall-sel" : "overall-un"}
          arrowImage={false}
          showArrowImg={false}
          width="22vw"
          height="7vw"
        />
      </div>
      {boardTabs.hourly && (
        <SwitchButton
          bg={switchBg}
          onToggle={handleSliderToggle}
          btn={isSliderOn ? prevButton : currentBtn}
        />
      )}

      <LeaderboardComponent
        data={
          boardTabs.overall
            ? userOverll
            : isSliderOn
            ? userHourlyNow
            : userHourlyPrev
        }
        isTalent={false}
        showEst={boardTabs.overall}
        calculateEstRewards={calculateEstRewards}
      />
    </>
  );
};

export default UserLeaderBoard;
