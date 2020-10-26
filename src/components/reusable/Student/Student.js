import React from 'react';
import { Wrapper, Container, TitleCenter } from '../styled';
import {StudentWrapper} from './Student.elements';
import StudentCont from './StudentCont';

function Student({
    data,
    mainStudentTitle
}) {
    return (
        <Container>
        <Wrapper>
            <StudentWrapper> 
                <TitleCenter>{mainStudentTitle}</TitleCenter>
                <StudentCont data={data} />
            </StudentWrapper>  
        </Wrapper> 
    </Container>
    )
}

export default Student;
