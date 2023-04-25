import { css } from 'styled-components';

const colors = {
  skyblue: '#E9F3FF',
  blue: '#A6C7EF',
  grey: '#B4B4B4',
  black: '#000000',
};

const fonts = {
  kotrahopeTitle: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 1.4375rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
  `,
  kotrahopeText: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
