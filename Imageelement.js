import React from 'react';

const Imageelement = ({ onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{ cursor: 'move', marginBottom: '10px' }}
    >
      Image Element
    </div>
  );
};

export default Imageelement;
