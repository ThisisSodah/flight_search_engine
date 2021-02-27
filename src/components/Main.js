import { Typography } from "@material-ui/core";
import React from "react";
import SideBar from "./SideBar";
import Results from "./Results";
import { Component } from "react";
import searchFilters from "./filter/searchFilters";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneWayResult: [],
      returnTripResult: [],
      isReturnTrip: false,
      originCity: "",
      destinationCity: "",
      departureDate: "",
      returnDate: "",
    };
  }
  gatherSearchData = (data) => {
    const oneWayResult = searchFilters(
      data.originCity,
      data.destinationCity,
      data.departureDate,
      data.priceRange
    );
    this.setState({
      oneWayResult,
      originCity: data.originCity,
      isReturnTrip: data.isReturnTrip,
      destinationCity: data.destinationCity,
      departureDate: data.departureDate,
      returnDate: (data.returnDate && data.returnDate) || "",
    });
    if (data.isReturnTrip) {
      const originCity = data.destinationCity;
      const destinationCity = data.originCity;
      const returnTripResult = searchFilters(
        originCity,
        destinationCity,
        data.returnDate,
        data.priceRange
      );
      this.setState({
        returnTripResult,
      });
    }
  };
  renderKeywordsSearched = () => {
    return (
      <div className='searchKeywordContainer'>
        <div className='cityCodeContainer'>
          <Typography variant='h3' color='secondary'>
            {this.state.oneWayResult[0].originCode &&
              this.state.oneWayResult[0].originCode}{" "}
            -{" "}
            {this.state.oneWayResult[0].destinationCode &&
              this.state.oneWayResult[0].destinationCode}{" "}
            - {this.state.isReturnTrip && this.state.oneWayResult[0].originCode}
          </Typography>
        </div>
        <div className='datesContainer'>
          <div className='departDateKeyword'>
            <Typography variant='h6'>
              Depart: {this.state.departureDate}
            </Typography>
          </div>
          {this.state.isReturnTrip && (
            <div className='returnDateKeyword'>
              <Typography variant='h6'>
                Return: {this.state.returnDate}
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div className='sideBarContainer'>
          <SideBar gatherSearchData={this.gatherSearchData} />
        </div>
        <div className='resultsContainer'>
          {this.state.oneWayResult.length > 1
            ? this.renderKeywordsSearched()
            : null}
          <Results
            oneWayResult={this.state.oneWayResult}
            returnTripResult={this.state.returnTripResult}
          />
        </div>
      </>
    );
  }
}
