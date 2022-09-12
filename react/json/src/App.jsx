import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Posts from './components/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Posts />
    </div>
  )
}

export default App
