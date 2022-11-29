import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useRef } from "react";
import {useNavigate} from 'react-router-dom';




export default function InitialForm(){
    const navigate = useNavigate();

    const originInput=useRef();
    const destinationInput =useRef();
    const dateInput =useRef();
    const nOfPInput =useRef();
    

    const onSubmitHandler = () =>{
        
        localStorage.setItem("origin", originInput.current.value);
        localStorage.setItem("destination", destinationInput.current.value);
        localStorage.setItem("date", dateInput.current.value);
        localStorage.setItem("passengersTotal", nOfPInput.current.value)
        console.log(localStorage.getItem("origin"));
        console.log(localStorage.getItem("destination"));
        console.log(localStorage.getItem("date"));
        console.log(localStorage.getItem("passengersTotal"));
        navigate('/Flights');
    }

    return(
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={onSubmitHandler}>
    <div className="Auth-form-content">
        <h3 className="Auth-form-title">Let's travel</h3>
    <div className="form-group mt-3">
        <FloatingLabel controlId="fromInput" label="Origin*" className="mb-3">
        <Form.Control type="text" placeholder="Origin" ref={originInput} min="1" />
        </FloatingLabel>
        <FloatingLabel controlId="toInput" label="Destination*">
          <Form.Control type="text" placeholder="Destination" ref={destinationInput} min="1"/>
        </FloatingLabel>
        <FloatingLabel controlId="dateInput" label="Date*">
          <Form.Control type="date" placeholder="" ref={dateInput} />
        </FloatingLabel>
        <FloatingLabel controlId="numPassengersInput" label="Nº of passengers" min="1">
          <Form.Control type="number" ref={nOfPInput} />
        </FloatingLabel>
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