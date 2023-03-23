import { useState } from "react"

const Test3 = () => {
  const [input, setInput] = useState()
  const handleClick = () => {
    //console.log("Ja sam samrt")
  }
  return (
    <div className="form">
      <h3 className='registration'>CRUD test</h3>
      <label>Name: </label>
      <input
        type="text"
        name="name"
      />
      <br />
      <label>Email: </label>
      <input
        type="text"
        name="email"
      />
      <br />
      <label>Message: </label>
      <input
        type="text"
        name="message"
      />
      <br />
      <div class="container">
        <button type="button" onClick={handleClick}>Send</button>
      </div>
    </div>
  )
}
export default Test3