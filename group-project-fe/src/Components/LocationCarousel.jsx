import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ItemInCarousel from "./ItemInCarousel";

const getDataForLocation = () => {
  console.log("From get data");
  // console.log("From within carousel component: " + locationData);
};

const LocationCarousel = (props) => {
  //   const [activeCity, setActiveCity] = useState("");

  // console.log(JSON.parse(props.locs));
  const locationData = JSON.parse(props.locs);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const dataArray = [
    {
      location_id: 1,
      city: "Columbus",
      country: "USA",
      nearest_airport_code: "CMH",
    },
    {
      location_id: 2,
      city: "Cleveland",
      country: "USA",
      nearest_airport_code: "CLE",
    },
    {
      location_id: 3,
      city: "Cincinatti",
      country: "USA",
      nearest_airport_code: "LUK",
    },
    {
      location_id: 4,
      city: "Sandusky",
      country: "USA",
      nearest_airport_code: "CLE",
    },
  ];

  return (
    <>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {locationData.map((item) => (
          <Carousel.Item key={item.location_id}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="d-block w-100"
              alt="Wild Landscape"
            />
            <Carousel.Caption>
              <h1>{item.country}</h1>
              <h2>{item.city}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h3>
        The current city and country selected is: {locationData[index].city}
        {" in "}
        {locationData[index].country}
      </h3>
    </>
  );
};

export default LocationCarousel;
