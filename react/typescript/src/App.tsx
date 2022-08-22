import React from 'react'
import logo from './logo.svg'
import './App.css'
import PropsTest from './components/PropsTest'
import Counter from './components/Counter'
import UserInput from './components/UserInput'

function App() {
  return (
    <div className='App'>
      <PropsTest name='audwls' />
      <Counter />
      <UserInput />
    </div>
  )
}

export default App
