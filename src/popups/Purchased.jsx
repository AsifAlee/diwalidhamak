import React from "react";
import bg from "../assets/images/popups/decorate-game-pop-up.png";
import PopUp from "../components/Popup.jsx";
import cong from "../assets/images/popups/congo-text.png";
import yay from "../assets/images/popups/yay-text.png";
import oops from "../assets/images/popups/oops-text.png";
import bean from "../assets/images/bean-icon.png";

const Purchased = ({
  popUpHandeler,
  errorCode,
  errMsg,
  name,
  rewardsContent,
  allUnlocked,
}) => {
  return (
    <PopUp bg={bg} game={true}>
      <div className="purchased">
        <img
          src={allUnlocked ? yay : errorCode === 0 ? cong : oops}
          className="title"
        />
        <button className="closeBtn" onClick={() => popUpHandeler(true)} />
        {errorCode === 0 ? (
          <div className="purchased-content">
            {allUnlocked ? (
              <p className="p1">
                You've successfully purchased all the new items for your house.
                You've won {rewardsContent} <img src={bean} />. Congratulations.
                Enjoy this festive season with us!!
              </p>
            ) : (
              <>
                <p className="p1">
                  You've successfully purchased {name} & have won{" "}
                  {rewardsContent} <img src={bean} />.
                </p>

                <p className="p2">
                  Continue collecting Festive Tokens to purchase other items.
                  Additional Beans rewards are waiting for you this festive
                  season!!
                </p>
              </>
            )}
          </div>
        ) : errorCode === 10000004 ? (
          <div className="purchased-content">
            Your attempt to purchase this item was unsuccessful. Please collect
            the required Festive Tokens to win additional Beans.
          </div>
        ) : (
          <div className="purchased-content">{errMsg}</div>
        )}
      </div>
    </PopUp>
  );
};

export default Purchased;
