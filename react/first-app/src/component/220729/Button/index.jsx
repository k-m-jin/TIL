import React from 'react'
import * as S from './style'

function Button() {
  return (
    <>
      {/* styled component */}
      <S.Button isClicked={false}>
        <p>Button</p>
      </S.Button>
    </>
  )
}

export default Button
