import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchNews,
  getNews,
  INews,
  moreNews,
  removeNews,
} from "../../redux/news";
import { Loader } from "../Loader";
import { ErrorBox } from "../Error";

export const NewsList = () => {
  const { news, error, loading, limit, maxNewsNumber } =
    useAppSelector(getNews);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onRemoveNews = (n: INews) => {
    dispatch(removeNews(n));
    enqueueSnackbar(`You've just deleted #${n.id} news`, {
      variant: "success",
    });
  };

  useEffect(() => {
    dispatch(fetchNews(limit));
  }, [dispatch, limit]);

  return (
    <div>
      {news.map((n) => (
        <div key={n.id}>
          {n.title}
          <button onClick={() => onRemoveNews(n)}>delete</button>
        </div>
      ))}
      {news.length === maxNewsNumber ? (
        <p>You've seen all news! Congratulations!</p>
      ) : (
        <button
          onClick={() => {
            dispatch(moreNews(limit + 20));
          }}
        >
          load more
        </button>
      )}

      {error && <ErrorBox />}
      {loading && <Loader />}
    </div>
  );
};
