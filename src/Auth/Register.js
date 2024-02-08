import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change import here
import './register.css';
import background from '../components/assets/paul-earle-wVjd0eWNqI8-unsplash.jpg';
import leftsideimage from '../components/assets/vecteezy_isometric-flat-3d-illustration-concept-of-man-filling_21272478-removebg-preview.png';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Change here

  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();

    setErrorMsg('');

    // Basic validation
    if (Object.values(formData).some((value) => value.trim() === '')) {
      setErrorMsg('All fields are required.');
      return;
    }

    alert('Registration successful!');

    navigate('/login'); // Change here
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <div className='container'>
        <div className="left-image">
          <img src={leftsideimage} alt="Registration Illustration" />
        </div>

        <div className="register-container">
          <form onSubmit={validateForm} className="register-form">
            <h2>Student Registration</h2>

            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>

            <div className="error-message">{errorMsg}</div>

            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;