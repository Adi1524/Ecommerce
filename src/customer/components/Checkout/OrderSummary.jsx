import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {

return(
    <div>
        <div className="border rounded-sm p-5 shadow-md">
            <AddressCard/>
        </div>

        <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1,1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] py-[2vh] lg:mt-0">
          <div className="border px-5 py-3">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹3419</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full h-[5vh] bg-[#9155fd]"
              sx={{
                bgcolor: "#9155fd",
                px: "2.5rem",
                py: ".7rem",
              }}
            >
              checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
)};

export default OrderSummary;
