import React from 'react';
import { InfoContent } from './Info.elements';
import { Container, Wrapper } from '../styled';

function Info({text}) {
    return (
        <Container>
            <Wrapper>
                <InfoContent>
                    {text}
                </InfoContent>
            </Wrapper>
        </Container>
    )
}

export default Info;
