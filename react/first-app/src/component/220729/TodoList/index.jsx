import React, { useRef, useState } from 'react'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'
import { todoReducer } from '../../../reducers/todoReducer'

function TodoLIst() {
  const todoId = useRef(0)
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-07-20', content: '밥', checked: false },
  ])

  // reducer
  // const [todoData, dispatch] = useReducer(todoReducer, [])

  // const todoAddHandler = (userInput) => {
  //   dispatch({ type: 'ADD', data: { ...userInput, id: todoId.current } })
  //   todoId.current += 1
  // }
  // const todoRemoveHandler = (id) => {
  //   dispatch({ type: 'DELETE', data: { id } })
  // }
  // const todoCheckHandler = (id) => {
  //   dispatch({ type: 'CHECK', data: { id } })
  // }

  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>My Todo List</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {/* <TodoAdd todoAddHandler={todoAddHandler} /> */}
      {todoData.map((itemData) => {
        return (
          <TodoItem
            itemData={itemData}
            todoRemoveHandler={todoRemoveHandler}
            todoCheckHandler={todoCheckHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoLIst
