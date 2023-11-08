import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
import { useEffect } from "react";
import TimeUnit from "./TimeUnit";

const CountDownTimerFromBe = () => {
  const { info } = useContext(AppContext);
  // let { startTime, endTime } = info;
  let endTime = 1700870400000;
  const [hrs, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");
  //   const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;
    let t = 1699012800000;
    const interval = setInterval(() => {
      endTime--;
      // console.log("endTime is:", endTime);

      // Calculate the number of days, hours, minutes, and seconds
      const days = Math.floor(endTime / oneDay);
      const hours = Math.floor((endTime % oneDay) / oneHour);
      const minutes = Math.floor((endTime % oneHour) / oneMinute);
      const seconds = Math.floor((endTime % oneMinute) / oneSecond);

      if (endTime <= 0) {
        clearInterval(interval);
        setHours("");
        setMins("");
        setSecs("");
        // You can trigger some action when the countdown ends here.
      } else {
        // console.log("hours:", hours);

        // console.log("mins:", minutes);

        // console.log("secs:", seconds);

        setHours(hours);
        setMins(minutes);
        setSecs(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [info]);

  return (
    <div>
      <div className="d-flex p-rel al-center" style={{ left: "5vw" }}>
        <TimeUnit unit="Hr" value={hrs < 10 ? `0${hrs}` : hrs} />
        <span className="timer-colon">:</span>
        <TimeUnit unit="Min" value={mins < 10 ? `0${mins}` : mins} />
        <span className="timer-colon">:</span>
        <TimeUnit unit="Sec" value={secs < 10 ? `0${secs}` : secs} />
      </div>
    </div>
  );
};

export default CountDownTimerFromBe;
