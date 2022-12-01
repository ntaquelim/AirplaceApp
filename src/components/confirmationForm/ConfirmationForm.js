import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';


export default function ConfirmationForm(){

   const baseValue = parseInt(localStorage.getItem("basePrice"));
   const navigate = useNavigate();

    const onSubmitForm = () =>{
        //connection to different apis
        navigate('/Booking')
    
    }

    return(
    <Form onSubmit={onSubmitForm}>
        <h1>Details</h1>
        <div>
            <h2>Personal Details</h2>
            <p>Firt Name: {localStorage.getItem("passengerFirstName")} </p>
            <p>Last Name: {localStorage.getItem("passengerLastName")}</p>
            <p>Age: {localStorage.getItem("passengerAge")}</p>
            <p>Nationality: {localStorage.getItem("passengerNationality")}</p>
            <p>Document: {localStorage.getItem("passengerDocuments")}</p>
            <p>Taking Luggage? {localStorage.getItem("passengerHasLuggage")==='true' ? 'Yes' : 'No'}</p>
            <h2>Flight Details</h2>
            <p>Flight Number: {localStorage.getItem("flightId")}</p>
            <p>Flight Company: {localStorage.getItem("company")   }</p>
            <p>From: {localStorage.getItem("originName")}</p>
            <p>To: {localStorage.getItem("destinationName")}</p>
            <p>Date: {localStorage.getItem("date")}</p>
            <p>Final Price: {localStorage.getItem("passengerHasLuggage")==='true' ? baseValue + 40 : localStorage.getItem("basePrice")}€</p>
            <Button type="submit" id="confirmationId" className="btn btn-primary" >
              Confirm
            </Button>
        </div>
    </Form>);

}