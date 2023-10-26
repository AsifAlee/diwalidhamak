import React, { useCallback, useContext, useState } from "react";
import giftsTitle from "../assets/images/event-gifting-tag.png";
import "../styles/gifting.scss";
import Gift from "../components/Gift";
import bean from "../assets/images/bean-icon.png";
import TabButton from "../components/TabButtons";
import UseRewards from "./UseRewards";
import TalentRewards from "./TalentRewards";
import UserLeaderBoard from "./UserLeaderBoard";
import TalentLeaderBoard from "./TalentLeaderBoard";
import { AppContext } from "../AppContext";
const EventGifting = () => {
  const { info } = useContext(AppContext);
  const [rewardsTabs, setRewardsTabs] = useState({
    user: true,
    talent: false,
  });
  const [boardTabs, setBoardTabs] = useState({
    user: true,
    talent: false,
  });
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

  const toggleBoardTabs = (name) => {
    if (name === "user") {
      setBoardTabs({
        user: true,
        talent: false,
      });
    } else if (name === "talent") {
      setBoardTabs({
        user: false,
        talent: true,
      });
    }
  };

  return (
    <div className="event-gifting">
      <div className="event-gifts">
        <img className="title" src={giftsTitle} />
        <div className="gifts-row">
          <Gift id="40001322" name="Balle Balle" price="200" />
          <Gift id="40001499" name="You're the best!" price="8000" />
          <Gift id="40001508" name="Celebrations" price="50,000" />
        </div>
      </div>
      <div className="beans-pot">
        <p className="text">
          Overall Beans pot will be rewarded to TOP 5 users rankings on the
          Overall Leaderboard.
        </p>
        <div className="pot-value">
          <span>{info.overallBeansPot}</span>
          <img src={bean} />
        </div>
      </div>
      <div className="rewards">
        <div className="rewards-tabs">
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

        {rewardsTabs.user ? <UseRewards /> : <TalentRewards />}
      </div>
      <div className="gifting-leaderboard-sec">
        <div className="board-tabs d-flex j-sa">
          <TabButton
            handleClick={toggleBoardTabs}
            name="user"
            btnImg={boardTabs.user ? "user-sel" : "user-un"}
            arrowImage={false}
            showArrowImg={false}
          />
          <TabButton
            handleClick={toggleBoardTabs}
            name="talent"
            btnImg={boardTabs.talent ? "talent-sel" : "talent-un"}
            arrowImage={false}
            showArrowImg={false}
          />
        </div>
        {boardTabs.user ? <UserLeaderBoard /> : <TalentLeaderBoard />}
      </div>
    </div>
  );
};

export default EventGifting;
