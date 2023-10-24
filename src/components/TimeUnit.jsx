import React from "react";

const TimeUnit = ({ unit, value }) => {
  console.log("value is:", value);
  return (
    <div className="time-unit">
      <div className="value">{value}</div>
      <p className="unit center">{unit}</p>
    </div>
  );
};

export default TimeUnit;
