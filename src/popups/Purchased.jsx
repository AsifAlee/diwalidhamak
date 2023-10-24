import React from "react";
import bg from "../assets/images/popups/decorate-game-pop-up.png";
import PopUp from "../components/Popup.jsx";
import cong from "../assets/images/popups/congo-text.png";
import tryAgain from "../assets/images/popups/try-again-text.png";

const Purchased = ({ popUpHandeler }) => {
  return (
    <PopUp bg={bg} game={true}>
      <div className="purchased">
        <img src={cong} className="title" />
        <button className="closeBtn" onClick={popUpHandeler} />

        <div className="purchased-content">
          <p className="p1">
            You've successfully purchased XXX (item name) & have won XXX Beans
            (respective beans rewards).
          </p>

          <p className="p2">
            Continue collecting Festive Tokens to purchase other items.
            Additional Beans rewards are waiting for you this festive season!!
          </p>
        </div>
      </div>
    </PopUp>
  );
};

export default Purchased;