import React from 'react';
import { NewsletterContainer, ParagraphCenter, TitleCenterNews} from './Newsletter.elements';
import Newsletter from './Newsletter';
import { Container, Wrapper } from '../styled';

function NewsletterSection() {
    return (
        <Container id="newsletterHero">
            <Wrapper>
            <NewsletterContainer>
                <TitleCenterNews>
                    Zajímá tě, kdy se bude konat další akce?
                </TitleCenterNews>
                <ParagraphCenter>
                Odebírej náš Newsletter a dozvíš se víc!
                </ParagraphCenter>
                <Newsletter />
            </NewsletterContainer>
            </Wrapper>
        </Container>
    )
}

export default NewsletterSection;
