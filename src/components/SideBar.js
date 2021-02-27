import {
  Button,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReturnTrip: false,
      originCity: "",
      destinationCity: "",
      departureDate: "",
      returnDate: "",
      priceRange: [0, 10000],
    };
  }
  handleFieldsChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    });
  };
  handleSwitch = (event) => {
    this.setState({
      isReturnTrip: event.target.checked,
    });
  };
  handleSlider = (e, newValue) => {
    this.setState({
      priceRange: newValue,
    });
  };
  handleSearch = () => {
    const stateObject = Object.assign({}, this.state);
    this.props.gatherSearchData(stateObject);
  };
  renderSearchFields = () => {
    return (
      <div className='searchCityContainer'>
        <TextField
          value={this.state.originCity}
          onChange={(e) => this.handleFieldsChange(e, "originCity")}
          className='cityTextField'
          variant='outlined'
          label='Search Origin City'
        />

        <TextField
          value={this.state.destinationCity}
          onChange={(e) => this.handleFieldsChange(e, "destinationCity")}
          className='cityTextField'
          variant='outlined'
          label='Search Destinaton City'
        />
        <TextField
          className='cityTextField'
          variant='outlined'
          label='Passengers'
        />
      </div>
    );
  };
  renderDatePicker = () => {
    return (
      <div className='datePickerContainer'>
        <div className='datePicker'>
          <Typography variant='subtitle1'>Departure Date:</Typography>
          <TextField
            fullWidth={true}
            variant='outlined'
            type='date'
            value={this.state.departureDate}
            onChange={(e) => this.handleFieldsChange(e, "departureDate")}
          />
        </div>
        {this.state.isReturnTrip && (
          <div className='datePicker'>
            <Typography variant='subtitle1'>Return Date:</Typography>
            <TextField
              fullWidth={true}
              variant='outlined'
              type='date'
              value={this.state.returnDate}
              onChange={(e) => this.handleFieldsChange(e, "returnDate")}
            />
          </div>
        )}
      </div>
    );
  };
  renderPriceRangeSelector = () => {
    return (
      <div className='rangeSelector'>
        <Typography gutterBottom>Price range</Typography>
        <Slider
          min={0}
          max={10000}
          valueLabelDisplay='auto'
          value={this.state.priceRange}
          onChange={this.handleSlider}
          color='secondary'
        />
      </div>
    );
  };
  render() {
    return (
      <>
        <div className='sideBar'>
          <div className='drawerHeadingContainer'>
            <Typography variant='h3' color='primary'>
              Flight Search Engine
            </Typography>
          </div>
          <div className='switchContainer'>
            <Typography color={this.state.isReturnTrip ? "default" : "primary"}>
              One-way
            </Typography>
            <Switch
              checked={this.state.isReturnTrip}
              onChange={this.handleSwitch}
              color='default'
            />
            <Typography color={this.state.isReturnTrip ? "primary" : "default"}>
              Return Trip
            </Typography>
          </div>
          {this.renderSearchFields()}
          {this.renderDatePicker()}
          <div className='searchButtonContainer'>
            <Button
              color='secondary'
              variant='contained'
              fullWidth={true}
              onClick={this.handleSearch}>
              Search
            </Button>
            {this.renderPriceRangeSelector()}
          </div>
        </div>
      </>
    );
  }
}
