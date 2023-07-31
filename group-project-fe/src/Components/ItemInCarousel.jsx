import React from "react";
import { Carousel } from "react-bootstrap";

const ItemInCarousel = (location) => {
  console.log();

  return (
    <Carousel.Item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="d-block w-100"
        alt="Wild Landscape"
      />
      <Carousel.Caption>
        <h2>Label</h2>
        {/* <h3>City = {city}</h3>
        <h4>Country = {country}</h4>
        <h5>Airport = {nearest_airport_code}</h5> */}
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default ItemInCarousel;
