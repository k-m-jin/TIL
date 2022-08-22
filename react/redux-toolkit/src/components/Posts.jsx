import React from 'react'
import { useGetPostsQuery } from '../api/postApi'

function Posts() {
  const { data: posts, isLoading, isError } = useGetPostsQuery()

  if (isLoading) {
    return <div>로딩 중...</div>
  }
  if (isError || !posts) {
    return <div>오류 발생</div>
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
