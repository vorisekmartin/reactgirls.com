import React from 'react';
import socialArr from '../Navbar/socialArr';
import { Container, Wrapper } from '../reusable/styled';
import { SocialMob, SocialIconMob } from './SocialMobile.elements';

function SocialMobile() {
    return (
        <Container lightBlue>
            <Wrapper>
                <SocialMob>
                {socialArr.map((social) => (
                    <a key={social.link} href={social.link} target="blank">
                        <SocialIconMob src={social.icon} />
                    </a>
                    )
                )}
                </SocialMob>
            </Wrapper>
        </Container>
    )
}

export default SocialMobile

