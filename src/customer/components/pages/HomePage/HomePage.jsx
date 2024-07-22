import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../../HomeSectionCarosel/HomeSectionCarosel";
import { productList } from "../../../mens/productList";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <div className=" space-y-10 py-20  flex flex-col justify-center  px-10">
        <HomeSectionCarosel data={productList} sectionName={"Electronics"} />

        <HomeSectionCarosel data={productList} />

        <HomeSectionCarosel data={productList} />

        <HomeSectionCarosel data={productList} />

        <HomeSectionCarosel data={productList} />
        <HomeSectionCarosel data={productList} />
      </div>
    </div>
  );
};

export default HomePage;
