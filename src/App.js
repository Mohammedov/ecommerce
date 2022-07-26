import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Welcome from './pages/welcome/Welcome';
import ProductsViewPage from './pages/productsViewPage/ProductsViewPage';
import Support from './pages/support/Support';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/productsViewPage" element={<ProductsViewPage />} />
          <Route exact path="/support" element={<Support />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;