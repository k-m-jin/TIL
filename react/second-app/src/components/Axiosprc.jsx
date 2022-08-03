import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosprc() {
  const [posts, setPosts] = useState(null)

  const getPost = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: { userId: 3 } })
    setPosts(response.data)
  }
  useEffect(() => {
    getPost()
  }, [])

  return <div>{posts && posts.map((post) => <p>{post.title}</p>)}</div>
}

export default Axiosprc
