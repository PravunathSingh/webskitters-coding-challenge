import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductsList from './components/ProductsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductsList />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct/:id' element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
