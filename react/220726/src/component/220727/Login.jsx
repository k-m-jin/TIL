import React, { useEffect, useState } from 'react'

function Login() {
  const [userInput, setUserInput] = useState({ id: '', pw: '' })

  const onUserInputChange = (e) => {
    // setUserInput(e.target.value)
    const { name, value } = e.target
    // userinput 에 뭐가 있는지 확실히 알고 있을 때를 제외하곤 사용 자제
    setUserInput({ ...userInput, [name]: value })
  }
  const doLogin = () => {
    alert('로그인')
  }

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  return (
    <div>
      <h1>Login</h1>
      {userInput.id}
      <input type='text' placeholder='아이디' onChange={onUserInputChange} name='id' />
      <input type='password' placeholder='비밀번호' onChange={onUserInputChange} name='pw' />
      <button onClick={doLogin}>login</button>
    </div>
  )
}

export default Login
