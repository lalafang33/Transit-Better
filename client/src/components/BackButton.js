import React from 'react';
import { useNavigate } from "react-router-dom";
import './Button.css'

function BackButton() {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/loggedInHome');//eg.history.push('/login');

  return (
   <div className='back-button-container'>
   <button className="back-button" onClick={navigateTo} type="button">Back To Map</button>
   </div>
  );
}
export default BackButton;