import { decrement, decrementByAmount, increment, incrementByAmount, useCounter } from '../store/slices/counterSlice'

export default function Counter() {
  const { count, dispatch } = useCounter()

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount({ diff: 2 }))}>+2</button>
      <button onClick={() => dispatch(decrementByAmount({ diff: 2 }))}>-2</button>
    </div>
  )
}
