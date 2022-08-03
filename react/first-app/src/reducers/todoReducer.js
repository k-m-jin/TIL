export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'DELETE':
      return state.filter((ele) => ele.id !== action.data.id)
    case 'CHECK':
      return state.map((ele) =>
        ele.id === action.data.id ? { ...ele, checked: !ele.checked } : ele,
      )
    default:
      throw new Error(`${action.type}`)
  }
}
