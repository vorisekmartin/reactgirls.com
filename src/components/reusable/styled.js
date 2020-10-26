import styled, {css} from "styled-components";
import  { sizes, colors, breakpoints } from '../../variables.js';
import { Link, animateScroll as scroll } from 'react-scroll';


/*Typography */

export const Heading1 = styled.h1`
    font-size: ${sizes.sizeXXXL} ;
    line-height: 1.4;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeXL} ;
        line-height: 1.5;
    }
`;

export const Heading2 = styled.h2`
    font-size: ${sizes.sizeXXL};
    line-height: 1.4;
`;

export const Heading3 = styled.h3`
    font-size: ${sizes.sizeM};
    line-height: 1.6;

`;

export const Paragraph = styled.p`
    font-size: ${sizes.sizeM};
    line-height: 1.6;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeS};
        line-height: 1.5;
    }
`;

export const ParagraphS = styled.p`
    font-size: ${sizes.sizeS};
    line-height: 1.7;
`;

export const LinkA = styled.a `
    font-size: ${sizes.sizeM};
    color: ${colors.mainBlue};
    font-weight: 500;  
    text-decoration: none;
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeS};
    }
`;

export const LinkScroll = styled(Link) `
    font-size: ${sizes.sizeM};
    color: ${colors.mainBlue};
    font-weight: 500;  
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeS};
    }
`;

/*Layout */

export const Container = styled.div`
    z-index:1;
    width: 100%;
    background-color: ${({lightBlue}) => (lightBlue ? `#EBF6F8`  : `#FFFFFF` )};

`;

export const Wrapper = styled.div`
    z-index:1;
    width: 80%;
    max-width: 1280px; 
   // border: 2px solid blue;
    margin: 0 auto;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`;


export const TitleCenter = styled(Heading1)`
    text-align: center;
    font-weight: 500;
`; 

export const TitleLeft = styled(Heading1)`
    text-align: left;
    font-weight: 500;
`;

export const Subtitle = styled.h5`
    font-weight: 300;
    color: ${colors.grey};
    font-size: ${sizes.sizeM};
    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeS};
    }
`;

export const Name = styled(Heading3)`
    text-align: center;
    font-weight: 500;
`;

export const Button = styled.a`
    width: 100%;
    background-color: ${colors.mainBlue};
    border: none;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 50px;
    padding: 0 32px;
    border-radius: 25px;
    color: ${colors.white};
    //box-shadow: 0px 4px 2px rgba(68, 68, 68, 0.15);
    letter-spacing: 1px;
    font-weight: 500;
    ${({hideButton}) => hideButton && css`
        display: none;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0099AE;  
    }
`;

export default styled;