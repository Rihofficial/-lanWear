import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Collection from "./pages/Collection.jsx";
import Product from "./pages/Product.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder  from "./pages/PlaceOrder.jsx";
import Login  from "./pages/Login.jsx";
import Orders from "./pages/Orders.jsx";

function App() {
  return (
    <main className="overflow-hidden text-[#404040]">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-oder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </main>
  );
}

export default App;
