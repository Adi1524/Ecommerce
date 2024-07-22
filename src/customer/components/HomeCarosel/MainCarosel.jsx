import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaroselData } from "./mainCaroselData";

const items = mainCaroselData.map((item) => (
  <img
    src={item.image}
    className="cursor-pointer h-[40vh] w-full z-[-1]"
    alt=""
  ></img>
));

const MainCarosel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
  />
);

export default MainCarosel;
