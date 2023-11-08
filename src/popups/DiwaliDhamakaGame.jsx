import React from "react";
import bg from "../assets/images/popups/decorate-game-pop-up.png";
import PopUp from "../components/Popup.jsx";
import hurrah from "../assets/images/popups/Hurrah-text.png";
import tryAgain from "../assets/images/popups/try-again-text.png";
import { getRewardsImage } from "../functions";

const DiwaliDhamakaGame = ({
  popUpHandeler,
  errorCode,
  gameRewards,
  errMsg,
  inputValue,
}) => {
  return (
    <PopUp bg={bg} game={true}>
      <div className="dhamaka-game">
        <img src={errorCode === 0 ? hurrah : tryAgain} className="title" />
        <button className="closeBtn" onClick={popUpHandeler} />
        {inputValue.toString().includes(".") ? (
          <div className="dhamaka-content">Please enter integer value</div>
        ) : errorCode === 10000004 ? (
          <div className="dhamaka-content">
            To have an opportunity to take a shot, please send event gifts
            valued at 25k beans. Once you have done so, you can start playing.
            Join us soon!
          </div>
        ) : errorCode === 0 ? (
          <div className="dhamaka-content">
            <div className="p1">
              <p>
                That was a perfect shot. For this wonderful performance we would
                like to reward you with
              </p>
              <div className="rewards-area">
                {gameRewards.length &&
                  gameRewards.map((reward) => (
                    <div className="rew-item">
                      <img src={getRewardsImage(reward)} />
                      <p>{reward}</p>
                    </div>
                  ))}
              </div>
            </div>

            <p className="p2">
              TIP: Collect maximum Festive Tokens to earn additional Beans
              rewards
            </p>
          </div>
        ) : (
          <div className="dhamaka-content">{errMsg}</div>
        )}
      </div>
    </PopUp>
  );
};

export default DiwaliDhamakaGame;
