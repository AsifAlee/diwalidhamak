import React, { useContext, useState } from "react";
import TabButton from "../components/TabButtons";
import SwitchButton from "../components/SwitchButton";
import switchBg from "../assets/images/current-previous-btn-bg.png";
import currentBtn from "../assets/images/Current-btn.png";
import prevButton from "../assets/images/prev-btn.png";
import LeaderboardComponent from "../components/LeaderboardComponent";
import { userHourlyNow, userHourlyPrev, userOverallData } from "../testData";
import { AppContext } from "../AppContext";
const TalentLeaderBoard = () => {
  const { info, giftingLeaderboardData } = useContext(AppContext);

  const { talentOverall, talentHourlyNow, talentHourlyPrev } =
    giftingLeaderboardData;
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
            ? talentOverall
            : isSliderOn
            ? talentHourlyNow
            : talentHourlyPrev
        }
        isTalent={true}
      />
    </>
  );
};

export default TalentLeaderBoard;
