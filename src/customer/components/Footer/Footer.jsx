import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="flex  justify-center w-full bg-black py-12 g-[5vh]"
      >
        <Grid
          item
          sx={12}
          lg={3}
          className=" py-10 px-[13vh] text-white   "
        >
          <h4 className="text-zinc-500 text-[1.5rem]">About</h4>
          <br />
          <button className="font-bold">Contact us</button>
          <div>
            <button className="font-bold">About us</button>
          </div>
          <div>
            <button className="font-bold">Careers</button>
          </div>

          <div>
            <button className="font-bold text-left">Press</button>
          </div>

          <div>
            <button className="font-bold text-left">Corporate Information</button>
          </div>
        </Grid>

        <Grid
          item
          sx={12}
          lg={3}
          className="bg-black py-10 px-[13vh] text-white text-left "
        >
          <h4 className="text-zinc-500 text-[1.5rem]">Group Companies</h4>
          <br />
          <button className="font-bold">Myntra</button>
          <div>
            <button className="font-bold">ClearTrip</button>
          </div>
          <div>
            <button className="font-bold">shopy</button>
          </div>
        </Grid>

        <Grid
          item
          sx={12}
          lg={3}
          className="bg-black py-10 px-[13vh] text-white text-left"
        >

          <div className="text-left">
          <h4 className="text-zinc-500 text-[1.5rem]">Help</h4>
          <br />
          <button className="font-bold text-left">Payment</button>
          <div>
            <button className="font-bold text-left">Shipping </button>
          </div>
          <div>
            <button className="font-bold text-left">Cancelletion and Return</button>
          </div>

          <div>
            <button className="font-bold text-left">Q&A</button>
          </div>

          <div>
            <button className="font-bold text-left">Report Infriement</button>
          </div>

          </div>
          
        </Grid>

        <Grid
          item
          sx={12}
          lg={3}
          className="bg-black py-10 px-[13vh] text-white"
        >
          <h4 className="text-zinc-500 text-[1.5rem] text-left">Consumer Policy</h4>
          <br />
          <button className="font-bold text-left">Cancelletion & Returns</button>
          <div>
            <button className="font-bold text-left">Terms Of Use</button>
          </div>
          <div>
            <button className="font-bold text-left">Security</button>
          </div>

          <div>
            <button className="font-bold text-left">Privacy</button>
          </div>

          <div>
            <button className="font-bold text-left"> ERP Compliance</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
