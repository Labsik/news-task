import { createSlice } from "@reduxjs/toolkit";
import { newsStoreKey } from "./news.const";
import { fetchNews } from "./news.thunks";
import { INewsState } from "./news.types";

const initialState: INewsState = {
  news: [],
  loading: false,
  error: null,
  limit: 21,
  maxNewsNumber: 100,
};

export const newsSlice = createSlice({
  name: newsStoreKey,
  initialState,
  reducers: {
    // NOTE: I've decided to delete a news without delete request because it appears after refreshing a page.
    removeNews: (state, action) => {
      const { id } = action.payload;
      state.news = state.news.filter((n) => n.id !== id);
    },
    moreNews: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = new Error();
      });
  },
});

export const { removeNews, moreNews } = newsSlice.actions;
