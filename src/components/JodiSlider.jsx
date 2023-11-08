import React, { useEffect, useState } from "react";
import SliderDot from "./SliderDot";
import "../styles/jodi-slider.scss";
import JodiComponent from "./JodiComponent";
import { useSwipeable } from "react-swipeable";

const JodiSlider = ({ data, showRanks, showIndicators }) => {
  console.log("jodi data is:", data);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [touchStartX, setTouchStartX] = useState(null);

  let intervalId = null;

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === data.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? data.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  return (
    <div className={`jodi-slider`} {...handlers}>
      <div className="slider-content">
        <JodiComponent currentData={data[currentIndex]} />

        {showIndicators && (
          <div className="indicators">
            {data.map((item, index) => (
              <SliderDot isActive={index === currentIndex} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JodiSlider;
