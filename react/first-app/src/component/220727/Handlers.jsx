import React, { useState } from 'react'

function Handlers() {
  const [number, setNumber] = useState(0)

  const changeHandler = (e) => {
    setNumber(e.target.value)
  }

  const keyHandler = (e) => {
    if (e.key === 10) {
      setNumber(10)
    }
  }
  return (
    <div>
      Handlers
      <input onChange={changeHandler} />
      <p>{number}</p>
      <input onChange={keyHandler} />
      <p>{number}</p>
    </div>
  )
}

export default Handlers
