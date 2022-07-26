import React from 'react';

import Header from '../../container/Header/Header';
import About from '../../container/About/About';
import Footer from '../../container/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';

function Welcome() {
  return (
    <>

      <Navbar />
      <Header />
      <About />
      <Footer />
    </>
  )
}
export default Welcome;
