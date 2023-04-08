import React, { useState } from 'react';

const ColorClick = () => {
  const [color, setColor] = useState("red");

  const handleClick = (newColor) => {
    setColor(newColor);
  }

  return (
    <div className="forma">
      <h3 className='registration'>Click to change color:  {color}</h3>
      <button type='button' onClick={() => handleClick("red")} style={{color: "red"}}>red</button>
      <button type='button' onClick={() => handleClick("black")} style={{color: "black"}}>black</button>
      <button type='button' onClick={() => handleClick("blue")} style={{color: "blue"}}>blue</button>
      <button type='button' onClick={() => handleClick("orange")} style={{color: "orange"}}>orange</button>
      <button type='button' onClick={() => handleClick("purple")} style={{color: "purple"}}>purple</button>
      <button type='button' onClick={() => handleClick("yellow")} style={{color: "yellow"}}>yellow</button>
    </div>
  );
}

export default ColorClick;
