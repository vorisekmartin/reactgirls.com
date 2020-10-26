import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';

export const InfoCont = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;
    margin: 100px auto 0 auto;
    padding-bottom: 100px;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        padding-bottom: 80px;
        margin: 80px auto 0 auto;  
    }
`;

export const WrapperInfoSection = styled.div`
    padding-top: 100px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 80px;
        padding-bottom: 0;
        margin-right: 16px;
        margin-left: 16px;
    }
`;


export const InfoCard = styled.div`
    width: 300px;
    height: 400px;
    padding: 0 30px;
    background-color: ${colors.white};
    border-radius: 30px;
    box-shadow: 0px 0px 30px rgba(68, 68, 68, 0.1), 0px 0px 4px rgba(68, 68, 68, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-right: 20px;
    margin-left: 20px;
    
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 0 10px;
        width: 280px;
        height: 380px;
    }
    
    @media screen and (max-width: 320px) {
        padding: 0 5px 20px 5px;
        height: auto;
    }
`;

export const InfoTitle = styled.div`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const InfoText = styled.div`
    width: 80%;
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
    margin: 0 auto;
`;

export const InfoIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: 60px auto 40px auto;
`;


