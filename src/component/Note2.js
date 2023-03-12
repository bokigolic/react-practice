import { useState } from "react"

const Note2 = () => {

  const handleChange = () => {

  }

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
        type="text"
        name="telefon"
        value={zaInput.telefon}
        onChange={handleChange}
      /> <br />
      <button type="button">Add</button>
    </div>
  )
}
export default Note2