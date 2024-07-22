import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../components/HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const carouselRef = useRef(null);

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  if (!data || data.length === 0) {
    return <p>No products available</p>;
  }

  const items = data.map((item, index) => (
    <HomeSectionCard
      key={index}
      image={item.image}
      description={item.description}
      title={item.title}
    />
  ));

  return (
    <div className="border">
      <div className="relative p-10">
        <h1 className="text-xl font-weight-300 ">{sectionName}</h1>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
        />
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slideNext}
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>

        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
          onClick={slidePrev}
        >
          <ArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
