import React from "react";
import bg from "../assets/images/popups/Rewards-history-bg.png";
import PopUp from "../components/Popup";
import title from "../assets/images/popups/rewards-history-text.png";
import "../styles/popups.scss";
import RewardsHistoryComponent from "../components/RewardsHistoryComp";

const RewardsHistoryPopup = ({ popUpHandler }) => {
  return (
    <PopUp bg={bg} isRewardHist={true}>
      <div className="rewards-history">
        <img src={title} className="title" />
        <div className="history-content">
          {/* {rewardsHistory?.length > 0 ? (
            <>
              <div className="title-div">
                <span>Date/Time</span>
                <span>Rewards</span>
              </div>
              {rewardsHistory?.map((item) => (
                <RewardsHistoryComponent item={item} />
              ))}
            </>
          ) : (
            <div className="no-rec-found">No Record Found</div>
          )} */}
          <div className="title-div">
            <span>Time(GMT)</span>
            <span>Rewards</span>
          </div>

          <RewardsHistoryComponent item={[]} />
        </div>
        <button className="closeBtn" onClick={popUpHandler} />
      </div>
    </PopUp>
  );
};

export default RewardsHistoryPopup;
