import { configureStore } from '@reduxjs/toolkit'
import NewsDetailReducer from './NewsDetailSlice'
export const store = configureStore({
  reducer: {
    news: NewsDetailReducer
  }
})
