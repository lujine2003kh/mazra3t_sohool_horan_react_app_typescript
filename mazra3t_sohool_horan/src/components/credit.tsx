import React from 'react';
import '../style/credit.css';
interface CardProps {
  type: string;
  number: string;
  expDate: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ type, number, expDate, name }) => {
  return (
    <div className="creditcard">
      <div className="creditcard__info">
        <div className="card__logo">MasterCard</div>
        <div className="card__chip">
          <svg
            className="card__chip-lines"
            role="img"
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            aria-label="Chip"
          >
            <g opacity="0.8">
              <polyline points="0,50 35,50" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="50,0 50,35" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="100,50 65,50" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="50,100 50,65" fill="none" stroke="#000" stroke-width="2" />
              <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" stroke-width="2" />
            </g>
          </svg>
          <div className="creditcard__chip-texture" />
        </div>
        <div className="card__type">{type}</div>
        <div className="card__number">
          {number.split('').map((digit, index) => (
            <span key={index} className="card__digit-group">
              {digit}
            </span>
          ))}
        </div>
        <div className="card__valid-thru" aria-label="Valid thru">
          Valid<br />thru
        </div>
        <div className="card__exp-date">
          <time dateTime={expDate}>{expDate.replace('-', '/')}</time>
        </div>
        <div className="card__name" aria-label={name}>
          {name}
        </div>
        <div className="card__vendor" role="img" aria-labelledby="card-vendor">
          <span id="card-vendor" className="card__vendor-sr">
            Mastercard
          </span>
        </div>
        <div className="card__texture" />
      </div>
    </div>
  );
};

export default Card;