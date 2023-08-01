import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const FlightWidget = () => {

    //need input for origin code, destination code, and departure date 

    const bestFlightUrl = "http://18.130.102.78:8082/bestFlight?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21"
    const allFlightsUrl = "http://18.130.102.78:8082/allFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21" 
    const numberFlightsUrl = "http://18.130.102.78:8082/getSelectedNumberOfFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21&numberRequested=4"

    const testLink = "http://localhost:8082/testBestFlight?originCode=LHR&destinationCode=JFK&departureDate=2023-08-20"
    const testLinkTwo = "http://localhost:8082/testAllFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-08-20"

    //add use state
    const [{someData: data}, setData] = useState("");
    const [{flights: flightdata}, setFlightData] = useState("");
    const [loading, setLoading] = useState(true);

    const getBestFlight = async ()=>{
        try{
          const res = await axios.get(testLink);
          //console.log("test" + res);
          const data = await res.data;
          //console.log(data);
          //return res.data.length? {flights: res.data} : {error:'There is no flight stored'}
          return data;
          
        }
        catch(e){
        //   setGetError(`Data not available from server: ${e.message}`)
            return {error: `Data not available from server: ${e.message}`}
    
        }

        //display the error
      }

      const getTopFlights = async ()=>{
        try{
          const result = await axios.get(testLinkTwo);
          const data = await result.data;
          console.log(data)
          return data;
        }
        catch(e){
        //   setGetError(`Data not available from server: ${e.message}`)
            return {error: `Data not available from server: ${e.message}`}
    
        }
      }

      //call the server in UseEffect
      useEffect( ()=>{
        async function aFunction() {
            const getBestFlightData = await getBestFlight();
            const getAllFlightData = await getTopFlights();
            //const x = await getFlightData();
            setData({someData: getBestFlightData});
            setFlightData({flights: getAllFlightData});
            setLoading(false);
          }
        
          aFunction(); 
      },[])


      

      //is ready - new state boolean false when data comes back set state value to true conditionally render list group

  if (loading) {
    return <div>Flight data is loading...</div>
  } else {
    return (
      <>
      <h2>Best Flight</h2>
      <ListGroup horizontal>
            <ListGroup.Item><img src={data.carrierLogoURL} height="25"/></ListGroup.Item>
            <ListGroup.Item>{data.carrier}</ListGroup.Item> 
            <ListGroup.Item>{data.departure}</ListGroup.Item>
            <ListGroup.Item>{data.arrival}</ListGroup.Item>
            <ListGroup.Item>£{data.price}</ListGroup.Item>
      </ListGroup>
      <h2>All flights</h2>
      
          {flightdata.map((flight) => (
          < ListGroup horizontal>
            <ListGroup.Item><img src={flight.carrierLogoURL} height="25"/></ListGroup.Item>
            <ListGroup.Item>{flight.carrier}</ListGroup.Item>
            <ListGroup.Item>{flight.departure}</ListGroup.Item>
            <ListGroup.Item>{flight.arrival}</ListGroup.Item>
            <ListGroup.Item>{flight.price}</ListGroup.Item>
            </ListGroup> 
          ))} 
     
    </>
    )

  }
        
  
}

export default FlightWidget
