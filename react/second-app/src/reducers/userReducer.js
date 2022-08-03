export function userReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'DELETE':
      return state.filter((element) => element.id !== action.data.id)
    default:
      throw new Error(`${action.type}`)
  }
}
