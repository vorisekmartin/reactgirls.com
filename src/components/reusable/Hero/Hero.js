import React, { useState, useCallback, useEffect } from 'react';
import { useTheme, useThemeUpdate } from '../../../ThemeContext';
import { Link, animateScroll as scroll } from 'react-scroll';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubtitleHero,
    HeroWrapper,
    HeroTitle, 
    ButtonHero,
 } from './Hero.elements';
 import Newsletter from '../Newsletter/Newsletter';

import { Container, Wrapper } from '../styled';


function Hero({
    title,
    subtitle,
    buttonText,
    img,
    form,
    showNewsletter,
    showLogInButton
} ) {
    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: ${width}px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTargetReached(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return targetReached;
      };
    const navLogo = useTheme();
    const changeLogoSize = useThemeUpdate();
    const isBreakpoint = useMediaQuery(1250);

    return (
            <Container lightBlue>
                <Wrapper>
                    <HeroWrapper className={navLogo ? 'active' : ''} >
                        <TitleContainer>
                            <HeroTitle > {title} </HeroTitle>
                            { isBreakpoint && 
                            <ImgContainer>
                                <HeroImg src={img} />
                            </ImgContainer>
                            }
                            <SubtitleHero > {subtitle} </SubtitleHero>
                               {/*<Newsletter /> */} 
                            {showNewsletter &&
                              <Newsletter />
                            }
                            {showLogInButton &&
                            <Link to='price'
                            smooth={true}
                            duration='700'
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                              <ButtonHero>M??M Z??JEM</ButtonHero>
                            </Link>
                            }   	
                        </TitleContainer>
                        { !isBreakpoint && 
                        <ImgContainer>
                            <HeroImg src={img} />
                        </ImgContainer>
                        }

                    </HeroWrapper>
                </Wrapper>
            </Container>
    )
}

export default Hero;
