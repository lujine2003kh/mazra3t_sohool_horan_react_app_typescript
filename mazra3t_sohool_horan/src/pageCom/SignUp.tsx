import { ChangeEvent, useState } from "react";
import '../style/signup.css';
import logo from '../media/logo4.png';
import { Link } from 'react-router-dom';

const strengthLabels = ["weak", "medium", "strong"];

export const Signup = () => {
  const [strength, setStrength] = useState("");

  const getStrength = (password: string) => {
    console.log(password);

    let strengthIndicator: number = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    getStrength(event.target.value);

  return (
    <div className="login-card">
      {/* <img className="img" src={logo} />  */}
      <h2 className="sign">Sign Up</h2>
      <form className="login-form">
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
          />
          <div id="spinner" className="spinner"></div>
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="tell"
            placeholder="Phone Number"
          />
        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <Link to='/Home'><button className="control" type="submit">
          JOIN NOW
        </button></Link>
      </form>
    </div>
  );
};