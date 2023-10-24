import React from "react";
import "../styles/popups.scss";
import bg from "../assets/images/popups/purchase-popup-bg.png";
import PopUp from "../components/Popup";
import title from "../assets/images/popups/ruSure.png";
const AreUSure = ({ popUpHandeler, togglePurchasePopup }) => {
  return (
    <PopUp bg={bg} sure={true}>
      <div className="areUSure">
        <img src={title} className="title" />
        <div className="sure-content">
          XXXX Festive Tokens will be deducted from your account if you want to
          purchase this item.
        </div>
        <button
          className="purchase-btn"
          onClick={() => {
            popUpHandeler();
            togglePurchasePopup();
          }}
        />
        <button className="closeBtn" onClick={popUpHandeler} />
      </div>
    </PopUp>
  );
};

export default AreUSure;
