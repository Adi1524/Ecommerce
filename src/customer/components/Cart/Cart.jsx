import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerCart } = useSelector((store) => store);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {customerCart ? (
            customerCart.cartItems?.map((item) => <CartItem item={item} />)
          ) : (
            <h1>Page Is Loading</h1>
          )}
          {}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] py-[2vh] lg:mt-0">
          <div className="border px-5 py-3">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{customerCart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{customerCart.cart?.discount}
                </span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{customerCart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
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
  );
};

export default Cart;
