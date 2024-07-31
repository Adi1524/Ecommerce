import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  console.log("item from cartItem:", item);

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    console.log();
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    const data = { cartItemId: item?.id, jwt };
    dispatch(removeCartItem(data.cartItemId));
  };

  return (
    <div className="py-[2vh]">
      <div className="border w-full p-5">
        <div className="flex">
          <img
            src={item.product?.imageURl}
            alt={item.title}
            className="h-[15vh] object-cover overflow-hidden"
          />

          <div className="pl-6">
            <p>{item.title}</p>
            <p className="text-zinc-400">
              Size: {item.size}, {item.product?.color}
            </p>
            <p className="text-zinc-400">Seller: {item.brand}</p>

            <div className="space-x-5 pt-3 text-lg lg:text-xl">
              <span className="font-semibold ">
                ₹{item.product?.discountedPrice}
              </span>
              <span className="line-through opacity-60 ">₹{item.price}</span>
              <span className="font-semibold text-green-600">
                {item.product?.discountedPercent}% Off
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-4 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton onClick={() => handleUpdateCartItem(-1)}>
              <RemoveCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>

            <IconButton onClick={() => handleUpdateCartItem(1)}>
              <AddCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} />
            </IconButton>
          </div>

          <div>
            <Button onClick={handleRemoveCartItem}>remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
