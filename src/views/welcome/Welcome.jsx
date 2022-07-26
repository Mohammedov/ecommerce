import React from 'react';

import '../welcome/welcome.scss';
import Header from '../../container/Header/Header'
import About from '../../container/About/About'
import Footer from '../../container/Footer/Footer'

function Welcome() {
  return (
    <>
      <Header/>
      <About />
      <Footer />
    </>
  )
}
export default Welcome;
