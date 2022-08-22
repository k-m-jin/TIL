import { createAction, createReducer } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const incrementByAmount = createAction('counter/incrementByAmount')
export const decrementByAmount = createAction('counter/decrementByAmount')

const initialState = {
  value: 0,
}

const counter = createReducer(initialState, {
  [increment]: (state) => {
    state.value = state.value + 1
  },
  [decrement]: (state) => {
    state.value = state.value - 1
  },
  [incrementByAmount]: (state, action) => {
    state.value = state.value + action.payload.diff
  },
  [decrementByAmount]: (state, action) => {
    state.value = state.value - action.payload.diff
  },
})

export function useCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return {
    count,
    dispatch,
  }
}

export default counter
