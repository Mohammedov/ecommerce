import React from 'react';
// import {Navbar} from '../../components/navbar/Navbar';
// import {Welcome} from '../views/welcome/Welcome';
// import {Support} from '../views/support/Support';
// import {Products} from '../../components/products/Products'
import Navbar from '../../components/navbar/Navbar';
import Welcome from '../welcome/Welcome';
import Support from '../support/Support';

function Home() {
  return (
    <div>
      
      <Welcome/>
      <Support/>

    </div>
  )
}
export default Home;
