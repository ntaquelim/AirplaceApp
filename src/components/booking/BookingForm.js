import './BookingForm.css'
import React, { useState, useEffect } from 'react';


export default function BookingForm(){

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    
    return(
        <div className="container">
        {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          <h1>Booking your Flight</h1>
          <p>
            Do not close your browser
          </p>
        </div>
      )}
        </div>
    );
      }
