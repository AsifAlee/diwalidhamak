import React, { createContext, useEffect, useState } from "react";
import { baseUrl, testUserId } from "./api";
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
  const date = new Date();
  const dateStr = date.toISOString().split("T")[0];

  const hour = date.getUTCHours();
  const prevHour = hour - 1;

  const [giftingLeaderboardData, setGiftingLeaderboardData] = useState({
    userOverll: [],
    talentOverall: [],
    userHourlyNow: [],
    userHourlyPrev: [],
    talentHourlyNow: [],
    talentHourlyPrev: [],
  });
  const [partnershipData, setPartnershipData] = useState({
    current: [],
    prev: [],
  });
  const [diwaliGameLeaderboard, setDiwaliGameLeaderboard] = useState([]);
  const [decorGameLeaderboard, setDecorGameLeaderboard] = useState([]);
  const [gameHistoryRec, setGameHistoryRec] = useState([]);
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  const getInfo = () => {
    fetch(
      `${baseUrl}/api/activity/diwaliMela/getUserEventInfo?userId=${testUserId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setInfo({
            ...info,
            overallBeansPot: response.data.overallBeansPot,
            partnershipBeansPot: response.data.partnershipBeansPot,
            gamePoints: Math.floor(response.data.gamePoints / 25000),
            festiveToken: response.data.festiveToken,
          });
        })
      )
      .catch((error) => {});
  };

  useEffect(() => {
    getInfo();
  }, [user]);
  useEffect(() => {
    getTalentOverall();
    getUserOverall();
    getGameRewardHistroy();
    getGameRewardLeaderboard();
    getDecorateGameLeaderboard();
    getUserHourly();
    getUserHourlyPrev();
    getTalentHourly();
    getTalentHourlyPrev();
    getPartnershipData(1);
    getPartnershipData(0);
  }, [info]);

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

  const getUserOverall = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=11&pageNum=1&pageSize=20&dayIndex=1`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            userOverll: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getUserHourly = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${
        dateStr + "_" + hour
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            userHourlyNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getUserHourlyPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${
        dateStr + "_" + prevHour
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            userHourlyPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getTalentHourly = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${
        dateStr + "_" + hour
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            talentHourlyNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getTalentHourlyPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${
        dateStr + "_" + prevHour
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            talentHourlyPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getTalentOverall = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231108_diwali&rankIndex=12&pageNum=1&pageSize=20&dayIndex=1`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboardData((prevState) => ({
            ...prevState,
            talentOverall: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getGameRewardHistroy = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20231108_diwali&rankIndex=21&pageNum=1&pageSize=20&type=1&userId=${user.userId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGameHistoryRec(response.data.list);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getGameRewardLeaderboard = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20231108_diwali&rankIndex=2&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setDiwaliGameLeaderboard(response.data.list);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getDecorateGameLeaderboard = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20231108_diwali&rankIndex=3&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setDecorGameLeaderboard(response.data.list);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getPartnershipData = (id) => {
    fetch(
      `${baseUrl}/api/activity/diwaliMela/getPartnerShipRankInfo?isCurrent=${id}&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          if (id == 1) {
            setPartnershipData((prevState) => ({
              ...prevState,
              current: response?.data?.list || [],
            }));
          } else {
            setPartnershipData((prevState) => ({
              ...prevState,
              prev: response?.data?.list || [],
            }));
          }
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        selectedLng,
        changeLanguage,
        info,
        giftingLeaderboardData,
        gameHistoryRec,
        diwaliGameLeaderboard,
        decorGameLeaderboard,
        getInfo,
        getGameRewardHistroy,
        partnershipData,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default EventProvider;
