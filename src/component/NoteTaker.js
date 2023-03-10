import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NoteTaker = () => {

  const [input, setInput] = useState()
  const [notes, setNotes] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault() 
    // prevent the form from submitting and refreshing the page because button in form have submit by default


    const newNote = {
      id: uuidv4(),
      text: input
      

    }


    setNotes([...notes, newNote])

    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="note">
      <h1>Note Taker</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter a note: </label>
        <input
          name="note"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ol>
        {notes.map(note => (
          <li key={note.id}>{note.text} {note.number}</li>
        ))}
      </ol>
    </div>
  )
};

export default NoteTaker;