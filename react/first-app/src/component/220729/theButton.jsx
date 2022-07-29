import React from 'react'
import '../../styles/Button.scss'
import style from '../../styles/Button.module.css'

function Button({ size, bg }) {
  return (
    <>
      {/* scss */}
      <button className={`Button ${size} ${bg}`}>
        <p>Button</p>
      </button>
      {/* module.css */}
      <button className={`${style.Button} ${style.large}`}>
        <p>Button</p>
      </button>
    </>
  )
}

export default Button
