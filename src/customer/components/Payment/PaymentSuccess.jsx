import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { UpdatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, SetPaymentStatus] = useState();

  const dispatch = useDispatch();
  const { customerOrder } = useSelector((store) => store);
  const location = useLocation();

  const { orderId } = useParams();

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    SetPaymentStatus(urlParam.get("razorpay_payment_link_status"));
    // setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  console.log("payment id", paymentId);

  useEffect(() => {
    dispatch(getOrderById(orderId));
    const data = { orderId, paymentId };
    if (paymentId) {
      dispatch(UpdatePayment(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20">
        {customerOrder.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product?.imageURl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product?.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product?.brand}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={customerOrder.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
