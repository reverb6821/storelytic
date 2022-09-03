import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header'

import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import Product from './views/Product';
import BoardModerator from './views/BoardModerator';
import BoardAdmin from './views/BoardAdmin'
import ProductInfoPage from './views/ProductInfoPage'

function App() {
  return (
    <div className="App bg-gray-50 dark:bg-gray-900">
      <Header/>
      <div className="container mx-auto sm:px-4 mt-3 bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/mod" element={<BoardModerator/>} />
            <Route exact path="/admin" element={<BoardAdmin/>} />
            <Route exact path="/product" element={<Product/>} />
             
            <Route exact path="/product/:id" element={<ProductInfoPage/>} /> 
          </Routes>
        </div>
    </div>
  );
}

export default App;
