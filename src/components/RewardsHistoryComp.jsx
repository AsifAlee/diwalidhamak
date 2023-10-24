import React from "react";
import "../styles/rewards-history-comp.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import { leaderBoardSliderData } from "../testData";

const RewardsHistoryComponent = ({ item }) => {
  let sliderData;
  const formatData = (originalArray) => {
    //     const newArray = [];
    //     for (let i = 0; i < originalArray?.length; i += 2) {
    //       newArray?.push(originalArray?.slice(i, i + 2));
    //     }
    //     return newArray;
    //   };
    //   if (item.rewardDTOList) {
    //     sliderData = formatData(item?.rewardDTOList);
  };

  return (
    <div className="rewards-hist-comp">
      <div className="time">
        {/* <span>{item.time.split("T")[0]}</span>
        <span>{item.time.split("T")[1].split(".")[0]}</span> */}
        <span>"23/10/2023"</span>
        <span>09:15:37</span>
      </div>
      <div className="">
        <LeaderBoardSlider rewards={leaderBoardSliderData} isHistory={true} />
      </div>
    </div>
  );
};

export default RewardsHistoryComponent;
