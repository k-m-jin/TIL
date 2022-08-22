import React, { useState } from 'react'
import { useCreatePostMutation } from '../api/postApi'

function PostInput() {
  const [postInput, setPostInput] = useState({ title: '', body: '' })
  const [createPost] = useCreatePostMutation()

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setPostInput({ ...postInput, [name]: value })
  }

  const submitHandler = () => {
    createPost({
      data: postInput,
    })
  }

  return (
    <div>
      <input name='title' onChange={inputChangeHandler} />
      <input name='body' onChange={inputChangeHandler} />
      <button onClick={submitHandler}>Save</button>
    </div>
  )
}

export default PostInput
