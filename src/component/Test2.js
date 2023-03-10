import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const Test2 = () => {

  const [input, setInput] = useState();
  const [dugme, setDugme] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    const unos = {
      id: uuidv4(),
      text: input
    }

    setDugme([...dugme, unos])
  }
  return (
    <div className="note">
      <h3>Moj test</h3>
      <label>Enter value: </label>
      <input
        type='text'
        value={input}
        onChange={handleChange}


      />
      <button type="button" onClick={handleClick}>Add</button>

      <ol>
        {dugme.map(note => (
          <li key={note.id}>{note.text} {note.number}</li>
        ))}
      </ol>
    </div>
  )
}
export default Test2;