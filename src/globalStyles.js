import {createGlobalStyle} from 'styled-components';
import { sizes, colors } from './variables';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
    font-size: ${sizes.sizeM};
    color: ${colors.darkGrey};
    outline: none;
}
`;

export default GlobalStyle;