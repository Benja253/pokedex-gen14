import { createSlice } from '@reduxjs/toolkit'

export const nameUserSlice = createSlice({
  name: 'nameUser',
  initialState: '',
  reducers: {
    setNameGlobal: (state, action) => action.payload
  }
})

export const { setNameGlobal } = nameUserSlice.actions

export default nameUserSlice.reducer