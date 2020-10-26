import React from 'react';

import {  
  Sponsor, 
  Product, 
  Lector,
  References
} from '../../components';
import  HeroHome  from '../../components/HeroHome/HeroHome';
import NewsletterSection from '../../components/reusable/Newsletter/NewsletterSection';


function Home() {
  return (
    <>
      <HeroHome />
      <Sponsor />
      <Product />
      <NewsletterSection />
      <Lector />
      <References />
    </>
  );
}

export default Home;