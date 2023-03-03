import { Button, styled } from "@mui/material";
import { Colors } from "../theme/colors";

export const StyledButton= styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  color: Colors.RED,
  background: Colors.WHITE,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))