// purchase.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Cardpurchase from '../components/purchaseCard';
const Purchase: React.FC = () => {
  return (
    <>
    {/* <h2>payment</h2> */}
    <Cardpurchase title="Order validated"
  message="Thank you for your purchase. Your package will be delivered within 2 days of your purchase"
  onDismiss={() => console.log("Dismiss button clicked")}
  onHistory={() => console.log("History button clicked")}
  onTrack={() => console.log("Track button clicked")}/>
    </>
  );
};

export default Purchase;
