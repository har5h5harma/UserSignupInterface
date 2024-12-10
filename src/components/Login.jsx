import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loginDetails, SetLoginDetails] = useState({
    email: "",
    password: ""
  });

  const move = useNavigate();

  const handleSignupPage = () => {  
    console.log(loginDetails); 
    move('/main'); 
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    SetLoginDetails(prevState => ({
      ...prevState,
      [name]: value 
    }));
  };

  return (
    <div className='Logincss'>
      <h1>Login Page</h1>
      <h3>Email</h3>
      <input
        type='text'
        name='email'
        value={loginDetails.email} 
        onChange={HandleChange} 
        placeholder='Enter email'
      />
      <h3>Password</h3>
      <input
        type='password'
        name='password'
        value={loginDetails.password} 
        onChange={HandleChange} 
        placeholder='Enter password'
      />
      <br /><br />
      <button onClick={handleSignupPage}>Login</button>
    </div>
  );
};

export default Login;
