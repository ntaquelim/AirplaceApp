import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Flights from './components/Pages/Flights';
import Passengers from './components/Pages/Passengers';
import Booking from './components/Pages/Booking';
import Seats from './components/Pages/Seats';
import Confirmation from './components/Pages/Confirmation';


function App() {


  return ( 
  <BrowserRouter>
    <Routes>
      {/* Change to the component you are developing */}
      
      <Route path="/" element={<Home/>} /> 
      <Route path="Flights" element={<Flights/>} />
      <Route path="Passengers" element={<Passengers/>} />
      {/*<Route path="Seats" element={<Seats/>} />
       <Route path="personal" element={} /> */}
      <Route path="Booking" element={<Booking />} />
      <Route path="Confirmation" element={<Confirmation/>} />

    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
{/* <div className="App">
      <Header />
      <Body />
    </div> */}