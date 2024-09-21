import React from 'react';
import { Link } from 'react-router-dom';
import '../style/purchaseCard.css'
interface Props {
    title: string;
    message: string;
    onDismiss: () => void;
    onHistory: () => void;
    onTrack: () => void;
  }
  

const Cardpurchase: React.FC<Props> = ({
    title = '',
    message = '',
    onDismiss = () => {},
    onHistory = () => {},
    onTrack = () => {},
  }) => {
    
  return (
    <div className="cardpurchase">
      <button type="button" className="dismiss" onClick={onDismiss}>
        ×
      </button>
      <div className="header">
        <div className="imagepurchase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
              ></path>
            </g>
          </svg>
        </div>
        <div className="contentpurchase">
          <span className="titlepurchase">{title}</span>
          <p className="messagepurchase">{message}</p>
        </div>
        <div className="actionspurchase">
          <button type="button" className="historypurchase" onClick={onHistory}>
            History
          </button>
          <button type="button" className="trackpurchase" onClick={onTrack}>
            Track my package
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardpurchase;
