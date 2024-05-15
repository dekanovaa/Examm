
import React, { useState } from 'react';
import './Loginform.css';

const Loginform = () => {
  const [number, setNumber] = useState('991234567');
  const [password, setPassword] = useState('advokat_admin');
  

  const handleSubmit = (event) => {
    event.preventDefault();
   setNumber = number;
   setPassword = password;
   const [token, setToken] = useState('');
  };

  return (
    <div className="loginform">
    <div className="login-container">
      <form id="loginform" onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <input
          id="tel"
          placeholder="phonenumber"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
          id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id="loginbtn" type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Loginform;
