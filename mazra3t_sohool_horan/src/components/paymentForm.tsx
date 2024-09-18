import React, { useState } from 'react';
import '../style/PaymentForm.css';
import DatePicker from 'react-datepicker';
import RegistrationForm from './datePicker';
import Card from './credit';
import { Link } from 'react-router-dom';

//DATE
interface Birthdate {
  day: number;
  month: string;
  year: number;
}

interface TimePeriod {
  from: string;
  to: string;
} 
//credit

//PAYMENT
interface PaymentFormProps {
    onSubmit: (paymentInfo: { cardNumber: string; expirationDate: string; cvv: string; FirstName:string;LastName:string;EmailAddress:string;PhoneNumber:string; }) => void;
  }
  interface Errors {
    FirstName?:string;
    LastName?:string;
    EmailAddress:string;
    PhoneNumber:string;
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
  }
const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
    const[FirstName,setFirstName]=useState('');
    const[LastName,setLastName]=useState('');
    const[EmailAddress,setEmailAddress]=useState('');
    const[PhoneNumber,setPhoneNumber]=useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cardNumber || !expirationDate || !cvv || !FirstName) {
      setErrors({ cardNumber: 'Required', expirationDate: 'Required', cvv: 'Required',
        FirstName:'Required',LastName:'Required',EmailAddress:'Required',
    PhoneNumber:'Required' });
      return;
    }
    onSubmit({ cardNumber, expirationDate, cvv,FirstName,LastName,EmailAddress,PhoneNumber });
  };
//DATE
const [birthdate, setBirthdate] = useState<Birthdate>({ day: 0, month: '', year: 0 });
  const [timePeriod, setTimePeriod] = useState<TimePeriod>({ from: '', to: '' });

  const handleBirthdateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setBirthdate((prevBirthdate) => ({ ...prevBirthdate, [name]: value }));
  };

  const handleTimePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setTimePeriod((prevTimePeriod) => ({ ...prevTimePeriod, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='payinfo'>Payment Information</h2>
      <div id="cssportal-grid">
	      <div id="div1"><label>
        First Name:
        <input
          type="text"
          value={FirstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Lujine"
        />
        {errors.FirstName && <div style={{ color: 'red' }}>{errors.FirstName}</div>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={LastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="khasawneh"
        />
        {errors.LastName && <div style={{ color: 'red' }}>{errors.LastName}</div>}
      </label>
      <label>
        Email Address:
        <input
          type="text"
          value={EmailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
          placeholder="klujine2003@gmail.com"
        />
        {errors.EmailAddress && <div style={{ color: 'red' }}>{errors.EmailAddress}</div>}
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={PhoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="0796118158"
        />
        {errors.PhoneNumber && <div style={{ color: 'red' }}>{errors.PhoneNumber}</div>}
      </label>
      {/* <RegistrationForm/> */}
      <label htmlFor="birthdate">Birthdate:</label>
      <select className='day selector' id="day" name="day" value={birthdate.day} onChange={handleBirthdateChange}>
        <option value="">Day</option>
        {Array.from(Array(31), (_, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <select id="month" name="month" value={birthdate.month} onChange={handleBirthdateChange}>
        <option value="">Month</option>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <select id="year" name="year" value={birthdate.year} onChange={handleBirthdateChange}>
        <option value="">Year</option>
        {Array.from(Array(133), (_, i) => (
          <option value={i + 2024}>{i + 2024}</option>
        ))}
      </select>

      <label htmlFor="timeperiod">Time Period:</label>
      <select className='selector' id="from" name="from" value={timePeriod.from} onChange={handleTimePeriodChange}>
        <option value="">Timing</option>
        <option value="morning">Morning(10AM-8PM)</option>
        <option value="afternoon">Morning until Midnight(10AM-12AM)</option>
        <option value="evening">Evening(10PM-8AM)</option>
        <option value="evening">Evening(10PM-8AM)</option>
        <option value="evening">Full Day(10AM-8AM)</option>
      </select>
      {/* <select id="to" name="to" value={timePeriod.to} onChange={handleTimePeriodChange}>
        <option value="">To</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select> */}
      </div>
	      <div id="div2"><label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          placeholder="1234-5678-9012-3456"
        />
        {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
      </label>
      <br />
      <label>
        Expiration Date:
        <input
          type="text"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.target.value)}
          placeholder="MM/YY"
        />
        {errors.expirationDate && <div style={{ color: 'red' }}>{errors.expirationDate}</div>}
      </label>
      <br />
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
          placeholder="123"
        />
        {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}
      </label>
      <Card
  type="debit"
  number="0123 4567 8901 2345"
  expDate="2038-01"
  name="Jk Huger"
/>
      <br />
      </div>
	      <div id="div3">
        <br />
        <Link to='/purchase'><button className='paybutton' type="submit">Pay</button></Link>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;

// <label>
//         First Name:
//         <input
//           type="text"
//           value={FirstName}
//           onChange={(event) => setFirstName(event.target.value)}
//           placeholder="Lujine"
//         />
//         {errors.FirstName && <div style={{ color: 'red' }}>{errors.FirstName}</div>}
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           value={LastName}
//           onChange={(event) => setLastName(event.target.value)}
//           placeholder="khasawneh"
//         />
//         {errors.LastName && <div style={{ color: 'red' }}>{errors.LastName}</div>}
//       </label>
//       <label>
//         Email Address:
//         <input
//           type="text"
//           value={EmailAddress}
//           onChange={(event) => setEmailAddress(event.target.value)}
//           placeholder="klujine2003@gmail.com"
//         />
//         {errors.EmailAddress && <div style={{ color: 'red' }}>{errors.EmailAddress}</div>}
//       </label>
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           value={PhoneNumber}
//           onChange={(event) => setPhoneNumber(event.target.value)}
//           placeholder="0796118158"
//         />
//         {errors.PhoneNumber && <div style={{ color: 'red' }}>{errors.PhoneNumber}</div>}
//       </label>
//       <label>
//         Card Number:
//         <input
//           type="text"
//           value={cardNumber}
//           onChange={(event) => setCardNumber(event.target.value)}
//           placeholder="1234-5678-9012-3456"
//         />
//         {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
//       </label>
//       <br />
//       <label>
//         Expiration Date:
//         <input
//           type="text"
//           value={expirationDate}
//           onChange={(event) => setExpirationDate(event.target.value)}
//           placeholder="MM/YY"
//         />
//         {errors.expirationDate && <div style={{ color: 'red' }}>{errors.expirationDate}</div>}
//       </label>
//       <br />
//       <label>
//         CVV:
//         <input
//           type="text"
//           value={cvv}
//           onChange={(event) => setCvv(event.target.value)}
//           placeholder="123"
//         />
//         {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}
//       </label>