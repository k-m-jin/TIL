import { createContext, useReducer } from 'react'
import { userData } from '../constants/userDate'
import { userReducer } from '../reducers/userReducer'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, userData)
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
    </div>
  )
}
