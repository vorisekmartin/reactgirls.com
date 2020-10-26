import styled from 'styled-components';
import { sizes } from '../../../variables';
import { Heading3 } from '../styled';

export const InfoContent = styled(Heading3)`
    font-size: ${sizes.sizeL} ;
    margin: 100px auto 100px auto;
    width: 45%;
    text-align: center;
    line-height: 1.6;
    padding: 30px 0;
    font-weight: 500;


    
    @media screen and (max-width: 750px) {
        width: 85%;
        margin: 80px auto 80px auto;
        font-size: ${sizes.sizeM};
        line-height: 1.6;
    }
`;
