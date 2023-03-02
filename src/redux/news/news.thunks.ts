import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsData } from "../../api";
import { newsStoreKey } from "./news.const";

export const fetchNews = createAsyncThunk(
  newsStoreKey,
  async (limit: number) => {
    try {
      const response = await axios.get(getNewsData(limit));
      return response.data;
    } catch (err) {
      throw new Error(String(err));
    }
  }
);
