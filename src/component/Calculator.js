import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Calculator = () => {
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
    <>
      <h3 className='registration'>Calculator</h3>
      <div className="form-calc">
        <div>
          <div className="input">
            <input
              type="text"
              value={inputValue}
            />
          </div>
          <div className="calculator">
            <button type="button" onClick={handleClick} value='7'>7</button>
            <button type="button" onClick={handleClick} value='8'>8</button>
            <button type="button" onClick={handleClick} value='9'>9</button>
            <button type="button" onClick={handleClick} value='*'>*</button>
          </div>
          <div className="calculator">
            <button type="button" onClick={handleClick} value='4'>4</button>
            <button type="button" onClick={handleClick} value='5'>5</button>
            <button type="button" onClick={handleClick} value='6'>6</button>
            <button type="button" onClick={handleClick} value='-'>-</button>

          </div>

          <div className="calculator">
            <button type="button" onClick={handleClick} value='1'>1</button>
            <button type="button" onClick={handleClick} value='2'>2</button>
            <button type="button" onClick={handleClick} value='3'>3</button>
            <button type="button" onClick={handleClick} value='+'>+</button>
          </div>
          <div className="calculator">
            <button type="button" onClick={handleClick} value='C'>c</button>
            <button type="button" onClick={handleClick} value='0'>0</button>
            <button type="button" onClick={handleClick} value='.'>.</button>
            <button type="button" onClick={handleClick} value='/'>/</button>
          </div>
          <div className="calculator">
            <button className="jednako" type="button" onClick={handleClick} value='='>=</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Calculator;