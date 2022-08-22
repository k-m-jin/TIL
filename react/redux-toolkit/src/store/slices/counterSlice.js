import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload.diff
    },
    decrementByAmount: (state, action) => {
      state.value = state.value - action.payload.diff
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export function useCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return {
    count,
    dispatch,
  }
}

export default counterSlice.reducer
