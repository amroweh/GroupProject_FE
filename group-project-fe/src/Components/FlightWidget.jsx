import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const FlightWidget = () => {

    //need input for origin code, destination code, and departure date 

    const bestFlightUrl = "http://18.130.102.78:8082/bestFlight?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21"
    const allFlightsUrl = "http://18.130.102.78:8082/allFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21" 
    const numberFlightsUrl = "http://18.130.102.78:8082/getSelectedNumberOfFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21&numberRequested=4"

    const testLink = "http://localhost:8082/testBestFlight?originCode=LHR&destinationCode=JFK&departureDate=2023-08-20"

    //add use state
    const [{someData: data}, setData] = useState("");

    const getBestFlight = async ()=>{
        try{
          const res = await axios.get(testLink);
          //console.log("test" + res);
          //const data = await res.data;
          //console.log(data);
          //return res.data.length? {flights: res.data} : {error:'There is no flight stored'}
          return res.data;
        }
        catch(e){
        //   setGetError(`Data not available from server: ${e.message}`)
            return {error: `Data not available from server: ${e.message}`}
    
        }

        //display the error
      }

      const getTopFlights = async ()=>{
        try{
          const result = await axios.get(numberFlightsUrl);
          return result.data.length? {flights: result.data} : {error:'There are no flights stored'}
        }
        catch(e){
        //   setGetError(`Data not available from server: ${e.message}`)
            return {error: `Data not available from server: ${e.message}`}
    
        }
      }

      async function aFunction() {
        const getFlightData = await getBestFlight();
        const x = await getFlightData.json();

      }

      //call the server in UseEffect

      useEffect( ()=>{
        async function aFunction() {
            const getFlightData = await getBestFlight();
            //const x = await getFlightData();
            setData({someData: getFlightData});
          }
          aFunction();
        //const getData = async () =>{
          
      },[])

      

  return (
    <>
    <h2>Best Flight</h2>
    <div>{JSON.stringify(data)}</div>
    
    <ListGroup horizontal>
      <ListGroup.Item>{JSON.stringify(data.price)}</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
    <h2>All flights</h2>
    <div></div>
    </>
  )
}

export default FlightWidget