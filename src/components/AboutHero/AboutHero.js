import React from 'react'
import { Container } from '../reusable/styled';
import { SubTitleAbout, ButtonAbout, WrapperAbout, AboutText, AboutTitle } from './AboutHero.elements';
import { useTheme } from '../../ThemeContext';


function AboutHero({title, text1 }) {
    const navLogo = useTheme();
    return (
        <Container lightBlue >
            <WrapperAbout className={navLogo ? 'active' : ''}>
                    <AboutTitle>{title}</AboutTitle>
                    <AboutText>{text1}</AboutText>
                    <SubTitleAbout>#ReactGirlsPrague</SubTitleAbout>
                    <ButtonAbout href='/contact'>KONTAKT</ButtonAbout>
            </WrapperAbout>
        </Container>
    )
}

export default AboutHero;
