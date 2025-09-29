import React from "react";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection.jsx";
import Product from "./pages/Product.jsx";
import Testimonials from "./pages/Testimonials.jsx";

function App() {
  return (
    <main className="overflow-hidden text-[#404040]">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </main>  
  );
}

export default App;
