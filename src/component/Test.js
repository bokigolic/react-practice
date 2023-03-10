import { useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
setCounter(counter +1)
  }
  const handleClickMinus = () => {
    setCounter(counter -1)

  }
  const handleClickReset = () =>{
    setCounter(0)
  }
  return (
    <div>

      <h1>Counter {counter}</h1>
    

      <div>
        <button type="button" onClick={handleClickMinus}>-</button>
        <button type="button" onClick={handleClickPlus}>+</button>
        <button type="button" onClick={handleClickReset}>reset</button>
      </div>
    </div>
  )
}
export default Test;