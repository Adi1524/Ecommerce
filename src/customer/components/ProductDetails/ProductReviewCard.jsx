import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="mt-4">
      <Grid container>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>

        <Grid item xs={7}>
          <div className="">
            <div>
              <p className="font-semibold text-lg overflow-auto">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p className="overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            saepe neque, cupiditate aperiam labore consectetur.
          </p>
        </Grid>

       
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
