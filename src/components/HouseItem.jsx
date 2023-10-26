import React from "react";
import { getRewardsImage } from "../functions";

const HouseItem = ({ item, toggleRSurePopuo, setItemId }) => {
  return (
    <div className="house-item">
      <div className="item-details">
        <img src={getRewardsImage("adfdf")} />
        <p>{item.name}</p>
        <p>{item.tokens}</p>
        <button
          className="purchase-single"
          onClick={() => {
            toggleRSurePopuo();
            setItemId(item.id);
          }}
        />
      </div>
    </div>
  );
};

export default HouseItem;
