import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";
import { useDispatch } from "react-redux";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("First Name"),
      lastName: data.get("Last Name"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };
  return (
    <div>
      <Grid container columnSpacing={4}>
        <Grid
          item
          sm={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item sm={12} lg={7}>
          <div className="w-full border rounded-s-md  shadow-md p-5 ">
            <form id="userInfo" onSubmit={handleSubmit}>
              <Grid container xs={12} spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="First Name"
                    id="First Name"
                    label="First Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="Last Name"
                    id="Last Name"
                    label="Last Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="address"
                    id="address"
                    label="Address"
                    fullWidth
                    required
                    autoComplete=""
                    multiline
                    rows={6}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="city"
                    id="city"
                    label="city"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="state"
                    id="state"
                    label="State/province/Region"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="zip"
                    id="zip"
                    label="zip/postal code"
                    fullWidth
                    required
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    name="phoneNumber"
                    id="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
