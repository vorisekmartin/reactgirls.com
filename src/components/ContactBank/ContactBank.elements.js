import styled from 'styled-components';
import  { sizes, colors, breakpoints } from '../../variables.js';
import { ParagraphS } from '../reusable/styled';

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 100px 0 100px 0;
    position: relative;
    left: 70px; 

    @media only screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: center;
        position: relative;
        left: 20px;  
        padding: 80px 0 0 0;
    }
 `;

export const BankContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        margin-bottom: 60px;
    }
 `;

export const BankIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
 `;

export const BankHeading = styled.h3`
    margin-bottom: 15px;
 `;

export const BankText = styled(ParagraphS)`
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    font-weight: 300;
 `;
