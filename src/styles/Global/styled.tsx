import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-50: #F7F8FA;
    --gray-100: #e6e8eb;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494d4b;
    --green-500: #04D361;
    --purple-300: #9f75ff;
    --purple-400: #9164fa;
    --purple-500: #8257e5;
    --purple-800: #6f48c9;
    --white: #fff;
  }

  body {
    background: var(--gray-50);
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
  }

  input, textarea, button {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Lexend, sans-serif;
    font-weight: 600;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;