import styled from 'styled-components';
import { sizes, breakpoints } from '../../../variables';

export const StudentWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 0px;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        margin-right: 16px;
        margin-left: 16px;   
    }
`;

export const StudentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    width: 100%;
    justify-content: space-between;
    margin: 100px auto 0px auto;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        flex-direction: column;
        align-items: center;
        margin: 80px auto 0px auto;
    }
`;

export const StudentCard = styled.div`
    width: 30%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    @media only screen and (max-width: ${breakpoints.tablet})  {
        width: 100%;
        margin-bottom: 80px;   
    }
`;

export const StudentHeading = styled.h3`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const StudentText = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
`;

export const StudentIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;

`;
