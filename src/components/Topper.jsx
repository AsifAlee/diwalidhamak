import React from "react";

import rank1 from "../assets/images/top-1-frame.png";
import rank2 from "../assets/images/top-2-frame.png";
import rank3 from "../assets/images/top-3-frame.png";
import levelImg from "../assets/images/level-img.png";
import beans from "../assets/images/bean-icon.png";
import gems from "../assets/images/gems.png";

import unknown from "../assets/images/unknown-user.png";

import "../styles/topper.scss";
import { getLevelImage, gotoProfile } from "../functions";

const Topper = (props) => {
  const {
    index,
    user,
    isTalent,
    calculateEstRewards,
    showEst,
    isPrev,
    isRound,
    roundValue,
  } = props;

  return (
    <div className="topper">
      <div className="topper-images" onClick={() => gotoProfile(user.userId)}>
        <img
          src={index === 1 ? rank1 : index === 2 ? rank2 : rank3}
          className={index === 1 ? "rank" : index === 2 ? "rank2" : "rank3"}
        />
        <img src={user.avatar ? user.avatar : unknown} className="user" />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        <img
          //   src={getLevelImage(
          //     isTalent ? user.actorLevel : user.userLevel,
          //     isTalent
          //   )}
          src={levelImg}
          className="levelImg"
          style={{ width: isTalent && "6vw" }}
        />
        {showEst && (
          <div className="estimatedBeans">
            <span>{isPrev ? "Rewards won" : "Est Rewards"}</span>
            <div className="d-flex j-center al-center">
              <img src={beans} />
              <span>{calculateEstRewards(index)}</span>
            </div>
          </div>
        )}

        <div className="beans-spent">
          <img src={isTalent ? gems : beans} />
          <span>{user.count}</span>
        </div>
      </div>
    </div>
  );
};
export default Topper;
