import React, { createContext, useEffect, useState } from "react";
import { baseUrl } from "./api";
export const AppContext = createContext("");
const EventProvider = ({ children }) => {
  const [selectedLng, setSelectedLng] = useState(1);
  const [info, setInfo] = useState({
    overallBeansPot: 0,
    partnershipBeansPot: null,
    gamePoints: 0,
    festiveToken: 0,
  });
  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  const getInfo = () => {
    fetch(
      `${baseUrl}/api/activity/diwaliMela/getUserEventInfo?userId=${user.userId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setInfo({
            ...info,
            overallBeansPot: response.data.overallBeansPot,
            partnershipBeansPot: response.data.partnershipBeansPot,
            gamePoints: response.data.gamePoints,
            festiveToken: response.data.festiveToken,
          });
        })
      )
      .catch((error) => {});
  };

  useEffect(() => {
    getInfo();
  }, [user.userId]);

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          userId: userInfo?.userId ? userInfo?.userId : 0,
          token: userInfo?.token ? userInfo?.token : "",
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedLng,
        changeLanguage,
        info,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default EventProvider;
