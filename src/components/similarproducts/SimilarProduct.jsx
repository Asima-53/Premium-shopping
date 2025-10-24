import React, { useState, useEffect } from 'react'
import './SimilarProduct.css'
import axios from 'axios'
import ProductRender from '../productrender/ProductRender';

function SimilarProduct({category}) {
  const [similarProducts, setSimilarProducts] = useState([]);
console.log(category);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setSimilarProducts(res.data);
      })
      .catch((err) => console.log(`Axios tells that ${err}`));
  }, []);

  const similar = similarProducts.filter(product => product.category === category);
  console.log(similar); 
  return (
        <>
        <div className="similar-products">
                <h2>{category}</h2>
                <div className="similar-products-container">
                        {similar.map((s) => (
                        <ProductRender key={s.id} products={s} />
                ))}
                </div>
        </div>
        
        </>
  );

}

export default SimilarProduct
