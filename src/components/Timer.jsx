// import React, { useState, useEffect } from "react";
// import TimeUnit from "./TimeUnit";

// function CountdownTimer() {
//   const [remainingTime, setRemainingTime] = useState(0);

//   const calculateRemainingTime = () => {
//     const now = new Date();
//     const targetTime = new Date();

//     // Set the target time to 5 PM today
//     targetTime.setHours(17, 0, 0, 0);

//     // If it's past 5 PM, set the target time to 5 AM tomorrow
//     if (now >= targetTime) {
//       targetTime.setDate(targetTime.getDate() + 1);
//       targetTime.setHours(5, 0, 0, 0);
//     }

//     // Calculate the remaining time in seconds(
//     // console.log("target time:", targetTime);
//     console.log("now time:", targetTime - now);

//     return Math.floor((targetTime - now) / 1000);
//   };

//   const updateRemainingTime = () => {
//     setRemainingTime(calculateRemainingTime());
//   };

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       if (remainingTime > 0) {
//         setRemainingTime(remainingTime - 1);
//       } else {
//         updateRemainingTime(); // Reset the timer at 5 PM
//       }
//     }, 1000);

//     return () => {
//       clearInterval(countdownInterval);
//     };
//   }, [remainingTime]);

//   // Convert remaining seconds to hours, minutes, and seconds
//   const hours = Math.floor(remainingTime / 3600);
//   const minutes = Math.floor((remainingTime % 3600) / 60);
//   const seconds = remainingTime % 60;

//   return (
//     <div>
//       <div className="d-flex p-rel al-center" style={{ left: "5vw" }}>
//         <TimeUnit unit="Hr" value={hours < 10 ? `0${hours}` : hours} />
//         <span className="timer-colon">:</span>
//         <TimeUnit unit="Min" value={minutes < 10 ? `0${minutes}` : minutes} />
//         <span className="timer-colon">:</span>
//         <TimeUnit unit="Sec" value={seconds < 10 ? `0${seconds}` : seconds} />
//       </div>
//     </div>
//   );
// }

// export default CountdownTimer;

import React, { useState, useEffect } from "react";
import TimeUnit from "./TimeUnit";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    let nextRestartTime = new Date(now);

    if (currentHour < 5 || (currentHour === 5 && now.getMinutes() < 0)) {
      nextRestartTime.setHours(5, 0, 0, 0);
    } else if (currentHour >= 5 && currentHour < 17) {
      nextRestartTime.setHours(17, 0, 0, 0);
    } else {
      nextRestartTime.setDate(now.getDate() + 1);
      nextRestartTime.setHours(5, 0, 0, 0);
    }

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = nextRestartTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
        // You can trigger some action when the countdown ends here.
      } else {
        const hours = Math.floor(timeDifference / 3600000);
        const minutes = Math.floor((timeDifference % 3600000) / 60000);
        const seconds = Math.floor((timeDifference % 60000) / 1000);
        setTimeRemaining({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <h2>Countdown Timer</h2> */}
      <div>
        {/* {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds} */}
        <div className="d-flex p-rel al-center" style={{ left: "5vw" }}>
          <TimeUnit
            unit="Hr"
            value={
              timeRemaining.hours < 10
                ? `0${timeRemaining.hours}`
                : timeRemaining.hours
            }
          />
          <span className="timer-colon">:</span>
          <TimeUnit
            unit="Min"
            value={
              timeRemaining.minutes < 10
                ? `0${timeRemaining.minutes}`
                : timeRemaining.minutes
            }
          />
          <span className="timer-colon">:</span>
          <TimeUnit
            unit="Sec"
            value={
              timeRemaining.seconds < 10
                ? `0${timeRemaining.seconds}`
                : timeRemaining.seconds
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
