import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  Box,
} from "@mui/material";

// Custom Styles for Step Connector and Step Icons
const LineConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderColor: "#eaeaf0",
    borderTopWidth: 2,
  },
}));

const StepLine = styled("div")(({ theme, active }) => ({
  width: 32, // Adjust the width to match the length of the active line
  height: 6,
  backgroundColor: active ? "#5f259f" : "#eaeaf0",
  borderRadius: "3px",
  display: "inline-block",
  margin: "0 8px",
}));

const StepCircle = styled("div")(({ active }) => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#f4f5f7",
  border: `2px solid ${active ? "#5f259f" : "#eaeaf0"}`,
  color: active ? "#5f259f" : "#adb0bb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 500,
}));

const steps = ["1", "2", "3"]; // Step labels/numbers

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<LineConnector />}
        sx={{ width: "80%", margin: "auto" }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() =>
                index === 0 ? (
                  // Render Line for the First Step
                  <StepLine active={index === activeStep} />
                ) : (
                  // Render Circle for Other Steps
                  <StepCircle active={index === activeStep}>{label}</StepCircle>
                )
              }
            ></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
