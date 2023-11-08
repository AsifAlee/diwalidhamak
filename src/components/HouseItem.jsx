import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

const HouseItem = ({ item, toggleRSurePopuo, setItemId, index }) => {
  const { info } = useContext(AppContext);
  // console.log("the item is:", id);
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    if (info?.houseInfoList.find((it) => it == item.id)) {
      setIsPurchased(true);
    } else {
      setIsPurchased(false);
    }
  }, [info]);

  return (
    <div
      className={`house-item ${
        index === 1
          ? "lantern"
          : index === 2
          ? "lights"
          : index === 3
          ? "sofa"
          : index === 4
          ? "study-area"
          : "bed"
      }`}
    >
      <div className="item-details">
        <img
          src={item?.img}
          className={
            index === 1
              ? "lantern-img"
              : index === 2
              ? "lights-img"
              : index === 3
              ? "sofa-img"
              : index === 4
              ? "study-table-img"
              : "bed-img"
          }
          style={{
            filter: !isPurchased && "grayScale(1)",
          }}
        />

        {!isPurchased && (
          <button
            className={`purchase-single ${
              index === 1
                ? "lantern-btn"
                : index === 2
                ? "lights-btn"
                : index === 3
                ? "study-btn"
                : index === 4
                ? "sofa-btn"
                : "bed-btn"
            }`}
            onClick={() => {
              setItemId(item.id);
              toggleRSurePopuo();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HouseItem;
