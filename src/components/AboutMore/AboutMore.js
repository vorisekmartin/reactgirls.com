import React from 'react';
import { Container, Wrapper, LinkA } from '../reusable/styled';
import { WrapperAboutMore, TextAboutMore, TitleAboutMore } from './AboutMore.elements';

function AboutMore() {
    return (
        <Container lightBlue >
            <Wrapper>
                <WrapperAboutMore>
                    <TitleAboutMore>Zajímá tě víc?</TitleAboutMore>
                    <TextAboutMore>Sleduj naše sociální sítě a neváhej se nám ozvat! 
                    </TextAboutMore>
                    <TextAboutMore>
                    Nebo si přečti <LinkA href="https://medium.com/applifting-cz/programov%C3%A1n%C3%AD-v-koupeln%C4%9B-aneb-jak-jsme-u%C4%8Dili-holky-react-bffdf690731f" target="blank">článek od Zuzky</LinkA> a <LinkA href="https://medium.com/applifting-cz/tereza-va%C5%88kov%C3%A1-chci-aby-programovac%C3%AD-workshopy-pro-holky-nebyly-t%C5%99eba-3162b38f23e2" target="blank">rozhovor s Terkou</LinkA> na Medium.com. 
                    </TextAboutMore>
                
                </WrapperAboutMore>
            </Wrapper>
        </Container>
    )
}

export default AboutMore
