import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../api/postApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)

export default store
////////////////////////

// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger'
// import counterReducer from './slices/counterSlice'

// const logger = createLogger()

// const rootReducer = combineReducers({
//   counter: counterReducer,
// })

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// })

// export default store

////////////////////////////
