import React, { useState } from 'react';
import { 
    Wrapper, 
    TitleCenter,
    Container 
} from '../../reusable/styled';
import Accordion from './Accordion';
import { 
    QuestionsContainer,
    QuestionWrapper
} from './Questions.elements';

function Questions({ data, content }) {
    const [indexOpen, setIndexOpen] = useState(0);
    return (
        <Container lightBlue>
            <Wrapper>
                <QuestionWrapper className={content} >
                <TitleCenter>Q&A</TitleCenter>
                    <QuestionsContainer>
                        {data.map((item, index) => {
                        return (
                            <Accordion 
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                                open={indexOpen === index}
                                setOpen={() => setIndexOpen(index)}
                            />
                        )
                        })}
                    </QuestionsContainer>
                </QuestionWrapper>
            </Wrapper>
        </Container>
    )
}

export default Questions;
