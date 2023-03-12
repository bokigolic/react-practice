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
    <div class="form__group field">
      <h2>Note 2</h2>
      <label for="name" class="form__label"></label>
      <input type="input" class="form__field" placeholder="Name..."
        name="ime"
        value={zaInput.ime}
        onChange={handleChange}
      /> <br />
      <label for="name" class="form__label"></label>
      <input type="input" class="form__field" placeholder="Last name..."
        name="prezime"
        value={zaInput.prezime}
        onChange={handleChange}
      /> <br />
      <label for="name" class="form__label"> </label>
      <input type="input" class="form__field" placeholder="someone@gmail.com"
        name="email"
        value={zaInput.email}
        onChange={handleChange}
      /> <br />
      <label for="name" class="form__label"></label>      <input class="form__field" placeholder="55555555555"
        type="number"
        name="telefon"
        value={zaInput.telefon}
        onChange={handleChange}
      /> <br />
      {editNote ? (
        <button type="button" onClick={handleClick}>Update</button>
      ) : (
        <button type="button" onClick={handleClick}>Add</button>
      )}

      <div className="rezultat">
        {notes.map(note => (
          <div key={note.id}>

            <ol className="lista">
              <li><p>Name: {note.text.ime}</p></li>
              <li><p>Last name: {note.text.prezime}</p></li>
              <li><p>Email: {note.text.email}</p></li>
              <li><p>Phone: {note.text.telefon}</p></li>

            </ol>
            <div class="container">

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