import styled, {css} from 'styled-components';
import { colors, sizes, breakpoints } from '../../../variables';
import { Paragraph, TitleCenter } from '../styled';

export const NewsletterContainer = styled.div `
    margin: 100px auto 100px auto;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        margin: 80px auto 80px auto;  
        padding-right: 16px;
        padding-left: 16px;
        width: 100%; 
    }   
`;

export const ParagraphCenter = styled(Paragraph) `
    text-align: center;
    color: ${colors.grey};
    font-weight: 300;
    margin-bottom: 40px;
`;

export const TitleCenterNews = styled(TitleCenter) `
    width: 100%;
    margin-bottom: 30px;
`;

export const MyForm = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid red;
`;

export const NewsletterButton = styled.input`
    width: 100%;
    background-color: ${colors.mainBlue};
    border: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 50px;
    padding: 0 32px;
    border-radius: 25px;
    color: ${colors.white};
    letter-spacing: 1px;
    font-weight: 500;
    ${({hideButton}) => hideButton && css`
        display: none;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 300px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0099AE;  
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding: 0;
        width: 280px;
    }

    @media only screen and (max-width: 325px) {
        width: 240px;
        font-size: ${sizes.sizeS};
        height: 42px;
    }
`;

export const InputContainer = styled.div`
    background-color: ${colors.white};
    border: 1px solid ${colors.veryLightGrey} ; 
    padding: 0 32px;
    height: 50px;
    border-radius: 25px;
    width: 300px;
    display: flex;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 280px;
    }

    @media only screen and (max-width: 325px) {
        width: 240px;
        padding: 0 25px;
        height: 42px;
    }
`;

export const CustomInput = styled.input`
    color: ${colors.lightGrey};
    font-weight: 300;
    outline: none;
    font-size:${sizes.sizeM};
    transition: all 0.2s ease;
    z-index: 500;
    border-color: transparent;
    background: none;
    cursor: text;

    @media only screen and (max-width: ${breakpoints.tablet}) {
    }

    @media only screen and (max-width: 325px) {
        width: 240px;
        font-size: ${sizes.sizeS};
    }
  }
`;

export const ButtonInputCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0;

    @media only screen and (max-width: 1250px) {
        align-items: center;
        width: 280px;
        margin: 0 auto;
    }
    
    @media only screen and (max-width: 325px) {
        width: 240px;
        height: 100px;
    }
`;

