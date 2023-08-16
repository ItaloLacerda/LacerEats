import { configureStore } from '@reduxjs/toolkit'
import loginUserReducer from './slices/loginUser.slice'
import layoutHomeReducer from './slices/layoutHome.slice'

export const store = configureStore({
  reducer: {
    loginUserReducer,
    layoutHomeReducer
  }
})
