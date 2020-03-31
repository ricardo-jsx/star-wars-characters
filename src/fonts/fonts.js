import { createGlobalStyle } from 'styled-components';

import StarJedi from './star-jedi.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: 'StarJedi';
      src: url(${StarJedi}) format('truetype');
      font-weight: 300;
      font-style: normal;
  }
`;
