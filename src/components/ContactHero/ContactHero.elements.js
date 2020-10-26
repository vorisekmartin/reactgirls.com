import styled from 'styled-components';
import { colors, breakpoints } from '../../variables.js';
import { Paragraph, TitleCenter } from '../reusable/styled.js';

export const ContactHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 100px 0 100px 0;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 120px 0 80px 0;
        transition: all 1.5s ease-in-out;
        &.active {
            padding: 80px 0 80px 0; 
        }
    }
`;

export const ContactHeroTitle = styled(TitleCenter)`   
    margin-bottom: 40px;

    @media only screen and (max-width: 968px) {
        width: 75%;
    }
`;

export const ContactInfo = styled(Paragraph)`
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 45%;
    font-weight: 300;
    color: ${colors.grey};
    
    @media only screen and (max-width: 968px) {
        width: 75%;
    }
`;

export const SlackIcon = styled.img`
    width: 60px;
    margin-bottom: 50px;
`;