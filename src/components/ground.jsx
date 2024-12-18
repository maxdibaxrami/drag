import React from 'react';
import DragItem from './drag';

const Ground =({ items, onItemDrag }) => {
  return (
    <div
      className="board"
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        border: '2px solid #000',
        margin: '20px auto',
        overflow: 'hidden',
      }}
    >
      {items.map((item, index) => (
        <DragItem
          key={index}
          item={item}
          onDrag={(x, y) => onItemDrag(index, x, y)}
        />
      ))}
    </div>
  );
}

export default Ground;
