import React, { useEffect, useState } from 'react'
import { getData } from './api'

const CatFact = () => {

  const [facts, setFacts] = useState("")

  const fetchData = () => {
    getData()
      .then(response => setFacts(response))
      .catch((response) => alert(response));
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (

    <div className="forma">
      <form>
        <div className='registration'><h3>About cat</h3>
          {facts}
        </div>
        <button type="button" onClick={fetchData}>Next</button>
      </form >
    </div>
  )
}

export default CatFact
