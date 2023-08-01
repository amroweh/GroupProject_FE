import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import DateSelector from './DateSelector';
import moment from 'moment';



const FlightWidget = ({date, destination, origin}) => {
  
  moment.locale('en');


    //Current urls connect to the server you can use the URL below if you want to test locally

    //can use these to test locally if needed
    //const LocalTopFourFlights = "http://localhost:8082/getSelectedNumberOfFlights?originCode=LHR&destinationCode=JFK&departureDate=2023-10-21&numberRequested=4"

    //add use state
    const [{someData: data}, setData] = useState("");
    const [{flights: flightdata}, setFlightData] = useState("");
    const [loading, setLoading] = useState(true);

    //function to call the BestFlight
    const getBestFlight = async ()=>{
        try{
          var url = `http://18.130.102.78:8082/bestFlight?originCode=${origin}&destinationCode=${destination}&departureDate=${date}`

          const res = await axios.get(url);
          const data = await res.data;
          return data;
          
        }
        catch(e){
            return {error: `Data not available from server: ${e.message}`}
        }
      }


    //Function to call the topFlights and return a list of all flights available
      const getTopFlights = async ()=>{
        try{
          var url = `http://18.130.102.78:8082/getSelectedNumberOfFlights?originCode=${origin}&destinationCode=${destination}&departureDate=${date}&numberRequested=4`
          const result = await axios.get(url);
          const data = await result.data;
          return data;
        }
        catch(e){
            console.error(`Data not available from server: ${e.message}`)
            return []
        }
      }

      //call the server in UseEffect
      useEffect( ()=>{
        async function aFunction() {
            const getBestFlightData = await getBestFlight();
            const getAllFlightData = await getTopFlights();
            setData({someData: getBestFlightData});
            setFlightData({flights: getAllFlightData});
            setLoading(false);
          }
        
          aFunction(); 
      },[])

  
  if (loading) {
    return 
      <div>Flight data is loading...</div>
  } else {
    return (
      <>
       <DateSelector/>
      <Table striped bordered hover>
      <h2>Best Flight</h2>
      <ListGroup horizontal>
            <ListGroup.Item><img src={data.carrierLogoURL} height="35"/></ListGroup.Item>
            <ListGroup.Item className='col-2'>{data.carrier}</ListGroup.Item> 
            <ListGroup.Item className='col-2'>{moment(data.departure).format('Do MMM [at] h:mm a')}</ListGroup.Item>
            <ListGroup.Item className='col-2'>{moment(data.arrival).format('Do MMM [at] h:mm a')}</ListGroup.Item>
            <ListGroup.Item className='col-1'>£{data.price}</ListGroup.Item>
      </ListGroup>
      <h2>All flights</h2>
      
          {flightdata.map((flight) => (
          < ListGroup horizontal>
            <ListGroup.Item><img src={flight.carrierLogoURL} height="35"/></ListGroup.Item>
            <ListGroup.Item className='col-2'>{flight.carrier}</ListGroup.Item>
            <ListGroup.Item className='col-2'>{moment(flight.departure).format('Do MMM [at] h:mm a')}</ListGroup.Item>
            <ListGroup.Item className='col-2'>{moment(flight.arrival).format('Do MMM [at] h:mm a')}</ListGroup.Item>
            <ListGroup.Item className='col-1'>£{flight.price}</ListGroup.Item>
            </ListGroup> 
          ))} 
          </Table>
         
     
    </>
    )

  }        
  
}

export default FlightWidget
