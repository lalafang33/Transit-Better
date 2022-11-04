import React from 'react';
import PropTypes from 'prop-types';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';




<<<<<<< HEAD
const Marker = ({ text, onClick }) => (
  <DirectionsBusIcon
    color="primary"
    fontSize="medium"
    alt={text}
    onClick={onClick}
=======
const Marker = (props) => (
  <Wrapper
    alt={props.text}
    key={props.key}
    onClick={props.onClick}
>>>>>>> main
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
