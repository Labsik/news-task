import React, {useContext} from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import { AuthContext } from '../../context';
import { StyledBox, StyledTypography } from './styled';
import { StyledButton } from '../../styled';

export const MainInfo = () => {
  const { isAuth } = useContext(AuthContext);

  return (

    <StyledBox>
      <StyledTypography variant="h3">
            Welcome!
      </StyledTypography>
      <Typewriter
        options={{
          strings: ["Read breaking news here"],
          autoStart: true,
          loop: true,
        }}
      />
      <Box display={'grid'} gap={2}>
        <Link to='/news'>
          <StyledButton variant="outlined">
      Go to the news
          </StyledButton>
        </Link>

        {!isAuth && (
          <Link to='/login'>
            <StyledButton variant="outlined">
                Login
            </StyledButton></Link>
        )}
      </Box>

    </StyledBox>
  )
}
