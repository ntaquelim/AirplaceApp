import FlightGet from "./FlightGet";


export default function FlightForm(){


    return(
    <div>
      <div className="headerDiv">Flights from {localStorage.getItem("originName")} to {localStorage.getItem("destinationName")}, on {localStorage.getItem("originalDate")}</div>  
      <div className="contentDiv">
        <FlightGet />
      </div>
    </div>);
}