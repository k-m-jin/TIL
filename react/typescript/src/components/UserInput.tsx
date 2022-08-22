import React, { useState } from 'react'

function UserInput() {
  const [userInput, setUserInput] = useState({
    title: '',
    body: '',
  })
  const { title, body } = userInput

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <div>
      <input name='title' value={title} onChange={onChange} />
      <input name='body' value={body} onChange={onChange} />
    </div>
  )
}

export default UserInput
