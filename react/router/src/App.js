import './App.css'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import Albums from './components/Albums'
import Nav from './components/Nav'
import PostDetail from './components/Posts/PostDetail'
import PostIndex from './components/Posts/PostIndex'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'
import AlbumList from './components/Albums/AlbumList'
import Photos from './components/Albums/Photos'
import PhotoList from './components/Albums/Photos/PhotoList'
import PhotoDetail from './components/Albums/Photos/PhotoDetail'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      {/* <h5>{location.pathname}</h5>
      <button onClick={() => navigate(-1)}>뒤로 가기</button> */}
      <Nav />
      <Routes>
        {/* 공통요소 */}
        <Route path='posts' element={<PostIndex />}>
          <Route index element={<Posts />} />
          <Route path=':postId' element={<PostDetail />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=':userId' element={<UserDetail />} />
        </Route>
        <Route path='albums' element={<Albums />}>
          <Route index element={<AlbumList />} />
          <Route path=':albumId' element={<Photos />}>
            <Route index element={<PhotoList />} />
            <Route path='photos/:photoId' element={<PhotoDetail />} />
          </Route>
        </Route>
        <Route path='*' element={<p>Not Found</p>}></Route>
      </Routes>
    </div>
  )
}

export default App
