import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { toolList } from "./ToolsElements";
import "./Tools.scss";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mediaQueries from "../../utils/mediaQueries";

const slidesPerScreenSizeMap = {
  small: 1.5,
  medium: 3.5,
  large: 4.5,
};

const Tools: React.FC = () => {
  const determineScreenSize = () =>
    mediaQueries.is_small_only()
      ? "small"
      : mediaQueries.is_medium_only()
      ? "medium"
      : "large";
  const [screenSize, setScreenSize] = useState<string>(determineScreenSize());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(determineScreenSize());
    });
  }, []);

  return (
    <div className="tools-container">
      <h1>Technologies I Work With</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        grabCursor
        slidesPerView={
          slidesPerScreenSizeMap[
            screenSize as keyof typeof slidesPerScreenSizeMap
          ]
        }
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
        navigation
        pagination={{ clickable: true }}
      >
        {toolList.map((el) => (
          <SwiperSlide key={el.id} style={{ listStyle: "none" }}>
            <img src={el.image} alt={el.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tools;
