import React from 'react';

const Textelement = ({ onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{ cursor: 'move', marginBottom: '10px' }}
    >
      Text Element
    </div>
  );
};

export default Textelement;
