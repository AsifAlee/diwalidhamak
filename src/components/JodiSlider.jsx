import React, { useEffect, useState } from "react";
import SliderDot from "./SliderDot";
import "../styles/jodi-slider.scss";
import JodiComponent from "./JodiComponent";

const JodiSlider = ({ data, showRanks, showIndicators }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  let intervalId = null;
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

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = touchStartX - touchEndX;

    if (touchDifference > 50) {
      // Swipe right to left, go to the next slide
      nextSlide();
    } else if (touchDifference < -50) {
      // Swipe left to right, go to the previous slide
      prevSlide();
    }
  };

  useEffect(() => {
    console.log("component rendered");
    intervalId = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  return (
    <div
      className={`jodi-slider`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* <button onClick={prevSlide}>Prev</button> */}
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
      {/* <button onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default JodiSlider;
