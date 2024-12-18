import React from 'react';

const objects = [
  { id: 'table', src: '/images/table.jpg' }, 
  { id: 'chair', src: '/images/chair.png' },
  { id: 'table2', src: '/images/table2.jpeg' }
];

const SelectObject = ({ onSelect }) => {
  return (
    <div>
      {objects.map((object,index) => (
        <img
          key={object.id}
          src={object.src}
          onClick={() => onSelect(object)}
          style={{ 
            width: '50px',
            objectFit:"cover",
            height: '50px',
            margin: '10px',
            cursor: 'pointer',
            userSelect:"none"
          }}
        />
      ))}

      Click on image to add
    </div>
  );
}

export default SelectObject;
