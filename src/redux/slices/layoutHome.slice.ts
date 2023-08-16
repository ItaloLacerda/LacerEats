import { type InitialState } from '@/types/redux/slices/layout.slice.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
  open: false
}

export const layoutHomeSlice = createSlice({
  name: 'Layout Home',
  initialState,
  reducers: {
    handleDrawerOpen: (_state) => {
      return {
        open: true
      }
    },
    handleDrawerClose: (state) => {
      return initialState
    }
  }
})

export const { handleDrawerClose, handleDrawerOpen } = layoutHomeSlice.actions
export default layoutHomeSlice.reducer
