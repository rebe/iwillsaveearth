import { AppBar, Box, Container, CssBaseline, Typography } from '@mui/material';
import React, { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBarHeader from './Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Head from 'next/head'
import Link from '@mui/material/Link';
import routes from '../routes';
import { styled } from '@mui/system';

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type Props = {
  children?: ReactNode
  title?: string
}

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Contribute', url: routes.contribute },
  { title: 'Actions', url: routes.actions },
  { title: 'Story', url: routes.story },
];


const defaultTheme = createTheme();

// MainContainer style={{ backgroundImage: 'url(sunrise_1920.jpg)', backgroundRepeat: 'repeat-y' }}
const Layout = ({ children, title = 'IWillSave.earth' }: Props) => (
  <MainContainer >
    <GoogleOAuthProvider clientId="562720918207-0tirgod1mhp6fc1s7ovjs4jv5f8ibarv.apps.googleusercontent.com">
      <React.StrictMode>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <AppBarHeader title="IWillSave.earth" sections={sections} />
            <main>
              <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                {children}
              </Box>
            </main>

          </Container>
            <footer style={{ textAlign: 'center', margin: '10px' }}>
              <hr />
              <Link href="https://github.com/rebe/iwillsaveearth" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                Please. Join us in contributing, give comments and ideas from GitHub Repository
              </Link>
            </footer>
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </MainContainer>
);

export default Layout
