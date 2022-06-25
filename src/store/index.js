import { configureStore } from '@reduxjs/toolkit'
import nameUser from './slices/nameUser.slice'

export default configureStore({
  reducer: {
    nameUser
  }
})