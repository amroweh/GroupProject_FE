import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ItemInCarousel from "./ItemInCarousel";

const getDataForLocation = () => {
  console.log("From get data");
};

const LocationCarousel = (props) => {
  //   const [activeCity, setActiveCity] = useState("");

  //   const [locationData, setLocationData] = useState({});

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const dataArray = [
    {
      location_id: 3,
      city: "Cincinatti",
      country: "USA",
      nearest_airport_code: "LUK",
    },
    {
      location_id: 2,
      city: "Cleveland",
      country: "USA",
      nearest_airport_code: "CLE",
    },
  ];

  return (
    <>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {dataArray.map((item) => (
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
        The current city and country selected is: {dataArray[index].city}
        {" in "}
        {dataArray[index].country}
      </h3>
    </>
  );
};

export default LocationCarousel;
