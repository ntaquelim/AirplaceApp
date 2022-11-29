import FlightGet from "./FlightGet";


export default function FlightForm(){


    return(
    <div>
      <div className="headerDiv">Flights from {localStorage.getItem("origin")} to {localStorage.getItem("destination")}, on {localStorage.getItem("date")}</div>  
      <div className="contentDiv">
        <FlightGet />
      </div>
    </div>);
}