import { createSlice } from "@reduxjs/toolkit";
import { newsStoreKey } from "./news.const";

const initialState = {
    news: [],
    loading: false,
    error: null
}

export const newsSlice = createSlice({
    name: newsStoreKey,
    initialState,
    reducers: {}
})