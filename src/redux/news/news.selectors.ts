import { newsStoreKey } from "./news.const";
import { INewsState } from "./news.types";

interface State {
  [newsStoreKey]: INewsState;
}
const select = (state: State) => state[newsStoreKey];

export const getNews = (state: State) => select(state);
