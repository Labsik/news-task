import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchNews,
  getNews,
  moreNews,
} from "../../redux/news";
import { Loader } from "../Loader";
import { ErrorBox } from "../Error";

import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { StyledBox } from "./styled";
import { NewsCard } from "./NewsCard";
import { StyledButton } from "../../styled";

export const NewsList = () => {
  const { news, error, loading, limit, maxNewsNumber } =
    useAppSelector(getNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews(limit));
  }, [dispatch, limit]);

  const content = news?.map(n =>
    (
      <Grid key={n.id} item xs={12} sm={6} md={4} lg={4}>
        <NewsCard n={n}/>
      </Grid>
    )
  )

  return (
    <div>

      <StyledBox>
        <Typography variant="h3">News</Typography>
      </StyledBox>

      {error && <ErrorBox />}
      {loading && !news.length && <Loader />}
      <Grid container justifyContent="space-between" alignItems="center" spacing={3} sx={{marginBottom: '3rem'}}>
        {content}
      </Grid>

      <StyledBox>
        {news.length === maxNewsNumber ? (
          <Typography variant="h5">You've seen all news! Congratulations!</Typography>
        ) : null}

        {news.length !== maxNewsNumber &&  !loading && !error && (
          <StyledButton onClick={() => dispatch(moreNews(limit + 21))}>Load more</StyledButton>
        )}

        {loading && !!news.length && <Loader />}
      </StyledBox>

    </div>
  );
};
