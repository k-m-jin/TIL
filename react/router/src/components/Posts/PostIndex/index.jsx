import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams, useLocation } from 'react-router-dom'
import { postData } from '../../../constants/postData'

function PostIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)
  const location = useLocation()
  console.log(location)

  const serchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }
  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get('filter')
        const title = post.title.toLowerCase()
        return filter ? title.includes(filter) : true
      })
    )
  }, [searchParams])

  return (
    <div>
      <input onChange={serchInputHandler} />
      {posts.map((post) => (
        <NavLink
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          to={`/posts/${post.id}`}
          state={{ post: posts.find((data) => data.id === post.id) }}
        >
          <p>{post.title}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default PostIndex
