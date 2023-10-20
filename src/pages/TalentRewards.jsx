import React, { useState } from "react";
import TabButton from "../components/TabButtons";
import rewardsText from "../assets/images/rewards-text.png";
import RewardsSlider from "../components/RewardsSlider";
import { talentHourly, talentOverall } from "../constants";

const TalentRewards = () => {
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
        rewards={rewardsTabs.hourly ? talentHourly : talentOverall}
        showRanks={true}
        showIndicators={true}
        tag={rewardsText}
      />
    </div>
  );
};

export default TalentRewards;
