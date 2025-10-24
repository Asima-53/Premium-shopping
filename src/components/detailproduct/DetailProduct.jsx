import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailProduct.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import SimilarProduct from "../similarproducts/SimilarProduct";
import Review from "../reviews/Review";
const sbi = "SBI";
const axis = "Axis";
const icici = "ICICI";
const size = ["S", "M", "L", "XL", "XXL"];

const BankDiscount = ({ bank }) => {
  return (
    <>
      <div className="bank-discounts">
        <p>
          Available Bank discounts{" "}
          {bank.map((b, index) => (
            <span key={index} className="bank-name">
              {b}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

const Size = ({ size }) => {
  return (
    <>
      <div className="size">
        {size.map((s, index) => (
          <p key={index} className="size-name">
            {s}
          </p>
        ))}
      </div>
    </>
  );
};

function DetailProduct() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(`The Error ${err} was Occured`));
  }, [id]);

  const CartButton = () => {
    return (
      <>
        <div className="cart-button">
          <button onClick={() => cart()}>
            {" "}
            <Heart />
            Add to cart
          </button>
        </div>
      </>
    );
  };

  const category = product ? product.category : "";

  const cart = () => {
    alert(`${product.title}has been added to your cart!`);
  };

  const buyNow = (rate) => {
    alert(`You are buying ${product.title}! `);
    console.log(`${rate} was clicked`);
  };

  return (
    <div>
      <Navbar />

      <div className="product-detail">
        {product ? (
          <div className="product-content">
            <div className="image-product">
              <img src={product.image} alt="" />
            </div>

            <div className="details">
              <div className="name-rate">
                <h2>{product.title}</h2>
                <p className="ratingg">Rating {product.rating.rate} Stars</p>
              </div>
              <hr />

              <div className="price-stock">
                <p className="discount">30% discount</p>
                <h4>${product.price}</h4>
                <BankDiscount bank={[sbi, axis, icici]} />

                <hr />
                <h5>
                  Stocks: Only{" "}
                  <span style={{ color: "red" }}>{product.rating.count}</span>{" "}
                  only left
                </h5>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Best Selling overall
                </p>
                <Size size={size} />
              </div>

              <div className="buy-buttons">
                <button onClick={() => cart()}>
                  {" "}
                  <ShoppingBag /> Add to bag
                </button>
                <button onClick={() => buyNow(product.price)}>
                  {" "}
                  <ShoppingCart /> Buy Now
                </button>
              </div>
            </div>
            <div className="cart-content">
              <p>To buy, select size</p>
              <CartButton />
            </div>
          </div>
        ) : (
          <>
            <div className="loader">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </>
        )}
      </div>
      <hr />
      <div className="description">
        <h2>Description</h2>
        <p>{product ? product.description : "Loading..."}</p>
      </div>

      <hr />

      <Review />

      <hr />
      <div className="similar-products">
        <SimilarProduct category={category} />
      </div>

      <hr />

      <Footer />
    </div>
  );
}

export default DetailProduct;
