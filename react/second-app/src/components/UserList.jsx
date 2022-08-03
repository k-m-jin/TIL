import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'

function UserList() {
  const [userInput, setUserInput] = useState({ id: '', name: '', email: '' })
  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const { state, dispatch } = useContext(UserContext)

  // const [state, dispatch] = useReducer(userReducer, userData)

  return (
    <div>
      {state.map((user) => {
        return (
          <>
            <p key={user.id}>{user.name}</p>
            <button onClick={() => dispatch({ type: 'DELETE', data: { id: user.id } })}>삭제</button>
          </>
        )
      })}
      <input name='name' onChange={userInputHandler} />
      <input email='email' onChange={userInputHandler} onKeyDown={() => dispatch({ type: 'ADD', data: userInput })} />
      <button onClick={() => dispatch({ type: 'ADD', data: userInput })}>추가하기</button>
    </div>
  )
}

export default UserList
