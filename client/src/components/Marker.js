import React from 'react';
import PropTypes from 'prop-types';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';




const Marker = ({ text, onClick }) => (
  <DirectionsBusIcon
    color="primary"
    fontSize="medium"
    alt={text}
    onClick={onClick}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
