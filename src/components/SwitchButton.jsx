import React, { useState } from "react";
import "../styles/switch.scss";

function SwitchButton({ btn, onToggle, bg }) {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  }

  return (
    <div className="switch" style={{ backgroundImage: `url(${bg})` }}>
      <button
        className={`slider-button ${isOn ? "on" : "off"}`}
        style={{ backgroundImage: `url(${btn})` }}
      >
        {/* {isOn ? "Daily" : "Overall"} */}
      </button>
      <div
        className={`slider-handle ${isOn ? "left" : "right"}`}
        onClick={handleToggle}
      ></div>
    </div>
  );
}

export default SwitchButton;
