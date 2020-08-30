import React from 'react';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

function Index() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
