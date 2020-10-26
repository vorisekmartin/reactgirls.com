import React from 'react';
import {  animateScroll as scroll } from 'react-scroll';
import { 
    FooterContainer,
    FooterLogo,
    FooterInfo
    } from './Footer.elements';

import {   } from '../../globalStyles';

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
            <FooterContainer>
                <FooterLogo onClick={toggleHome} smooth={true} duration={5000} />
                <FooterInfo>© Michaela Rudolfová 2021</FooterInfo> 
            </FooterContainer>
    )
}

export default Footer;
