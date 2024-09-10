import React from 'react';
import logo from '../media/logo4.png';
import '../style/login.css';
import '../pageCom/Home';
import '../pageCom/SignUp';
import { Link } from 'react-router-dom';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="background">
      <div className="card">
        <img className="logo" src={logo} />
        <h2>
          Welcome Back to <span>mazra3at sohool horan</span>
        </h2>
        <form className="form" id="form">
          <input type="email" id="emailID" placeholder="Email" />
          <input type="password" id="passwordID" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        Need an account? Sign up
        <Link className='here' to='/SignUp'>here</Link>
      </div>
    </div>
  );
};

export default Login;