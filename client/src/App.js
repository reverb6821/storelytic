import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header'

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import Product from './views/Product';
import BoardModerator from './views/BoardModerator';
import BoardAdmin from './views/BoardAdmin'
import ProductInfoPage from './views/ProductInfoPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
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
