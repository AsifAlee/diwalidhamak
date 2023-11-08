import React, { useContext, useState } from "react";
import bg from "../assets/images/popups/Rewards-history-bg.png";
import PopUp from "../components/Popup";
import title from "../assets/images/popups/rewards-history-text.png";
import "../styles/popups.scss";
import RewardsHistoryComponent from "../components/RewardsHistoryComp";
import rewardsWon from "../assets/images/diwali-dhamka/rewards-won.png";
import time from "../assets/images/diwali-dhamka/time-text.png";

import { AppContext } from "../AppContext";

const RewardsHistoryPopup = ({ popUpHandler }) => {
  const [loadMore, setLoadMore] = useState(true);

  const toggleLoadMore = () => {
    setLoadMore((prevState) => !prevState);
  };
  const { gameHistoryRec } = useContext(AppContext);
  return (
    <PopUp bg={bg} isRewardHist={true}>
      <div className="rewards-history">
        <img src={title} className="title" />
        <div className="title-div">
          <img src={time} className="time-img" />
          <img src={rewardsWon} className="rewa-img" />
        </div>
        <div className="history-content">
          {gameHistoryRec?.length > 0 ? (
            <>
              {gameHistoryRec?.slice(0, loadMore ? 10 : 20).map((item) => (
                <RewardsHistoryComponent item={item} />
              ))}
            </>
          ) : (
            <div className="no-rec-found">No Record Found</div>
          )}
        </div>
        {gameHistoryRec?.length > 10 && (
          <button
            className={loadMore ? "load-more" : "load-less"}
            onClick={toggleLoadMore}
          />
        )}

        <button className="closeBtn" onClick={popUpHandler} />
      </div>
    </PopUp>
  );
};

export default RewardsHistoryPopup;
{
  /* <div className="title-div">
            <span>Time(GMT)</span>
            <span>Rewards</span>
          </div>

          <RewardsHistoryComponent item={[]} /> */
}
