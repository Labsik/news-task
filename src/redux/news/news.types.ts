export interface INews {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface INewsState {
  news: INews[];
  loading: boolean;
  error: null | Error;
  limit: number;
  maxNewsNumber: number;
}
