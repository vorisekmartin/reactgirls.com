import React from 'react';
import { GalleryContainer, GalleryImg, WrapperGallery, SliderGallery, NextArrow, PrevArrow } from './Gallery.elements';
import { galleryArr } from './galleryArr';
import { Container, TitleCenter, Wrapper } from '../reusable/styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
        nextArrow: <NextArrow src="/images/icons/right-arrow.svg" />,
        prevArrow: <PrevArrow src="/images/icons/left-arrow.svg" />,
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 1120,
            settings: {
                slidesToShow: 1
                }
            },
            {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                
                }
            }
        ]
    }

    return (
        <Container >
            <Wrapper>
                <WrapperGallery>
                    <TitleCenter>Fotogalerie</TitleCenter>
                    <GalleryContainer>
                        <SliderGallery {...settings}>
                            {galleryArr.map((picture) => (
                                <GalleryImg key={picture.url} src={picture.url} />
                                )
                            )} 
                        </SliderGallery>
                    </GalleryContainer>
                </WrapperGallery>
            </Wrapper>
        </Container>
    )
}

export default Gallery
