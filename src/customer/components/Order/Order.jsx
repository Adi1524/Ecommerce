import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const order = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={2.5} className="">
          <div className="border rounded-md shadow-md w-full h-[20rem] p-5 space-y-4 my-6 ml-5">
            <h1 className="font-semibold text-lg">Filter</h1>
            <h1 className="font-semibold text-lg  uppercase">Order status</h1>

            {order.map((order) => (
              <div className="inputField">
                <input
                  defaultValue={order.value}
                  type="checkbox"
                  id={order.value}
                  value={order.value}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  className="ml-3 text-sm text-gray-600"
                  htmlFor={order.value}
                >
                  {order.label}
                </label>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
          <div>
            {[1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
