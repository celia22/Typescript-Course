import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/cart/Cart";

const App: React.FC = () => {
  return (
    <BrowserRouter>

    <Header />
    <Routes>      
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>  
  );
};

export default App;
