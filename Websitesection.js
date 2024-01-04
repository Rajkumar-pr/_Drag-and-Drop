import React, { useState } from 'react';

const Websitesection = () => {
  const [elements, setElements] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const elementType = event.dataTransfer.getData('type');

    if (elementType === 'text' || elementType === 'image') {
      setElements([...elements, { type: elementType, content: '' }]);
    }
  };

  const handleTextChange = (index, newText) => {
    const updatedElements = [...elements];
    updatedElements[index].content = newText;
    setElements(updatedElements);
  };

  const handleRemove = (index) => {
    const updatedElements = [...elements];
    updatedElements.splice(index, 1);
    setElements(updatedElements);
  };

  return (
    <div
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        minHeight: '200px',
        backgroundColor:'blue'
      }}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {elements.map((element, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          {element.type === 'text' && (
            <div>
              <input
                type="text"
                value={element.content}
                onChange={(e) => handleTextChange(index, e.target.value)}
              />
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          )}
          {element.type === 'image' && (
            <div>
              <img
                src={element.content}
                alt={`Image ${index}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Websitesection;
