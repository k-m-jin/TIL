import { Provider } from 'react-redux'
import Post from './components/Post'
import Posts from './components/Posts'
import PostInput from './components/PostInput'
import { store } from './store/index'

function App() {
  return (
    <Provider store={store}>
      {/* <Posts /> */}
      <PostInput />
      <Post postId={1} />
    </Provider>
  )
}

export default App
