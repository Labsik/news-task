import { styled } from "@mui/material";
import { Colors } from "../../theme/colors";

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  margin: '2rem auto',
  gap: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}))


export const StyledInput = styled('input')({
  width: '100%',
  maxWidth: '600px',
  color: Colors.BLACK,
  background: Colors.WHITE,
  padding: '1rem 0',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '5px',

  '&:focus': {
    outline: 'none'
  },
})