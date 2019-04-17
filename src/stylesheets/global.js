import { createGlobalStyle } from 'styled-components';
import { btnReset } from './tools/index';
import { LemurMediumWoff, LemurMediumWoff2, PelicanSansWoff, PelicanSansWoff2 } from './fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lemur Medium';
    src: local("Lemur Medium"), local("lemur-medium-webfont"), url(${LemurMediumWoff}) format("woff"), url(${LemurMediumWoff2}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pelican Sans';
    src: local("Pelican Sans"), local("pelican-sans-beta-italic-webfont"), url(${PelicanSansWoff}) format("woff"), url(${PelicanSansWoff2}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * { -webkit-tap-highlight-color: rgba(0,0,0,0); }

  html {
    text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  
  body {
    font-family: "Lemur Medium", Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background: #fff;
  }
  
  button {
    ${btnReset()}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    image-rendering: crisp-edges;
  }

  html,
  body,
  div,
  article,
  section,
  main,
  footer,
  header,
  form,
  fieldset,
  legend,
  pre,
  code,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  textarea,
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='tel'],
  input[type='text'],
  input[type='url'] {
    box-sizing: border-box;
  }

  figure {
    margin: 0;
  }

  main {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
    transition: opacity 400ms;
  }

  img.lazyloaded {
    transition: opacity 400ms;
    opacity: 1;
  }

  p {
    margin: 0;
  }
  
  i {
    font-style: italic;
  }

  b, strong {
    font-weight: 700;
  }

  @media print {
    @page { margin: 2cm }

    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }
    /*
    * Don't show links that are fragment identifiers
    */
    
    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre {
      white-space: pre-wrap !important;
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    /*
    * Printing Tables:
    * http://css-discuss.incutio.com/wiki/Printing_Tables
    */
    
    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;

export default GlobalStyle;
