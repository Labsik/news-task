import { Button, styled } from "@mui/material";

export const StyledButton= styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  color: 'red',
  background: 'white',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))