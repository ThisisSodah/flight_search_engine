import getFlightData from "../../data/getFlightData";
import moment from "moment";

export default function searchFilters(cityFrom, cityTo, date, priceRange) {
  let flightData = getFlightData();
  if (cityFrom !== "") {
    flightData = flightData.filter((p) => p.originCity.includes(cityFrom));
  }
  if (cityTo !== "") {
    flightData = flightData.filter((p) => p.destinationCity.includes(cityTo));
  }
  if (date !== "" || "Invalid key") {
    flightData = flightData.filter(
      (p) => p.date === moment(date).format("DD/MM/YYYY")
    );
  }
  if (priceRange !== [0, 10000]) {
    flightData = flightData.filter(
      (p) => p.cost >= priceRange[0] && p.cost <= priceRange[1]
    );
  }
  return flightData;
}
