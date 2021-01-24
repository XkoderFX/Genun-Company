import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import React from 'react';
import theme from '../theme/theme';
import '../styles/html.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
