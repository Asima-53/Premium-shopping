import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductRender.css'
function ProductRender({ products }) {

  const Navigate = useNavigate();
  const AddToCart = () => {
    alert(`${products.title} has been added to your cart!`);
  }
  return (
    <div>
      <div className="product-card">
        {
          <>
            <img src={products.image} alt={products.title} />
            <hr />
            <h4>{products.title}</h4>
            <h5>Price {products.price}</h5>
            <div className="buttons">
              <button onClick={() => Navigate(`/products/${products.id}`)}>Buy</button>
              <button onClick={() => AddToCart()}>Add to cart</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default ProductRender;
