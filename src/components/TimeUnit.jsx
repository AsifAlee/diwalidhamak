import React from "react";

const TimeUnit = ({ unit }) => {
  return (
    <div className="time-unit">
      <div className="value">12</div>
      <p className="unit center">{unit}</p>
    </div>
  );
};

export default TimeUnit;
