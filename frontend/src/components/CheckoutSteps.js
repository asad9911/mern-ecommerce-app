import React from 'react';
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const CheckoutSteps = ({ activeStep }) => {

	const steps = [
	    {
	      label: <Typography>Shipping Details</Typography>,
	      icon: <LocalShippingIcon />,
	    },
	    {
	      label: <Typography>Confirm Order</Typography>,
	      icon: <LibraryAddCheckIcon />,
	    },
	    {
	      label: <Typography>Payment</Typography>,
	      icon: <AccountBalanceIcon />,
	    },
	];

	const stepStyles = {
	    boxSizing: "border-box",
	};

	return (
		<>
			<Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
		        {steps.map((item, index) => (
		          <Step
		            key={index}
		            active={activeStep === index ? true : false}
		            completed={activeStep >= index ? true : false}
		          >
		            <StepLabel
		              style={{
		                color: activeStep >= index ? "#f2a100" : "rgba(0, 0, 0, 0.649)",
		              }}
		              icon={item.icon}
		            >
		              <span style={{
		                color: activeStep >= index ? "#f2a100" : "rgba(0, 0, 0, 0.649)",
		              }}>{item.label}</span>
		            </StepLabel>
		          </Step>
		        ))}
		    </Stepper>
		</>
	)
}

export default CheckoutSteps