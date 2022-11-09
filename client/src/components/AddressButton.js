import React from 'react';
import { useNavigate } from "react-router-dom";
import './Button.css'

function AddressButton() {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/savedAddresses');

  return (
   <div className='address-button-container'>
   <button className="address-button" onClick={navigateTo} type="button">Saved Addresses</button>
   </div>
  );
}
export default AddressButton;