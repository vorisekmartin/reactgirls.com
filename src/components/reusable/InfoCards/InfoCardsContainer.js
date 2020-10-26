import React from 'react';
import { InfoCard, InfoIcon, InfoTitle, InfoText, InfoCont } from './InfoCards.elements';

function InfoCardsContainer({data}) {
    return (   
        <InfoCont>
        {data.map((section) => {
            return (
                <InfoCard>
                    <InfoIcon src={section.icon} />
                    <InfoTitle>{section.title}</InfoTitle>
                    <InfoText>{section.text}</InfoText>
                </InfoCard>
                )
            }    
        )}
        </InfoCont>
    )}   
export default InfoCardsContainer