import React, { useEffect } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const truncateTitle = (title, maxWord) => {
    let words = title.split(" ");
    return words.slice(0, maxWord).join(" ");
  };

  const truncatedTitle = truncateTitle(item.title, 5);
  const truncatedDesc = truncateTitle(item.description, 5);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("item", item);
    console.log("image Url", item.imageURl, item.id);
  }, []);

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem] ">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.imageURl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <p className="text-zinc-500 font-semibold"> {truncatedTitle}</p>
        <p>{truncatedDesc}</p>

        <div className="flex items-center space-x-2 ">
          <p className="font-semibold"> ₹{item.price}</p>
          <p className="line-through opacity-50"> ₹2100</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
