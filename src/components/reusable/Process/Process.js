import React from 'react';
import { 
    Container, 
    Wrapper, 
    TitleCenter,
} from '../styled';

import {
    ProcessContainer,
    ProcessRow,
    ProcessPoint,
    ProcessCont,
    ProcessHeading,
    ProcessInfo,
    ProcessGraphic,
    ProcessLine,
    ProcessWrapper,
    ProcessNumber
} from './Process.elements';

function Process({data}) {
    return (
        <Container lightBlue>
            <Wrapper>
                <ProcessWrapper>
                    <TitleCenter>Jak probíhá přihlašování?</TitleCenter>
                        <ProcessContainer>
                        {data.map((process) => {
                        return (
                            <ProcessRow reversed={process.reversed}>
                                <ProcessNumber reversed={process.reversed}>{process.number}</ProcessNumber>
                                <ProcessGraphic>
                                    <ProcessPoint/>
                                    <ProcessLine last={process.last} />
                                </ProcessGraphic>
                                <ProcessCont>
                                    <ProcessHeading reversed={process.reversed}>{process.heading}</ProcessHeading>
                                    <ProcessInfo reversed={process.reversed}>{process.text}</ProcessInfo>
                                </ProcessCont>
                            </ProcessRow>
                            )}
                        )}
                        </ProcessContainer>
                    </ProcessWrapper>
            </Wrapper>
        </Container>
    )
}

export default Process
