import React from "react";
import { Card, CardActionArea } from "@material-ui/core";
import FlightsCard from "./FlightsCard";

export default function Results(props) {
  return (
    <div className='cardsContainer'>
      <div className='oneWayResultContainer'>
        {props.oneWayResult.map((item, index) => {
          return (
            <div className='oneWayResultCardContainer' key={index}>
              <Card raised={true}>
                <CardActionArea>
                  <FlightsCard data={item} />
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
      <div className='returnTripResultContainer'>
        {props.returnTripResult.map((item, index) => {
          return (
            <div className='returnTripResultCardContainer' key={index}>
              <Card raised={true}>
                <CardActionArea>
                  <FlightsCard data={item} />
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
