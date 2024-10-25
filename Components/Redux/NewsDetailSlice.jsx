import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newsId: 0
  //   newsHeadLine: 'NewsHeadLine',
  //   newsSubLine: 'newsSubLine'
}

export const NewsDetailSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsDetail: (state, action) => {
      state.newsId = action.payload.newsId
    }
  }
})
export const { setNewsDetail } = NewsDetailSlice.actions;
export default NewsDetailSlice.reducer
