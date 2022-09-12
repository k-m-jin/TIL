import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

function Posts() {
  const [userInput, setUserInput] = useState({ title: '', body: '' })
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const [cookies, setCookie, removeCookie] = useCookies()

  const [data, setData] = useState(null)
  const getData = async () => {
    const response = await axios.get('http://localhost:8000/posts', {
      headers: {
        Authorization: `Bearer ${cookies['accessToken']}`,
      },
    })
    setData(response.data)
  }
  const postData = async () => {
    // 백엔드가 진짜라면 우리가 userId 보낼 필요없음
    const response = await axios.post(
      'http://localhost:8000/posts',
      { title: userInput.title, body: userInput.body, userId: cookies['userId'] },
      {
        headers: {
          Authorization: `Bearer ${cookies['accessToken']}`,
        },
      }
    )
    getData()
  }
  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:8000/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies['accessToken']}`,
      },
    })
    getData()
  }
  const putData = async (id) => {
    const response = await axios.put(
      `http://localhost:8000/posts/${id}`,
      { title: userInput.title, body: userInput.body },
      {
        headers: {
          Authorization: `Bearer ${cookies['accessToken']}`,
        },
      }
    )
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      Posts
      {data &&
        data.map((post) => (
          <p key={post.id}>
            {post.body}
            <button onClick={() => deleteData(post.id)}>제거</button>
            <button onClick={() => putData(post.id)}>수정하기</button>
          </p>
        ))}
      <input onChange={inputChangeHandler} name='title'></input>
      <input onChange={inputChangeHandler} name='body'></input>
      <button onClick={postData}>글쓰기</button>
    </div>
  )
}

export default Posts
