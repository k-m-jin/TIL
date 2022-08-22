import React from 'react'
import { useGetPostByIdQuery } from '../api/postApi'

function Post({ postId }) {
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId)

  if (isLoading) {
    return <div>로딩 중...</div>
  }
  if (isError || !post) {
    return <div>Something went wrong</div>
  }
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
