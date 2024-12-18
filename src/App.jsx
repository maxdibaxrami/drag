import React, { useState } from 'react';
import SelectObject from './components/object';
import Ground from './components/ground';

function App() {
  const [items, setItems] = useState([]);

  const handleSelect = (object) => {
    setItems([...items, { ...object, x: 50, y: 50 }]);
  };

  const handleItemDrag = (index, x, y) => {
    const updatedItems = [...items];
    updatedItems[index].x = x;
    updatedItems[index].y = y;
    setItems(updatedItems);
  };

  const save = (items) => {
    const layout = items.map(item => ({
      id: item.id,
      src: item.src,
      x: item.x,
      y: item.y
    }));
  
    const blob = new Blob([JSON.stringify(layout)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'file.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const Import = ({setItems}) =>{

    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const savedItems = JSON.parse(event.target.result);
        setItems(savedItems);
      };
      reader.readAsText(file);
    };
  
    return (
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ marginTop: '20px', display: 'block' }}
      />
    );
  }
  

  return (
    <div>
      <div style={{display:"flex", alignItems:"center"}}>
        <div style={{backgroundColor:"lightgray"}}> 
        <SelectObject onSelect={handleSelect} />

        </div>
        <div style={{ padding:"4px",marginLeft:"20px",backgroundColor:"lightgray", display:"flex"}}>
          <Import setItems={setItems} />
          <button onClick={() => save(items)}>Save Layout</button>
        </div>
      </div>

      <Ground items={items} onItemDrag={handleItemDrag} />



    </div>
  );
}

export default App;
