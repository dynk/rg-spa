import React from 'react';
import ProductHero from './components/ProductHero';
import ProductValues from './components/ProductValues';
import ProductHowItWorks from './components/ProductHowItWorks';
import Clients from './components/Clients/Clients'
import ProductCTA from './components/ProductCTA';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

function Index() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <Clients />
      <ProductCTA />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
