import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
export const Fonts = createGlobalStyle`
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url('./assets/fonts/montserrat-v25-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/montserrat-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./assets/fonts/montserrat-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-regular.woff') format('woff'), /* Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */ url('./assets/fonts/montserrat-v25-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
  }

  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url('./assets/fonts/montserrat-v25-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/montserrat-v25-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./assets/fonts/montserrat-v25-latin-700.woff2') format('woff2'), /* Super Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-700.woff') format('woff'), /* Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */ url('./assets/fonts/montserrat-v25-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
  }

  /* montserrat-900 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
    src: url('./assets/fonts/montserrat-v25-latin-900.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/montserrat-v25-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./assets/fonts/montserrat-v25-latin-900.woff2') format('woff2'), /* Super Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-900.woff') format('woff'), /* Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */ url('./assets/fonts/montserrat-v25-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
  }

  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: fallback;
    src: url('./assets/fonts/montserrat-v25-latin-800.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/montserrat-v25-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./assets/fonts/montserrat-v25-latin-800.woff2') format('woff2'), /* Super Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-800.woff') format('woff'), /* Modern Browsers */ url('./assets/fonts/montserrat-v25-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */ url('./assets/fonts/montserrat-v25-latin-800.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
`;

const breakPoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (max-width: ${breakPoints.lg}) {
    padding: 0 10px;
  }

  @media screen and (max-width: ${breakPoints.md}) {
    padding: 0 10px;
  }

  @media screen and (max-width: ${breakPoints.sm}) {
    padding: 0 5px;
  }
`;
