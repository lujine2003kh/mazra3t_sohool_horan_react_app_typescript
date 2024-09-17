// Booking.tsx
import React from 'react';
import '../style/booking.css';
import { Breadcrumbs } from '@mui/material';
import PaymentForm from '../components/paymentForm';
// import RegistrationForm from '../components/datePicker';
const Booking: React.FC = () => {
  return (
    <>
    {/* <h1>This is the Booking Page</h1> */}
    <Breadcrumbs />
    <PaymentForm onSubmit={function (paymentInfo: { cardNumber: string; expirationDate: string; cvv: string; }): void {
        throw new Error('Function not implemented.');
      } }/>
      {/* <RegistrationForm/> */}
    </>
  );
};

export default Booking;
