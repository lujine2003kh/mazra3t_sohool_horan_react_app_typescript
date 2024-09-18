import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  // Add any props you need to pass to the component
}

const OrderValidationCard: React.FC<Props> = () => {
  return (
    <div className="card">
      <button type="button" className="dismiss">×</button>
      <div className="header">
        <div className="image">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
              />
            </g>
          </svg>
        </div>
        <div className="content">
          <span className="title">Order validated</span>
          <p className="message">
            Thank you for your purchase. Your package will be delivered within 2 days of your purchase.
          </p>
        </div>
        <div className="actions">
        <Link to='/Home'><button className='loginbtn' type="submit">Sign In</button></Link>
          <button type="button" className="track">
            Track my package
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderValidationCard;