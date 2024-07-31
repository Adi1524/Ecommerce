import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, SetPaymentStatus] = useState();
  const { orderId } = useParams;
  console.log("orderId", orderId);
  return (
    <>
      {" "}
      <h1>payment sucess</h1>
    </>
  );
};

export default PaymentSuccess;
