import React, { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom';

let passenger = {};
let extraCost = "";

export default function PassengerForm() {

  
  let firstName = useRef();
  let lastName = useRef();
  let document = useRef();
  let age = useRef();
 let nationality = useRef();
 let hasLuggage = useRef();
  const navigate = useNavigate();


  const [validated, setValidated] = useState(false);
  const [checked, setChecked] = useState(false); 

  const costsExtra = (event) =>{
    setChecked(!checked);
    if(!checked ) {
      extraCost='This will have extra costs';
    }
    else{extraCost=" "}
    
    }

  const handleSubmit = (event) => {
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
        event.preventDefault();
       event.stopPropagation();
      }
     setValidated(true);
      if(form.checkValidity()===true){
      // passenger = {
      //   firstName: firstName.current.value,
      //   lastName: lastName.current.value,
      //   nationality: nationality.current.value,
      //   age: age.current.value,
      //   documents: document.current.value,
      //   hasLuggage: hasLuggage.current.checked
        
      // }

    localStorage.setItem("passengerFirstName", firstName.current.value)
    localStorage.setItem("passengerLastName", lastName.current.value)
    localStorage.setItem("passengerNationality", nationality.current.value)
    localStorage.setItem("passengerAge", age.current.value)
    localStorage.setItem("passengerDocuments", document.current.value)
    localStorage.setItem("passengerHasLuggage", hasLuggage.current.checked)


     console.log(passenger);
     navigate("/Confirmation")
    }
    
    }


  return (
    <Form noValidate validated={validated} >
      <Row className="mb-3">
        <h1>Insert Data of passenger </h1>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            ref={firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            ref={lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" required  ref={age}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid age.
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder="Country" required   ref={nationality}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomDocument">
          <Form.Label>Documentation</Form.Label>
          <InputGroup hasValidation>
             <Form.Control
              type="text"
              placeholder="Document"
              aria-describedby="inputGroupPrepend"
              required
              ref={document}
            />
            <Form.Control.Feedback type="invalid">
              Please insert your Document.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
       </Row>
      <Form.Group className="mb-3">
        <Form.Check
          label="Taking any luggage?"
          onChange={costsExtra}
          ref={hasLuggage}/>
        <Form.Label>{extraCost}</Form.Label>
      </Form.Group>
      <Button type="submit" onClick={handleSubmit}>Submit passenger</Button>
    </Form>
  );
}
