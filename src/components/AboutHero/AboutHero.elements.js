import styled from 'styled-components';
import  { colors } from '../../variables.js';
import { Button, Paragraph, TitleCenter, Subtitle } from '../reusable/styled';

export const SubTitleAbout = styled(Subtitle)`
    text-align: center;
    margin-bottom: 40px;
    margin-top: 15px;
 `;
 
export const ButtonAbout = styled(Button)`
    align-items: center;
    align-self: center;
    max-width: 180px;
`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.grey};
    font-weight: 300;
`;

export const WrapperAbout = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 100px 300px;
    
    @media screen and (max-width: 960px) {
        padding: 120px 16px 80px 16px;
        transition: all 1.5s ease-in-out;
        &.active {
            padding: 80px 16px 80px 16px; 
        }
    }
`;

export const AboutTitle = styled(TitleCenter)`
    padding-bottom: 40px;

    @media only screen and (max-width: 960px) {
        padding-bottom: 20px;
    }
`;