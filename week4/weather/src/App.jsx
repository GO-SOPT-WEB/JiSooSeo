import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
