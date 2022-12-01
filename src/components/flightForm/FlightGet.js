import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom';
import './FlightGet.css';

let FlightList = [];

export default function FlightGet(){

    const navigate = useNavigate();
    const origin = localStorage.getItem("origin");
    const destination = localStorage.getItem("destination");
    const date = localStorage.getItem("originalDate");
    
    const [FlightList, setFlightList] = useState([]);
    const initialData ={
        origin: origin,
        destination: destination,
        date: date
      }

    useEffect(() => {
        (async function call() {
          try {
            
            const response = await fetch('http://localhost:8081/flight/getFilteredFlight', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(initialData) 
            });
            const flights = await response.json();
            setFlightList(flights);
          } catch (error) {
            console.log('Error with fetching data!', error);
          }
        })();
      }, []);

      const handleClick = event => {
        let idNumber = event.currentTarget.id;
        FlightList.forEach(element => {
          if(element.flightId == idNumber){
            localStorage.setItem("flightId", element.flightId);
            localStorage.setItem("date", element.date);
            localStorage.setItem("company", element.companyName);              
            localStorage.setItem("basePrice", element.basePrice);
            }
            navigate('/Passengers');
        });
      };


    return(
        <>
    {FlightList.map((flight) => (
      <div id={flight.flightId} onClick={handleClick} key={flight.flightId} className="resultsDiv">
        {flight.origin}  - {flight.destination} on {flight.date[0]}-{flight.date[1]}-{flight.date[2]} from the Company {flight.companyName}- Costs {flight.basePrice}€
      <p>Flight nº {flight.flightId}</p>
    </div>))}
    </>
    );
}