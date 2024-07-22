import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="border rounded-md hover:shadow-2xl  shadow-md w-full h-auto p-5 space-y-2 my-6 ml-[5vh]">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="cursor-pointer flex">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/51iHH1lAzDL._SX300_SY300_QL70_FMwebp_.jpg"
              alt=""
            />
            <div className=" ml-5">
              <p className="font-semibold ">SOLISPRIMUS-COMFORT</p>
              <p className="opacity-50 text-xs font-semibold">Size: One Seat</p>
              <p className="opacity-50 text-xs font-semibold">Colour: Grey</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="font-semibold"> ₹14,999</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span>Delivered On March 03</span>

              <p className="text-sm"> Your Item Has Been Delivered</p>
              
            </p>
             

          )}
          {false && (
            <p>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
