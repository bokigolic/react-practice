import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const Note2 = () => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZaInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleClick = () => {
    const newNote = {
      id: uuidv4(),
      text: zaInput
    };
    setNotes([...notes, newNote]);

    setZaInput({
      ime: "",
      prezime: "",
      email: "",
      telefon: ""
    });
  }

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
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
      


      <div className="rezultat">
        {notes.map(note => (
          <div key={note.id}>

            <ol>
              <li><p>Ime: {note.text.ime}</p></li>
              <li><p>Prezime: {note.text.prezime}</p></li>
              <li><p>Email: {note.text.email}</p></li>
              <li><p>Broj Telefona: {note.text.telefon}</p></li>

            </ol>
            <button type="button" onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

  )
}
export default Note2