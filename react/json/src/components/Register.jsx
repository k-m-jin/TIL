import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()

  const doSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', userInput)
      setCookie('accessToken', response.data['accessToken'], { path: '/' })
      // 백엔드가 진짜라면 userId 쿠키에 필요없음, 어차피 accessToken 에 담겨있음
      setCookie('userId', response.data['user']['id'], { path: '/' })
      navigate('/post')
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <div>
      Register
      <input onChange={inputChangeHandler} name='email'></input>
      <input onChange={inputChangeHandler} name='password' type='password'></input>
      <button onClick={doSignup}>회원가입</button>
    </div>
  )
}

export default Register
