import { Box, Typography, styled } from "@mui/material";


export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  gap: '3rem'
})

export const StyledTypography= styled(Typography)(({ theme }) => ({
  fontSize: '5rem',

  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  }
}))