import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Test2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);


  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "C") {
      setInputValue("");
      setFirstNumber(null);
      setOperation(null);
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      setFirstNumber(parseFloat(inputValue));
      setOperation(value);
      setInputValue("");
    } else if (value === "=") {
      const secondNumber = parseFloat(inputValue);
      let result;
      if (operation === "+") {
        result = firstNumber + secondNumber;
      } else if (operation === "-") {
        result = firstNumber - secondNumber;
      } else if (operation === "*") {
        result = firstNumber * secondNumber;
      } else if (operation === "/") {
        result = firstNumber / secondNumber;
      }
      setInputValue(result.toString());
      setFirstNumber(result);
      setOperation(null);
    } else {
      setInputValue(inputValue + value);
    }
  };
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
        <button type="button" onClick={handleClick} value='8'>8</button>
        <button type="button" onClick={handleClick} value='9'>9</button>
        <button type="button" onClick={handleClick} value='*'>*</button>
      </div>
      <div>
        <button type="button" onClick={handleClick} value='4'>4</button>
        <button type="button" onClick={handleClick} value='5'>5</button>
        <button type="button" onClick={handleClick} value='6'>6</button>
        <button type="button" onClick={handleClick} value='-'>-</button>

      </div>

      <div>
        <button type="button" onClick={handleClick} value='1'>1</button>
        <button type="button" onClick={handleClick} value='2'>2</button>
        <button type="button" onClick={handleClick} value='3'>3</button>
        <button type="button" onClick={handleClick} value='+'>+</button>
      </div>
      <div>
        <button type="button" onClick={handleClick} value='C'>c</button>
        <button type="button" onClick={handleClick} value='0'>0</button>
        <button type="button" onClick={handleClick} value='.'>.</button>
        <button type="button" onClick={handleClick} value='/'>/</button>
      </div>
      <div>
        <button className="jednako" type="button" onClick={handleClick} value='='>=</button>
      </div>
    </div>
  )
}

export default Test2;