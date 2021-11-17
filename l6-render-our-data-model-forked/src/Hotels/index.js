import React from "react";
import Hotel from "./Hotel.js";

const renderHotel = (hotel) => <Hotel hotel={hotel} key={hotel.id} />;

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }
  const hotelListElements = props.hotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
