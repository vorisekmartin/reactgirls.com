import React from 'react';

import {
    StudentContainer,
    StudentCard,
    StudentIcon,
    StudentHeading,
    StudentText,
} from './Student.elements';

function StudentCont({data}) {
    return (
        <StudentContainer>
            {data.map((student) => {
                return (
                    <StudentCard key={student.heading} >
                        <StudentIcon src={student.icon} />
                        <StudentHeading>{student.heading}</StudentHeading>
                        <StudentText>{student.text}</StudentText>
                    </StudentCard>
                    
                )
            })}
            </StudentContainer>               
    )
}

export default StudentCont;
