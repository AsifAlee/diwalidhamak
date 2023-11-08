import React, { useEffect, useState } from "react";
import "../styles/popups.scss";
import bg from "../assets/images/popups/purchase-popup-bg.png";
import PopUp from "../components/Popup";
import title from "../assets/images/popups/ruSure.png";
import Loader from "../components/Loader";
const AreUSure = ({
  popUpHandeler,
  tokens = 0,
  purchaseItem,
  id,
  purchaseAll,
  isDisabled,
  info,
}) => {
  // console.log("the id is:", id);
  const [purchasedAllAmount, setPuchasedAllAmount] = useState(0);

  const calculatePrice = () => {
    let price = 0;

    info?.houseInfoList?.forEach((element) => {
      if (element == 1) {
        price += 3000;
      } else if (element == 2) {
        price += 7000;
      } else if (element == 3) {
        price += 10000;
      } else if (element == 4) {
        price += 16000;
      } else if (element == 5) {
        price += 20000;
      }
    });
    return price;
  };

  useEffect(() => {
    setPuchasedAllAmount(56000 - calculatePrice());
  }, info);
  return (
    <PopUp bg={bg} sure={true}>
      <div className="areUSure">
        <img src={title} className="title" />
        {purchaseAll ? (
          <div className="sure-content">
            {purchasedAllAmount} tokens Festive Tokens will be deducted from
            your account if you want to purchase this item.
          </div>
        ) : (
          <div className="sure-content">
            {tokens} Festive Tokens will be deducted from your account if you
            want to purchase this item.
          </div>
        )}
        {isDisabled && (
          <div style={{ position: "absolute", top: "22vw", left: "37vw" }}>
            <Loader />
          </div>
        )}
        <button
          className={`purchase-btn ${isDisabled && "blackNWhite"}`}
          onClick={() => {
            if (isDisabled) {
              return;
            }
            purchaseItem(id);
          }}
          disabled={isDisabled}
        />
        <button className="closeBtn" onClick={popUpHandeler} />
      </div>
    </PopUp>
  );
};

export default AreUSure;
