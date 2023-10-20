import React from "react";
import unknow from "../assets/images/unknown-user.png";
import level from "../assets/images/level-img.png";
import beanIcon from "../assets/images/bean-icon.png";
import gems from "../assets/images/gems.png";
import { getLevelImage, gotoProfile } from "../functions";

import "../styles/leaderboard-item.scss";

const LeaderBoardItem = ({
  index,
  user,
  isTalent,
  showEst,
  calculateEstRewards,
  isPrev,
}) => {
  return (
    <div className="gifttingboard-item">
      <div className="leftDiv">
        <span className="index">{index}.</span>
        <img
          className="users"
          src={user.portrait ? user.portrait : unknow}
          onClick={() => gotoProfile(user.userId)}
        />
        <div className="user-details">
          <span className="name">{user.nickname}</span>
          <img
            // src={getLevelImage(
            //   isTalent ? user.actorLevel : user.userLevel,
            //   isTalent
            // )}
            src={level}
            style={{ width: isTalent && "8vw" }}
          />
        </div>
      </div>
      {showEst && (
        <div className="middleDiv">
          <span>{isPrev ? "Rewards Won" : "Est Rewards"}</span>
          <div className="d-flex al-center">
            <img src={beanIcon} />
            <span>{calculateEstRewards(index)}</span>
          </div>
        </div>
      )}

      <div className="rightDiv">
        <img src={isTalent ? gems : beanIcon} />
        <span>{user.count}</span>
      </div>
    </div>
  );
};

export default LeaderBoardItem;
