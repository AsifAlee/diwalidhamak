import React, { useState } from "react";
import TabButton from "../components/TabButtons";
import RewardsSlider from "../components/RewardsSlider";
import { userHourly, userOverall } from "../constants";
import rewardsText from "../assets/images/rewards-text.png";

const UseRewards = () => {
  const [rewardsTabs, setRewardsTabs] = useState({
    hourly: true,
    overall: false,
  });
  const toggleRewardsTabs = (name) => {
    if (name === "hourly") {
      setRewardsTabs({
        hourly: true,
        overall: false,
      });
    } else if (name === "overall") {
      setRewardsTabs({
        hourly: false,
        overall: true,
      });
    }
  };
  return (
    <div>
      <div className="d-flex j-sa">
        <TabButton
          handleClick={toggleRewardsTabs}
          name="hourly"
          btnImg={rewardsTabs.hourly ? "hourly-sel" : "hourly-un"}
          arrowImage={false}
          showArrowImg={false}
          width="20vw"
          height="7vw"
        />
        <TabButton
          handleClick={toggleRewardsTabs}
          name="overall"
          btnImg={rewardsTabs.overall ? "overall-sel" : "overall-un"}
          arrowImage={false}
          showArrowImg={false}
          width="20vw"
          height="7vw"
        />
      </div>
      <RewardsSlider
        isMultiRewards={false}
        rewards={rewardsTabs.hourly ? userHourly : userOverall}
        showRanks={true}
        showIndicators={true}
        tag={rewardsText}
      />
    </div>
  );
};

export default UseRewards;
