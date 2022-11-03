import React from 'react';
import PropTypes from 'prop-types';
import PersonPinIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { pink } from '@mui/material/colors';



const LocationPin = ({ text, onClick }) => (
  <PersonPinIcon
    color="secondary"
    fontSize="large"
    alt={text}
    onClick={onClick}
  />
);

LocationPin.defaultProps = {
  onClick: null,
};

LocationPin.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default LocationPin;