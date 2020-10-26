import React from 'react';
import { aboutInfoObj1, aboutProductArr } from './Data';
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import NewsletterSection from '../../components/reusable/Newsletter/NewsletterSection';
import Gallery from '../../components/Gallery/Gallery';
import  Thanks  from '../../components/Thanks/Thanks';
import AboutMore from '../../components/AboutMore/AboutMore';

function About() {
    return (
        <>
            <AboutHero {...aboutInfoObj1} />
            <AboutProduct data={aboutProductArr} />
            <NewsletterSection lightBlue />
            <AboutMore />
            <Gallery />
            <Thanks />
        </>
    )
}

export default About;
