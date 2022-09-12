import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts'

function App() {
  return (
    <BrowserRouter>
      <Link to='/login'>Login</Link> |<Link to='/post'>Post</Link> |<Link to='/register'>Register</Link>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
