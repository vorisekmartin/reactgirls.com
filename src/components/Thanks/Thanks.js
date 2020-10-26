import React from 'react';
import { ThanksText, WrapperThanks, ContainerThanks } from './Thanks.elements';
import { Container, Wrapper } from '../reusable/styled';

function Thanks() {
    return (
        <ContainerThanks>
            <Wrapper>
                <WrapperThanks>
                    <ThanksText>Děkujeme našim partnerům za jejich podporu.</ThanksText>
                </WrapperThanks>
            </Wrapper>
        </ContainerThanks>
    )
}

export default Thanks;
