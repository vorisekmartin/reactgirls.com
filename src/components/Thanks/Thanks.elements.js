import styled from 'styled-components';
import { Paragraph, Container } from '../../components/reusable/styled';
import { colors, breakpoints } from '../../variables';


export const ThanksText = styled(Paragraph)`
    text-align: center;
    margin: 0 auto;
    font-weight: 300;

`;
export const ContainerThanks = styled(Container)`
    background-color: ${colors.lightBlue};

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        background-color: ${colors.white};
    }

`;

export const WrapperThanks = styled(Paragraph)`
    padding-top: 80px;
    padding-bottom: 80px;
    
    @media only screen and (max-width: ${breakpoints.tablet} ) {
        border-top: none;
        border-bottom: none;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 20px;
        padding-bottom: 80px;
    }
`;