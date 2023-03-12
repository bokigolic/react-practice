import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const Note2 = () => {

  const handleChange = (e) => {
    setZaInput(e.target.value)
  }

  const handleClick = () => {
    const newNote = {
      id: uuidv4(),
      text: zaInput
    }

    setNotes([...notes, newNote])

    setZaInput('')
  }
  const [notes, setNotes] = useState([])
  const [zaInput, setZaInput] = useState({
    ime: "",
    prezime: "",
    email: "",
    telefon: ""
  })
  return (
    <div className="note-dva">
      <h2>Note 2</h2>
      <label>Ime: </label>
      <input
        type="text"
        name="ime"
        value={zaInput.ime}
        onChange={handleChange}
      /> <br />
      <label>Prezime: </label>
      <input
        type="text"
        name="prezime"
        value={zaInput.prezime}
        onChange={handleChange}
      /> <br />
      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={zaInput.email}
        onChange={handleChange}
      /> <br />
      <label>Broj Telefona: </label>
      <input
        type="number"
        name="telefon"
        value={zaInput.telefon}
        onChange={handleChange}
      /> <br />
      <button type="button" onClick={handleClick}>Add</button>

      <div>
        {

        }
      </div>
    </div>

  )
}
export default Note2