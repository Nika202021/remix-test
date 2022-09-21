import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    // colors
    --whiteColor: #ffffff;
    --lightColor: #eeeeee;
    --secondaryLightColor: #ebebeb;
    --additionalColor: #dddddd;
    --secondaryColor: #d9d9d9;
    --secondaryLightMediumColor: #bdbdbd;
    --lightMediumColor: #bababa;
    --secondaryMediumColor: #b4b4b4;
    --mediumColor: #929292;
    --mediumDarkColor: #757575;
    --darkColor: #5a5a5a;
    --blackColor: #000000;

    // fonts:
    --mainFont: Inter, sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--mainFont);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: var(--blackColor);
  }
`;

export default GlobalStyle;
