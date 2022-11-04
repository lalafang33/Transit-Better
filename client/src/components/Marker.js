import React from 'react';
import PropTypes from 'prop-types';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';



const Marker = (props) => (
  <DirectionsBusIcon
    color="primary"
    fontSize="medium"
    alt={props.text}
    key={props.key}
    onClick={props.onClick}
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
