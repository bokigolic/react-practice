import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Test2 = () => {
  const [inputValue, setInputValue] = useState("");




  const handleClick = (e) =>{
    const value = e.target.value;
    setInputValue(inputValue + value)
console.log()
  }
  return (
    <div className="calculator">
      <h2>Calculator</h2>
     <div>
      <div className="input">
      <input 
      type="text" 
      value={inputValue} 
      />
      </div>
     <button type="button" onClick={handleClick} value='7'>7</button>
      <button type="button" onClick={handleClick}>8</button>
      <button type="button" onClick={handleClick}>9</button>
      <button type="button" onClick={handleClick}>*</button>
     </div>
      <div>
      <button type="button" onClick={handleClick}>4</button>
      <button type="button" onClick={handleClick}>5</button>
      <button type="button" onClick={handleClick}>6</button>
      <button type="button" onClick={handleClick}>-</button>

      </div>

      <div>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick}>2</button>
      <button type="button" onClick={handleClick}>3</button>
      <button type="button" onClick={handleClick}>+</button>
      </div>
      <div>
      <button type="button" onClick={handleClick}>c</button>
      <button type="button" onClick={handleClick}>0</button>
      <button type="button" onClick={handleClick}>.</button>
      <button type="button" onClick={handleClick}>/</button>
      </div>
      <div>
      <button className="jednako" type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  )
}

export default Test2;