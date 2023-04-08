import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const Note2 = () => {


  const [notes, setNotes] = useState([]);
  const [zaInput, setZaInput] = useState({
    ime: "",
    prezime: "",
    email: "",
    telefon: ""
  });
  const [editNote, setEditNote] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZaInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = () => {
    if (editNote) {
      const updatedNote = {
        ...editNote,
        text: zaInput
      };
      const updatedNotes = notes.map(note => (
        note.id === editNote.id ? updatedNote : note
      ));
      setNotes(updatedNotes);
      setEditNote(null);
    } else {
      const newNote = {
        id: uuidv4(),
        text: zaInput
      };
      setNotes([...notes, newNote]);
    }

    setZaInput({
      ime: "",
      prezime: "",
      email: "",
      telefon: ""
    });
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (note) => {
    setZaInput(note.text);
    setEditNote(note);
  };

  return (

    <div className="forma">
      <h3 className='registration'>Note 2</h3>

      <label for="name"></label>
      <input type="input" placeholder="Name..."
        name="ime"
        value={zaInput.ime}
        onChange={handleChange}
      />
      <br />
      <label for="name"></label>
      <input type="input" placeholder="Last name..."
        name="prezime"
        value={zaInput.prezime}
        onChange={handleChange}
      />
      <br />
      <label for="name"> </label>
      <input type="input" placeholder="someone@gmail.com"
        name="email"
        value={zaInput.email}
        onChange={handleChange}
      />
      <br />
      <label for="name"></label>
      <input placeholder="Message..."
        type="text"
        name="telefon"
        value={zaInput.telefon}
        onChange={handleChange}
      />
      <br />

      {editNote ? (
        <button type="button" onClick={handleClick}>Update</button>
      ) : (
        <button type="button" onClick={handleClick}>Add</button>
      )}

      <div className="rezultat">
        {notes.map(note => (
          <div key={note.id}>

            <ol className="ispis">
              <p>Name: {note.text.ime}</p>
              <p>Last name: {note.text.prezime}</p>
              <p>Email: {note.text.email}</p>
              <p>Message: {note.text.telefon}</p>
            </ol>

            <div className="container">
              <button type="button" onClick={() => handleEdit(note)}>Edit</button>
              <button type="button" onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
export default Note2