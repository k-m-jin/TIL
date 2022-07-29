import React, { useRef } from 'react'

function Refs() {
  const inputRef = useRef()

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(inputRef.current.value)
    }
  }

  return (
    <div>
      Refs
      {/* 인풋레프의 current 요소에 , getElementById */}
      <input ref={inputRef} onKeyDown={keyHandler} />
    </div>
  )
}

export default Refs
