import React, { useContext, useState } from "react";
import "../styles/header.scss";
import Guide from "../popups/Guide";
import LanguageDropdown from "./LanguageDropDown";
import { AppContext } from "../AppContext";
const Header = () => {
  // const [showGuide, setShowGuide] = useState(false);
  const { selectedLng, changeLanguage } = useContext(AppContext);

  // const toggleGuide = () => {
  //   setShowGuide((prevState) => !prevState);
  // };
  return (
    <div className="header">
      {/* <button className="guide-btn" onClick={toggleGuide}></button> */}
      <LanguageDropdown
        selectedLanguage={selectedLng}
        changeLanguage={changeLanguage}
      />
      {/* {showGuide && <Guide popUpHandeler={toggleGuide} />} */}
    </div>
  );
};

export default Header;
