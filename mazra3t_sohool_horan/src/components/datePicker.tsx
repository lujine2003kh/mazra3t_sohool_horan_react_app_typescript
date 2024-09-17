import React, { useState } from 'react';
import '../style/datePicker.css';
interface Birthdate {
  day: number;
  month: string;
  year: number;
}

interface TimePeriod {
  from: string;
  to: string;
}

const RegistrationForm = () => {
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
    <form>
      <label htmlFor="birthdate">Birthdate:</label>
      <select className='day' id="day" name="day" value={birthdate.day} onChange={handleBirthdateChange}>
        <option value="">Day</option>
        {Array.from(Array(31), (_, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <select  id="month" name="month" value={birthdate.month} onChange={handleBirthdateChange}>
        <option  value="">Month</option>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <select id="year" name="year" value={birthdate.year} onChange={handleBirthdateChange}>
        <option value="">Year</option>
        {Array.from(Array(10), (_, i) => (
          <option value={i + 2024}>{i + 2024}</option>
        ))}
      </select>

      <label htmlFor="timeperiod">Time Period:</label>
      <select id="from" name="from" value={timePeriod.from} onChange={handleTimePeriodChange}>
        <option value="">From</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
      <select id="to" name="to" value={timePeriod.to} onChange={handleTimePeriodChange}>
        <option value="">To</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
    </form>
  );
};

export default RegistrationForm;