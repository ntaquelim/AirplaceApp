import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useRef,useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';



let cityList = [];

export default function InitialForm(){
    
  const navigate = useNavigate();
    const originInput=useRef();
    const destinationInput =useRef();
    const dateInput =useRef();
    //const nOfPInput =useRef();
    

    const [cityList, setCityList] = useState([]);

    useEffect(() => {
       (async function call() {
         try {
          
           const response = await fetch('http://localhost:8081/flight/allLocation', {
             method: 'GET',
             mode: 'cors',
             headers: {
              'Content-Type': 'application/json',
             },
           });
           const citys = await response.json();
           setCityList(citys);
         } catch (error) {
           console.log('Error with fetching data!', error);
         }
       })();
     }, []);

    
    const onSubmitHandler = () =>{
        
        
        localStorage.setItem("originName", cityList[originInput.current.value] )
        localStorage.setItem("origin", originInput.current.value);
        localStorage.setItem("destination", destinationInput.current.value);
        localStorage.setItem("destinationName", cityList[destinationInput.current.value]);
        localStorage.setItem("originalDate", dateInput.current.value);
        //localStorage.setItem("passengersTotal", nOfPInput.current.value)
        navigate('/Flights');
    }

    return(
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={onSubmitHandler}>
    <div className="Auth-form-content">
        <h3 className="Auth-form-title">Let's travel</h3>
    <div className="form-group mt-3">
      <FloatingLabel controlId="fromInput" label="Origin*" className="mb-3">
    <Form.Select aria-label="Origin*" ref={originInput}>
      <option>Pick a country</option>
      {cityList.map((city) => (
      <option value={cityList.indexOf(city)} key={city}>{city}</option >))}
     </Form.Select>
    </FloatingLabel>
    <FloatingLabel controlId="toInput" label="Destination*">
    <Form.Select aria-label="Destination*" ref={destinationInput}>
      <option>Pick a country</option>
      {cityList.map((city) => (
      <option value={cityList.indexOf(city)} key={city}>{city}</option >))}
     </Form.Select>
     </FloatingLabel>
        <FloatingLabel controlId="dateInput" label="Date*">
          <Form.Control type="date" placeholder="" ref={dateInput} />
        </FloatingLabel>
        {/* <FloatingLabel controlId="numPassengersInput" label="Nº of passengers" min="1">
          <Form.Control type="number" ref={nOfPInput} />
        </FloatingLabel> */}
    </div>
    <div className="d-grid gap-2 mt-3">
        <Button type="submit" id="button-id" className="btn btn-primary" >
              Find
        </Button>
    </div>
    </div>
    </form>
    </div>
    );
}