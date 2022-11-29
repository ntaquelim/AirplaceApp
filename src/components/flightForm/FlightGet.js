import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

import {useNavigate} from 'react-router-dom';

let FlightList = [];

let flightSelected={};

export default function FlightGet(){

    const navigate = useNavigate();
    const origin = localStorage.getItem("origin");
    const destination = localStorage.getItem("destination");
    const data = localStorage.getItem("date");
    
    const [FlightList, setFlightList] = useState([]);


    useEffect(() => {
        (async function call() {
          try {
            
            const response = await fetch('http://localhost:8081/getFilteredFlight', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              body: {
                origin: origin,
                destination: destination,
                date: data
              }
            });
            const flights = await response.json();
            setFlightList(flights);
          } catch (error) {
            console.log('Error with fetching data!', error);
          }
        })();
      }, []);

      const handleClick = event => {
        idNumber = parseInt(event.currentTarget.id);
        FlightList.forEach(element => {
          if(element.id == idNumber){
              localStorage.setItem("id", element.id);
              localStorage.setItem("date", element.data);
              localStorage.setItem("company", element.companyName);              
              localStorage.setItem("basePrice", element.basePrice);
            }
            navigate('/Passengers');
        });
      };


    return(
        <>
    {FlightList.map((flight) => (
    <div id={flight.id} onClick={handleClick}>
       {flight.origin}  - {flight.destination} on {flight.date} from the Company {flight.companyName}- Costs {flight.basePrice}€
    </div>))}
    </>
    );
}