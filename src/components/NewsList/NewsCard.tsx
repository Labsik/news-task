import React from "react";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { INews, removeNews } from "../../redux/news";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "../../redux/hooks";
import { StyledBoxInfoNews, StyledBoxTitleNews, StyledCard } from "./styled";

interface NewsCardProps {
  n: INews
}


export const NewsCard = ({n}:NewsCardProps) => {
  const dispatch = useAppDispatch()

  const { enqueueSnackbar } = useSnackbar();

  const onRemoveNews = (n: INews) => {
    dispatch(removeNews(n));
    enqueueSnackbar(`You've just deleted #${n.id} news`, {
      variant: "success",
    });
  };

  return (
    <StyledCard>
      <CardContent>
        <StyledBoxTitleNews>
          <Typography gutterBottom variant="h6">
            {n.title}
          </Typography>
        </StyledBoxTitleNews>
        <StyledBoxInfoNews>
          <Typography variant="body1" color="text.secondary">
            {n.body}
          </Typography>
        </StyledBoxInfoNews>

      </CardContent>
      <CardActions sx={{backgroundColor: 'darkgrey'}}>
        <Button size="small" variant="outlined" onClick={() => onRemoveNews(n)}>Remove</Button>
      </CardActions>
    </StyledCard>
  )
};
