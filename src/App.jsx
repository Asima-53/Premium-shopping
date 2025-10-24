import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ProductCard from "./components/productcard/ProductCard";
import DetailProduct from "./components/detailproduct/DetailProduct";
import ProductsBar from "./components/productsbar/ProductsBar";
import "./App.css"; // Import your main CSS file
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <ProductsBar />
            <ProductCard />
            <Footer />
          </>
        }
      />
      <Route path="/products/:id" element={<DetailProduct />} />
      <Route
        path="/products/cart"
        element={
          <>
            <Navbar />
            <h1 className="cart-heading">Cart</h1>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
