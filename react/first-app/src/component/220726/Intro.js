import React, { useState } from 'react'

function Intro({ name = 'Jini', age, email }) {
  const [test, setTest] = useState(0)
  const countUp = () => {
    setTest(test + 1)
    console.log(test)
  }
  const countDown = () => {
    setTest(test - 1)
    console.log(test)
  }
  return (
    <div>
      <div>
        <h1>Intro</h1>
        이름 : {name} <br />
        나이 : {age} <br />
        이메일 : {email}
      </div>
      <div>
        {test}
        <button onClick={countUp}> countUp</button>
        <button onClick={countDown}> countDown</button>
      </div>
    </div>
  )
}
Intro.defaltProps = {
  name: 'Jini',
}
// Intro.propTypes = {
//   name: PropTypes.string,
// }
export default Intro
