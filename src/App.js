import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from 'pages/Home/index';
import GlobalFonts from 'fonts/fonts';

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
  background: ${props => props.theme.athensGray};
`;

const theme = {
  athensGray: '#eff1f5',
  mirage: '#181E25'
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  );
}