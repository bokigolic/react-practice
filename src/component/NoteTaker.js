import { useState } from "react";

const NoteTaker = () => {

  const [input, setInput] = useState()

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="note">
      <h1>Note Taker</h1>
      <label>Enter a note: </label>
      <input
        name="note"
        value={input}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
};

export default NoteTaker;