import React from 'react';
import { Wrapper, Container, TitleCenter } from '../../reusable/styled';

import InfoCardsContainer from './InfoCardsContainer';
import { WrapperInfoSection } from './InfoCards.elements';
function InfoCards({
    data,
    mainCardsTitle
    }) {
    return (
            <Container lightBlue>
                <Wrapper>
                    <WrapperInfoSection>  
                        <TitleCenter>{mainCardsTitle}</TitleCenter>
                        <InfoCardsContainer data={data}  />
                    </WrapperInfoSection> 
                </Wrapper> 
            </Container>
    )
}

export default InfoCards;
