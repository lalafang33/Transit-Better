import React from 'react';
import { useNavigate } from "react-router-dom";
import './Button.css'

function LoginButton() {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/login');//eg.history.push('/login');

  return (
   <div className='login-button-container'>
   <button className="button" onClick={navigateTo} type="button">Log In</button>
   </div>
  );
}
export default LoginButton;