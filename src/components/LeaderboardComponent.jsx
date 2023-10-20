import React, { useState } from "react";
import { testLeaderData } from "../testData";
import Topper from "./Topper";
import LeaderBoardItem from "./LeaderBoardItem";

const LeaderboardComponent = ({ data }) => {
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const calculateEstRewards = () => {};
  return (
    <div className="leaderboard-comp">
      <div className="toppers-section">
        {data[0] && (
          <div className="pos-1">
            <Topper
              user={data[0]}
              index={1}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
            />
          </div>
        )}
        {data[1] && (
          <div className="pos-2">
            <Topper
              user={data[1]}
              index={2}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
            />
          </div>
        )}
        {data[2] && (
          <div className="pos-3">
            <Topper
              user={data[2]}
              index={3}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
            />
          </div>
        )}
      </div>
      <div className="restWinners-section">
        {data?.slice(3, seeMore ? 10 : 20).map((user, index) => (
          <LeaderBoardItem user={user} index={index + 4} />
        ))}
      </div>
      {data.length > 10 && (
        <button
          className={seeMore ? "see-more" : "see-less"}
          onClick={toggleSeeMore}
        />
      )}
    </div>
  );
};

export default LeaderboardComponent;
