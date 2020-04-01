import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from 'pages/Home/index';
import GlobalFonts from 'fonts/fonts';

import client from './apollo.client';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.athensGray};
`;

const theme = {
  white: '#FFF',
  athensGray: '#eff1f5',
  mirage: '#181E25',
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <Main>
          <Home />
        </Main>
      </ThemeProvider>
    </ApolloProvider>
  );
}
