import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables';
import { Paragraph , TitleCenter} from '../reusable/styled';

export const TitleAboutMore = styled(TitleCenter)`
    margin-bottom: 30px;
`;

export const WrapperAboutMore = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const TextAboutMore = styled(Paragraph)`
    text-align: center;
    padding-bottom: 15px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 80%;
    }

    a{
        text-decoration: none;
        color: ${colors.mainBlue};
        font-weight: 500;
    }
`;

export const ArticleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutMoreArticle = styled.div`
    background-color: ${colors.mainBlue};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
`;

export const AboutMoreLink = styled.a`
    color: ${colors.white};
    font-size: ${sizes.sizeM};
    text-decoration: none;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeS};
    }
`;

