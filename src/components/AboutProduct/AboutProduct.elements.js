import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables';
import { Paragraph, ParagraphS } from '../reusable/styled';

export const WrapperAbout = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;   

   @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const WrapperAboutProducts = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column; 

   @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const ItemContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1250px ) {
        flex-direction: row;
    }
`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    padding-top: 40px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;

    @media only screen and (max-width: 1000px) {
        width: 85%;
        padding-top: 30px;
    }
`;

export const ItemRow = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 20px;
    width: 140px;
    height: 140px;
    position: relative;

    &.item1{
        width: 120px;
        height: 120px;
    }
    &.item2{
        width: 170px;
        height: 170px;
        box-shadow: 0px 0px 10px #89CDDA ; 
    }
    &.item3{
        width: 160px;
        height: 160px; 
    }
    &.item4{
        width: 120px;
        height: 120px;
    }
    &.item5{
        width: 180px;
        height: 180px;
        box-shadow: 0px 0px 10px #89CDDA ; 
    }
    &.item6{
        width: 110px;
        height: 110px;
    }
    @media only screen and (min-width: 1250px ) {
        margin: 12px;

        &.item1{
            width: 130px;
            height: 130px;
        }
        &.item2{
            width: 180px;
            height: 180px;
            box-shadow: 0px 0px 10px #89CDDA ; 
        }
        &.item3{
            width: 150px;
            height: 150px; 
        }
        &.item4{
            width: 120px;
            height: 120px;
        }
        &.item5{
            width: 180px;
            height: 180px;
            box-shadow: 0px 0px 10px #89CDDA ; 
        }
        &.item6{
            width: 120px;
            height: 120px;
        }
    }

`;

export const ItemIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 15px;
`;

export const ItemText = styled(ParagraphS)`
    font-size: ${sizes.sizeXS};
    text-align: center;
    font-weight: 300;
    color: ${colors.grey};

    @media only screen and (max-width: 1000px ) {
        font-size: ${sizes.sizeXXS};
    }
`;

export const ItemTextProduct = styled(ParagraphS)`
    font-size: ${sizes.sizeS};
    text-align: center;
    font-weight: 500;
    color: ${colors.grey};
  
    &.item2{
        font-size: ${sizes.sizeM};
        width: 65%;
    }
    &.item3{
        font-size: ${sizes.sizeXS};  
    }
    &.item5{
        font-size: ${sizes.sizeM};
        width: 65%;
    }
`;
