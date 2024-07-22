import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

export default function OrderTracker() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="py-20 flex-col items-center justify-center">
      {/* {stepper component} */}
      <Box
        className="border rounded-md p-5 shadow-md mb-5"
        sx={{ width: "100%" }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            // Uncomment this if you want to mark steps as optional
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}></Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* <Button onClick={handleReset}>Reset</Button> */}
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

      {/* {item list component} */}
      <div>

        {[1,1,1,1].map((item)=>(
           <div className="border rounded-md p-5 my-6 shadow-md ">
           <Grid container>
             <Grid item xs={0.7}>
               <img
                 src="https://m.media-amazon.com/images/I/51vwYmuPDPL._SX300_SY300_QL70_FMwebp_.jpg"
                 alt=""
                 className="w-[5rem] h-[5rem] object-cover object-top"
               />
             </Grid>
 
             <Grid item xs={8}>
               <div className="space-y-1">
                 <p>GR FURNITURE Solid Wooden Sideboard Cabinet</p>
                 <p className="text-xs opacity-60">Colour: Honey Oak Finish 1</p>
                 <p className="text-sm">Material: Sheesham Wood</p>
                 <p>₹23,000</p>
               </div>
             </Grid>
 
             <Grid item xs={2}>
               <div className="flex justify-center items-center">
                 <div className="flex py-5  ml-auto">
                   <StarIcon className="text-purple-600 "  sx={{bgcolor:'text-purple-600'}} />
                   <p className="ml-2 font-semibold text-purple-600"> Rate & Reveiw Product</p>
                 </div>
               </div>
             </Grid>
           </Grid>
         </div>

        ))}
       


      </div>
    </div>
  );
}
