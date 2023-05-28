import { AppBar, Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react'

import AppBarHeader from './AppBarHeader';
import Head from 'next/head'
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

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <MainContainer>
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
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </MainContainer>
);

export default Layout
