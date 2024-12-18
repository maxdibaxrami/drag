import React, { useState } from 'react';

const DragItem = ({ item, onDrag }) => {
  const [position, setPosition] = useState({ x: item.x, y: item.y });

  const handleMouseDown = (e) => {
    const startX = e.pageX - position.x;
    const startY = e.pageY - position.y;

    const handleMouseMove = (moveEvent) => {
      const newX = moveEvent.pageX - startX;
      const newY = moveEvent.pageY - startY;
      setPosition({ x: newX, y: newY });
      onDrag(newX, newY);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <img
      src={item.src}
      alt={item.id}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'grab',
        width:'50px',
        height:'50px',
        objectFit:"cover"
        
      }}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={handleMouseDown}
    />
  );
}

export default DragItem;
