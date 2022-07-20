import { ReactQueryDevtools } from 'react-query/devtools';
import { NextSeo } from 'next-seo';
import { AppType } from 'next/dist/shared/lib/utils';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withTRPC } from "../lib/trpc";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colours.background};
    color: ${({ theme }) => theme.colours.foreground};
  }
`

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextSeo />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </>
  );
}

export default withTRPC(App);