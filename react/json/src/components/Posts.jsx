import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Posts() {
  const [userInput, setUserInput] = useState({ title: '', body: '' })
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const [data, setData] = useState(null)

  const getData = async () => {
    const response = await axios.get('http://localhost:8000/posts')
    setData(response.data)
  }
  const postData = async () => {
    const response = await axios.post('http://localhost:8000/posts', { title: userInput.title, body: userInput.body })
    getData()
  }
  const deleteDate = async (id) => {
    const response = await axios.delete(`http://localhost:8000/posts/${id}`)
    getData()
  }
  const putData = async (id) => {
    const response = await axios.put(`http://localhost:8000/posts/${id}`, { title: userInput.title, body: userInput.body })
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {data &&
        data.map((post, index) => (
          <div key={post.id}>
            <p>{index + 1}</p>
            {post.body}
            <button onClick={() => deleteDate(post.id)}>삭제</button>
            <button onClick={() => putData(post.id)}>수정</button>
          </div>
        ))}
      <input onChange={inputChangeHandler} name='title' />
      <input onChange={inputChangeHandler} name='body' />
      <button onClick={postData}>글쓰기</button>
    </div>
  )
}

export default Posts
