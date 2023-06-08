import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
