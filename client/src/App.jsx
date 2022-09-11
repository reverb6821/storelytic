
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header';
import FooterApp from './components/FooterApp';

import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile'
import Product from './views/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='mx-auto sm:px-4 mt-3'>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/product" element={<Product/>} />
          </Routes>
        </div>
        <FooterApp/>
      </Router>
    </div>
  );
}

export default App;
