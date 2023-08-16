import { type InitialState } from '@/types/redux/slices/loginUser.slice.type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  loginUser: '',
  password: ''
}

export const loginUser = createSlice({
  name: 'Login User',
  initialState,
  reducers: {
    changeLoginUser: (state, action: PayloadAction<InitialState>) => {
      return {
        ...state,
        loginUser: action.payload.loginUser
      }
    },
    changePassword: (state, action: PayloadAction<InitialState>) => {
      return {
        ...state,
        password: action.payload.password
      }
    }
  }
})

export const { changeLoginUser, changePassword } = loginUser.actions
export default loginUser.reducer
