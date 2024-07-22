import React from "react";

const HomeSectionCard = ({ image, title, description }) => {
  const truncateDescription = (sentence, maxWord) => {
    let words = sentence.split(" ");
    if (words.length > maxWord) {
      return words.slice(0, maxWord).join(" ") + "...";
    }
    return sentence;
  };

  const truncatedDescription = truncateDescription(description, 6);
  const truncatedTitle = truncateDescription(title, 6);

  return (
    <div className="cursor-pointer flex flex-col items center bg-whiter rounded-lg shadow-lg overflow-hidden w-[12rem] h-[40vh] p-[10px] border border-black ">
      <div className="p-[10px]  h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full "
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-m font-medium text-gray-900">{truncatedTitle}</h3>
        <p className="text-sm text-gray-500">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
