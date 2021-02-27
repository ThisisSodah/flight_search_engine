import { Button, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default function FlightsCard(props) {
  return (
    <>
      <div className='costContainer'>
        <Typography variant='h3'>INR {props.data.cost}</Typography>
      </div>
      <div className='flightNumberContainer'>
        <Typography variant='h6'>{props.data.flightNumber}</Typography>
      </div>
      <div className='flightCodeContainer'>
        <Typography variant='h5'>
          {props.data.originCode} <ArrowForwardIcon />{" "}
          {props.data.destinationCode}
        </Typography>
      </div>
      <div className='footerContainer'>
        <div className='timeContainer'>
          <Typography variant='body1'>
            Depart time:{" "}
            <Typography variant='h5'>{props.data.departTime}</Typography>
          </Typography>
          <Typography variant='body1'>
            Arrival time:{" "}
            <Typography variant='h5'>{props.data.arrivalTime}</Typography>
          </Typography>
        </div>
        <div className='bookNowButton'>
          <Button variant='contained' color='secondary'>
            <Typography variant='body1'>Book this flight</Typography>
          </Button>
        </div>
      </div>
    </>
  );
}
