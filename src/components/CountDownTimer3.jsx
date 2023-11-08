import React, { useEffect, useState } from "react";
import TimeUnit from "./TimeUnit";

function CountdownTimer3({ targetTimestamp }) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetTimestamp - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetTimestamp]);

  return (
    <div>
      {/* <h2>Countdown Timer</h2>
      <div className="countdown">
        <p>Days: {remainingTime.days}</p>
        <p>Hours: {remainingTime.hours}</p>
        <p>Minutes: {remainingTime.minutes}</p>
        <p>Seconds: {remainingTime.seconds}</p>
      </div> */}

      <div
        className="d-flex p-rel al-center"
        // style={{ left: "5vw", top: "8vw" }}
      >
        <TimeUnit unit="Hr" value={remainingTime.hours} />
        <span className="timer-colon">:</span>
        <TimeUnit unit="Min" value={remainingTime.minutes} />
        <span className="timer-colon">:</span>
        <TimeUnit unit="Sec" value={remainingTime.seconds} />
      </div>
    </div>
  );
}

export default CountdownTimer3;
