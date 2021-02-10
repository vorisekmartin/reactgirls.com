import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-right: 16px;
        margin-left: 16px;
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const ProcessContainer = styled.div`
    width: 100%;
    margin-top: 80px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-top: 60px;
    }
`;

export const ProcessRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({reversed}) => (reversed ? `row-reverse`  : `row` )};
    height: 180px;
    @media screen and (max-width: 1218px) {
        height: 180px;
    }
    @media screen and (max-width: 994px) {
        height: 200px;
    }
    @media screen and (max-width: 475px) {
        height: auto;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 32px;
    }
`;

export const ProcessNumber = styled.div`
    width: 45%;
    font-size: 125px;
    color: ${colors.mainBlue};
    text-align: ${({reversed}) => (reversed ? `left`  : `right` )};

    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
        width: 25%;
        font-size: 100px;
        order: 3;
        text-align: center;
        position: relative;
        top: -4px;
    }
`;

export const ProcessGraphic = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 50px;
    margin-left: 50px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const ProcessLine = styled.div`
    display: ${({last}) => (last ? `none`  : `` )};
    width: 1px;
    border-left: 2px dotted ${colors.veryLightGrey};
    height: 180px;
    position: absolute;
    top: 82.5px;  
    @media screen and (max-width: 1218px) {
        height: 180px;
        top: 90px; 
    }
    @media screen and (max-width: 994px) {
        height: 200px;
        top: 100px; 
    }
`;

export const ProcessPoint = styled.h1`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${colors.mainBlue};
    z-index: 100;
`;

export const ProcessCont = styled.div`
    width: 45%;
    padding: 15px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        order:4;
        padding: 15px 0 15px 15px;
    }
`;

export const ProcessHeading = styled(Heading3)`
   font-weight: 500;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

   @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
    }
`;

export const ProcessInfo = styled(ParagraphS)`
   font-size: ${sizes.sizeS};
   color: ${colors.grey};
   font-weight: 300;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};
   
   @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
    }
`;