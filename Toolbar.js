import React from 'react';
import TextElement from './Textelement';
import ImageElement from './Imageelement';

const Toolbar = ({ onDrop }) => {
  const handleDragStart = (event, type) => {
    event.dataTransfer.setData('type', type);
  };

  return (
    <div style={{backgroundColor:'red',height:'300px'}}>
      <h3>Toolbar</h3>
      <TextElement onDragStart={(e) => handleDragStart(e, 'text')} />
      <ImageElement onDragStart={(e) => handleDragStart(e, 'image')} />
    </div>
  );
};

export default Toolbar;
