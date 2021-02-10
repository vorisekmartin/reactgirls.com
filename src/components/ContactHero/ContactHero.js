import React from 'react';
import { Container, Wrapper } from '../reusable/styled';
import { useTheme } from '../../ThemeContext';
import { 
    ContactHeroTitle,
    ContactInfo,
    ContactHeroContainer,
} from './ContactHero.elements';

import Newsletter from '../reusable/Newsletter/Newsletter';

function ContactHero() {
    const navLogo = useTheme();
    return (
        <Container lightBlue>
            <Wrapper>
                <ContactHeroContainer className={navLogo ? 'active' : ''}>
                    <ContactHeroTitle>Jak nás můžeš kontaktovat?</ContactHeroTitle>
                    <ContactInfo>
                        Napiš nám přes sociální sítě nebo nás kontaktuj na e-mail.
                        Můžeš také odebírat náš Newsletter a my tě budeme o všem informovat.
                    </ContactInfo>
                    <Newsletter />
                </ContactHeroContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactHero;
