import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { customerOrder } = useSelector((store) => store);
  console.log("order id", orderId);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  console.log("order items", customerOrder.order?.orderItems);
  return (
    <div>
      <div className="border rounded-sm p-5 shadow-md">
        <AddressCard address={customerOrder.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {customerOrder.order ? (
              customerOrder.order?.orderItems.map((item) => (
                <CartItem item={item} />
              ))
            ) : (
              <h1>Order failed loading</h1>
            )}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] py-[2vh] lg:mt-0">
            <div className="border px-5 py-3">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{customerOrder.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{customerOrder.order?.discount}
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
                    ₹{customerOrder.order?.totalDiscountPrice}
                  </span>
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
  );
};

export default OrderSummary;
