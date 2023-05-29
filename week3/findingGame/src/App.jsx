import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

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
