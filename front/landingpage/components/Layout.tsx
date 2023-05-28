import { AppBar, Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react'

import AppBarHeader from './AppBarHeader';
import GitHubIcon from '@mui/icons-material/GitHub';
import Head from 'next/head'
import Link from '@mui/material/Link';
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

const Layout = ({ children, title = 'IWillSave.earth' }: Props) => (
  <MainContainer style={{ backgroundImage: 'url(sunrise_1920.jpg)', backgroundRepeat: 'repeat-y' }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppBarHeader>
    </AppBarHeader>
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      {children}
    </Box>
    <footer style={{ textAlign: 'center', margin: '10px' }}>
        <hr />
        <Link href="https://github.com/rebe/iwillsaveearth" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Please. Join us in contributing, give comments and ideas from GitHub Repository
        </Link>
      </footer>
  </MainContainer>
);

export default Layout
