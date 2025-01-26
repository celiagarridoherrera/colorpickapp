import React, { useState } from 'react';
import '../src/App.css';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return (
    <div className='color-picker-conntainer'>
      <h1>Color Picker</h1>
      <div className='color-selected' style={{ backgroundColor: color }}>
        <h2>Selected Color: {color}</h2>
        </div>
      <label>Select a Color: </label>
      <br/>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
