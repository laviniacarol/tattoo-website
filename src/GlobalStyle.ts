import { createGlobalStyle } from "styled-components";
import QasbyneFont from './assets/fonts/Qasbyne-8MXxB.otf';
import VasquzFont from './assets/fonts/Vasquz-AL74p.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Qasbyne';
    src: url(${QasbyneFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Vasquz';
    src: url(${VasquzFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
