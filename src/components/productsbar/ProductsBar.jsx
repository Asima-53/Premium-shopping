import React from "react";
import "./productsbar.css";
import { SquareMenu } from "lucide-react";
function ProductsBar() {
  return (
    <div>
      <div className="products-bar">
        <div className="products-bar-contents">
          <a href="#all">
            <SquareMenu /> All
          </a>
          <a href="#menclothing">Men's Clothing</a>
          <a href="#jewelery">Jewelery</a>
          <a href="#electronics">Electronics</a>
          <a href="#womenclothing">Women's Clothing</a>
        </div>
      </div>
    </div>
  );
}

export default ProductsBar;
