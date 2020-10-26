import React from 'react';
import { TitleCenter,Container } from '../reusable/styled';
import { 
    SpeechCont,
    Speech,
    SpeechIcon,
    SpeechText,
    ReferenceContainer,
    SpeechName,
    SpeechImg,
    SpeechImgContainer,
    SpeechNameContainer
} from './References.elements';
import referencesArr from './referencesArr';

function References () {
    return (
            <Container lightBlue>
                    <ReferenceContainer>
                        <TitleCenter>Co o nás říkají naši studenti?</TitleCenter>
                        <SpeechCont>
                            {referencesArr.map((speech) => (        
                                <Speech>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>{speech.text1}</SpeechText>
                                    {!speech.hideText2 &&
                                    <SpeechText>{speech.text2}</SpeechText>
                                    }
                                    {!speech.hideText3 &&
                                    <SpeechText>{speech.text3}</SpeechText>
                                    }
                                    <SpeechNameContainer>
                                        <SpeechImgContainer>
                                            <SpeechImg src={speech.photo}/>
                                        </SpeechImgContainer> 
                                        <SpeechName>{speech.name}</SpeechName> 
                                    </SpeechNameContainer>   
                                </Speech>
                                )) 
                            }
                    </SpeechCont>
                </ReferenceContainer>
        </Container>
    )
}
export default References;
