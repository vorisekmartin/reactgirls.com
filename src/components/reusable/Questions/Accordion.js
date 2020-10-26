import React from 'react';
import { 
    QuestionsContent,
    QuestionsIcon,
    QuestionsText,
    AnswerText,
    QuestionCont
} from './Questions.elements';

function Accordion({question, answer, open, setOpen}) {
   
    return (
        <QuestionCont>
            <QuestionsIcon onClick={setOpen} src={open ? "/images/icons/minus.svg" : "/images/icons/plus.svg"}>
            </QuestionsIcon>  
            <QuestionsContent>  
                <QuestionsText  onClick={setOpen} >{question}</QuestionsText>
                {open && (
                <AnswerText>{answer}</AnswerText>
                )}
            </QuestionsContent>
        </QuestionCont>
    )
}

export default Accordion
