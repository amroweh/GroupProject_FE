import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ItemInCarousel from "./ItemInCarousel";
import axios from "axios";


// return an image for a specified place
const getImageForLocation = async (location) => {
  try {
    // const reqBody = { query: location, numOfPictures: 1 };
    const response = await axios.get(
      `http://18.130.102.78:8082/image?query=${location}&numOfPictures=${1}`
    );
    return response.data;
  } catch (error) {
    console.error("Uncaught exception occured: " + error);
  }
};

const LocationCarousel = (props) => {
  const createRequestForLocation = async (location) => {
    const data = await getImageForLocation(location);
    try {
      setImageURL(data[0].urls.regular);
      setAlt(data[0]["alt_description"]);
    } catch {}
  };

  const [imageURL, setImageURL] = useState("");
  const [alt, setAlt] = useState("");

  const locationData = JSON.parse(props.locs);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    createRequestForLocation(locationData[index].city);
  }, [index]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    props.locationHandler(locationData[selectedIndex]);
  };

  return (
    <div className="container">
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Use the carousel to toggle movie locations
      </p>
      <h6 style={{textAlign: "left"}}>This movie has been filmed in the following locations:</h6>
      <Carousel
        fade
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {locationData.map((item) => (
          <Carousel.Item key={item.location_id}>
            <img
              src={imageURL}
              className="d-block w-100"
              alt={alt}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h1>{item.country}</h1>
              <h2>{item.city}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <p style={{ textAlign: "left", marginBottom: "20px" }}>
        The current city and country selected is: <b>{locationData[index].city}</b>
        {" in "}
        {locationData[index].country}
      </p>
    </div>
  );
};

export default LocationCarousel;
