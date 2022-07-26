import './App.css';

import Navbar from './components/navbar/Navbar';
import React from 'react';
import Welcome from './views/welcome/Welcome';
import Support from './views/support/Support';

function App() {
  return (

    <div className="app">
      <Navbar/>
      <Welcome/>
      <Support/>
    </div>

  );
}

export default App;