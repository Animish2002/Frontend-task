import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import email_icon from '../components/assets/email.png';
import passwoard_icon from '../components/assets/password.png';
import background from '../components/assets/paul-earle-wVjd0eWNqI8-unsplash.jpg';
// import backgroundimage2 from '../components/assets/login-verification-password.png';


const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div>
    
      {/* <div className="background" style={{ backgroundImage: `url(${background})` }}> */}
        <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="container">
          <div className="form-container">
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            {/* Commented out error variable */}
            {/* {error && <div className="error-message">{error}</div>} */}
            <div className="inputs">
              <div className="input">
                <label htmlFor="email">
                  <img src={email_icon} alt="" />
                </label>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="input">
                <label htmlFor="password">
                  <img src={passwoard_icon} alt="" />
                </label>
                <input type="password" id="password" name="password" placeholder="Password" required />
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <div className="submit-container">
                <div className="submit" onClick={handleRegisterClick}>
                  Register
                </div>
                <div className="submit-login" onClick={handleLoginClick}>
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Login;
