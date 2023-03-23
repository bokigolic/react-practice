import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter(counter + 1)
  }
  const handleClickMinus = () => {
    setCounter(counter - 1)

  }
  const handleClickReset = () => {
    setCounter(0)
  }
  return (
    <div className="form">
      <h3 className='registration'>Counter</h3>
      <div>
        <button type="button" onClick={handleClickMinus}>-</button>
        <button type="button" onClick={handleClickPlus}>+</button>
        <button type="button" onClick={handleClickReset}>reset</button>
      </div>
    </div>
  )
}
export default Counter;