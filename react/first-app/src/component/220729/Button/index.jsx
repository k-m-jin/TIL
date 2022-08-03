import React, { useState } from 'react'
import * as S from './style'

function Button() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      {/* styled component */}
      <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <p>good</p> : <p>click!</p>}
      </S.Button>
    </>
  )
}

export default Button
