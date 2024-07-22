import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="py-[2vh]">
      <div className="border w-full   p-5 ">
        <div className="flex">
          <img
            src="https://m.media-amazon.com/images/I/71DzpXxp7lL._SX679_.jpg"
            alt=""
            className=" h-[15vh] object-cover object-fit overflow-hidden"
          />

          <div className="pl-6">
            <p>YUFTA Women Maroon Solid Rayon Maxi</p>
            <p className="text-zinc-400">Size: L, maroon</p>
            <p className="text-zinc-400">Seller: Sara Ali Khan</p>

            <div className="space-x-5 pt-3 text-lg lg:text-xl">
              <span className="font-semibold ">₹199</span>
              <span className="line-through opacity-60 ">₹499</span>
              <span className="font-semibold text-green-600">5% Off</span>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-4 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} /> </IconButton>
            

            <span className="py-1 px-7 border rounded-sm">3</span>
         
            <IconButton> <AddCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} /></IconButton>
         
          </div>

          <div>
            <Button>remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
