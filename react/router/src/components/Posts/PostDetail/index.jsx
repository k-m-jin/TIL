import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function PostDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { post } = location.state ? location.state : { post: '' }

  if (!post) return <p>Not Found</p>
  return (
    <div>
      {post.title}
      {post.body}
      <button onClick={() => navigate('/users', { state: { data: 1 } })}>유저로 가기</button>
      {/* <button onClick={() => navigate(-1)}>뒤로 가기</button> */}
    </div>
  )
}

export default PostDetail
