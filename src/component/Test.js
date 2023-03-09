const Test = () => {



  const handleChange = () => {

  }
  const handleClick = () => {

  }

  return (
    <div>
      <h1>Test</h1>
      <div>
        <label>Name </label>
        <input type="text"  onChange={handleChange} />
      </div>
      <div>
        <label>Email </label>
        <input />
      </div>
      <div>
        <label>Phone number </label>
        <input />
      </div>
<button type="button" onClick={handleClick}>Submit</button>

    </div>
  )
};
export default Test;