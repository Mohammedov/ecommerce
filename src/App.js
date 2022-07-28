import './App.css';
import {React, useState} from 'react';
import Welcome from './views/welcome/Welcome';
import Support from './views/support/Support';
import Home from '../src/views/home/Home';
import Cart from './views/cart/Cart';
import Card from './container/Cards/Card';
import Data from './container/Cards/Data';
import Navbar from './components/navbar/Navbar';
import GetToken from './functions/GetToken';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [search, setSearch] = useState('');

  

  return (
    
  
    
    <BrowserRouter>
    <Navbar getSearch={setSearch} getValue={search}/>
        <Routes>
          
          <Route path="/" element={<Welcome />}/> 
          <Route path="/home" element={<Home />}/>  
          <Route path="/support" element={<Support />}/>  
          <Route path="/card" element={<GetToken scope={"product.compact"} find={search}/>} />   
    
        </Routes>
    </BrowserRouter>
    

        
  );
}

export default App;