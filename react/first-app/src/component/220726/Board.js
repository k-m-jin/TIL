import React, { useState } from 'react'
import { data } from '../../constant/data'

function Board(props) {
  const { category } = props
  const [articles, setArticles] = useState(data.filter((element) => element.category === category))
  return (
    <>
      <h1>Board</h1>
      <h3>{data.title}</h3>
      <p>{data.content}</p>

      {articles.map((element) => {
        return (
          <div key={element.id}>
            <h3>{element.title}</h3>
            <p>{element.content}</p>
          </div>
        )
      })}
    </>
  )
}

export default Board
