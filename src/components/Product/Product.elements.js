import styled from 'styled-components';
import { colors, breakpoints } from '../../variables.js';
import { Paragraph, TitleCenter, TitleLeft, Button } from '../reusable/styled';


export const ProductInfo = styled(Paragraph)`
    font-weight: 300;
    line-height: 1.8;
    //margin-bottom: 32px;
    margin-top: 32px;
    color: ${colors.grey};
    text-align: left;

    a{
        color: ${colors.mainBlue};
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
    }

    @media only screen and (max-width: 1130px) {
        text-align: center;
    }

    @media only screen and (max-width: ${breakpoints.tablet} ) { 
        margin-right: 16px;
        margin-left: 16px;
        //margin-bottom: 40px;
        margin-top: 32px;
    }
`;

export const ProductMainTitle = styled(TitleCenter)`
    padding: 80px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (max-width: 1130px) {
        padding: 60px;
        text-align: center;
    }
`;

export const ProductInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    padding-top: 100px;
    padding-bottom: 100px;

    @media only screen and (max-width: 1130px) {
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        padding-top: 80px;
    }
`;

export const ProductInfoColumn = styled.div`
    flex: 1;
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media only screen and (max-width: 1130px) {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ProductTitle = styled(TitleLeft)`
    margin-bottom: -15px;

    @media only screen and (max-width: 1130px) {
        text-align: center;
    }
`;

export const ProductButton = styled(Button)`
    width: 160px;
    margin-top: 32px;
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.meetup{
        width: auto;
        position: relative;
        left: -70px;
    }
`;

export const ProductImgContainer = styled.div`
   border-radius: 50%;
   overflow: hidden;
   margin-bottom: 40px;
   display: flex;
   justify-content: ${({imgStart}) => (imgStart ? 'flex-start' : 'flex-end')};

   @media only screen and (max-width: 319px) { 
        width: 240px;
        height: 240px; 
    }

    @media only screen and (min-width:319px) and (max-width: 370px) { 
        width: 280px;
        height: 280px; 
    }

    @media only screen and (min-width:370px) and (max-width: 420px) { 
        width: 338px; 
        height: 338px;
    }

    @media only screen and (min-width: 420px) and (max-width: 960px) { 
        width: 380px; 
        height: 380px;
    }
    
    @media only screen and (min-width: 960px)   and (max-width: 1130px) { 
        width: 380px; 
        height: 380px;
    }

    @media only screen and (min-width: 1130px) { 
        width: 400px; 
        height: 400px;
        margin-right: ${({imgStart}) => (imgStart ? '80px' : '0px')};
        margin-left: ${({imgStart}) => (imgStart ? '0px' : '80px')};
        margin-bottom: 0px;
    }
`;



