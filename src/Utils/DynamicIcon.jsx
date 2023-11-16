import React from 'react';

const DynamicIcon = ({ svgCode }) => {
  return (
    <div className="dynamic-icon" dangerouslySetInnerHTML={{ __html: svgCode }} />
  );
};

export default DynamicIcon;
