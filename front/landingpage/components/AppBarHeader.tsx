import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import content from '../locales/appbarheader_content.json'
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const StyledLink = styled(Link)`
  color: #fff; /* Set the text color to white */
  text-decoration: none;
  margin-right: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const StyledTypography = styled(Typography)`
  color: #fff; /* Set the text color to white */
  text-decoration: none;
  margin-right: 1rem;
  font-family: playfair;

`;

const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf5055', // Define your desired primary color
        light: '#a5d6a755', // Define your desired light green color
      },
    },
  });

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
}));

export default function AppBarHeader( props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={theme}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          <StyledTypography variant="h5" sx={{ flexGrow: 1 }}>
            IWillSave.earth
          </StyledTypography>
          <StyledLink href="/">{content.home}</StyledLink> {' '}
          <StyledLink href="/contribute">{content.contribute}</StyledLink> {' '}
          <StyledLink href="/gpt">{content.gpt}</StyledLink> {' '}

          {content.usersList && <StyledLink href="/users">{content.usersList}</StyledLink> }
          {content.usersAPI && <StyledLink href="/api/users">{content.usersAPI}</StyledLink>}
          {content.login && <Button color="inherit">{content.login}</Button>}
        </Toolbar>
      </StyledAppBar>
      </ThemeProvider>
    </Box>
  );
}