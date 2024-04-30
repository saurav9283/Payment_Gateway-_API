import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const reference =  searchQuery.get("reference");
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'green',fontFamily:"cursive",fontSize:"30px" }}>Payment Successful!</h1>
      <h2 style={{ color: 'green',fontFamily:"cursive",fontSize:"24px" }}>Refrence number - {reference}</h2>
      <p style={{ fontSize: '20px', marginTop: '20px',fontFamily:"cursive",fontWeight:"bold" }}>Thank!!!  Visit Again.</p>
    </div>
  );
}

export default PaymentSuccess;
