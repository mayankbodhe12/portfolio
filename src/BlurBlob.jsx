import React from 'react';
import PropTypes from 'prop-types';
import './BlurBlob.css'; // External styles

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="blur-blob-container"
      style={{
        top,
        left,
        width,
        height,
      }}
    >
      <div className="blur-blob-inner"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
