import { Box, Card, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  display:'flex',
  flexDirection:'column',
  alignItems: 'center',
  marginBottom: '16px'
})

export const StyledCard = styled(Card)({
  width: '100%',
  maxHeight: '450px',
  height: '100%'
})

export const StyledBoxTitleNews = styled(Box)(({ theme }) => ({
  height: '100px',
  [theme.breakpoints.between('sm', 'lg')]: {
    height: '130px'
  }
}))

export const StyledBoxInfoNews = styled(Box)(({ theme }) => ({
  height: '140px',
  [theme.breakpoints.between('sm', 'lg')]: {
    height: '180px'
  }
}))