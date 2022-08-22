import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)
  const onIncrease = () => setCount((prevState) => prevState + 1)
  const onDecrease = () => setCount((prevState) => prevState - 1)

  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter
