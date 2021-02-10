import React from 'react';
import { Container, Wrapper, TitleCenter } from '../reusable/styled';
import { ItemContainer, ItemRow, ItemText, AboutText, WrapperAbout, WrapperAboutProducts, ItemTextProduct } from './AboutProduct.elements';

function AboutProduct({data}) {
    return (
        <>
            <Container >
                <Wrapper>
                    <WrapperAbout>
                        <TitleCenter>Co děláme</TitleCenter>
                        <AboutText>Pomáháme ženám objevovat svět webdesignu. Kromě Akademie, Workshopů a Mentoringu, pořádáme Webináře na nejrůznější témata. Společně pořádáme Meetupy, kde se mohou účastnící s lektory lépe poznat.</AboutText>
                    </WrapperAbout>
                </Wrapper>
            </Container>
            <Container lightBlue >
                <Wrapper>
                    <WrapperAboutProducts>
                        <ItemContainer>                  
                        {data.map((item) => {
                        return(
                            <ItemRow productStart={item.productStart} key={item.id} data={data} className={item.id} >
                                    <ItemText className={item.id} >{item.text}</ItemText>
                                    <ItemTextProduct className={item.id} >{item.textProduct}</ItemTextProduct>
                            </ItemRow>
                                )
                            })
                            } 
                        </ItemContainer>
                    </WrapperAboutProducts>
                </Wrapper>
            </Container>
        </>
    )
}

export default AboutProduct
