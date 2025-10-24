import React from "react";
import "./ProductCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductRender from "../productrender/ProductRender";
function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(`Axios tells that ${err}`))
  }, []);
  console.log(products);

  if (loading)
    return (
      <div>
        <div class="loader">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
      </div>
    );


const mensClothing = products.filter(product => product.category === "men's clothing");
const jewelery = products.filter(product => product.category === "jewelery");
const electronics = products.filter(product => product.category === "electronics");
const womensClothing = products.filter(product => product.category === "women's clothing");
  
  return (
    <div>
      <div className="product-main-contaniner" id="all">
        <div className="product-card-container" id="menclothing">
          <h2>Men Clothing</h2>
          <div className="product-container">
            {
              mensClothing.map((cloth) => (
                <ProductRender key={cloth.id} products={cloth} />
              ))
            }
          </div>
        </div>

        <hr />

        <div className="product-card-container" id="jewelery">
          <h2>Jewelery</h2>
          <div className="product-container">
            {
              jewelery.map((jewel) => (
                <ProductRender key={jewel.id} products={jewel} />
              ))
            }
          </div>
        </div>

        <hr />

        <div className="product-card-container" id="electronics">
          <h2>Electronics</h2>
          <div className="product-container">
            {
              electronics.map((elec) => (
                <ProductRender key={elec.id} products={elec} />
              ))
            }
          </div>
        </div>

        <hr />

         <div className="product-card-container" id="womenclothing">
          <h2>Women's Clothing</h2>
          <div className="product-container">
            {
              womensClothing.map((womenCloth) => (
                <ProductRender key={womenCloth.id} products={womenCloth} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
