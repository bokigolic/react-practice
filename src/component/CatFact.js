import React, { useEffect, useState } from 'react'
import getData from './api'

const CatFact = () => {

  const [facts, setFacts] = useState("")
  useEffect(() => {
    getData()
      .then(response => setFacts(response))
  }, [])
  return (

    <div className="form">
      <h2>Cat</h2>
      {facts}
    </div>

  )
}

export default CatFact
