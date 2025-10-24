import React from 'react'
import './Review.css'
const productReviews = [
  {
    id: 1,
    product: "Men's Casual Shirt",
    category: "clothing",
    rating: 4.5,
    review: "Great fit and comfortable fabric. The colors are exactly as shown in the pictures. Would definitely buy again!",
    reviewer: "John D.",
    date: "2023-10-15"
  },
  {
    id: 2,
    product: "Wireless Bluetooth Earbuds",
    category: "electronics",
    rating: 5,
    review: "Amazing sound quality and battery life. The noise cancellation works perfectly for my commute.",
    reviewer: "Sarah M.",
    date: "2023-11-02"
  },
  {
    id: 3,
    product: "Silver Pendant Necklace",
    category: "jewelry",
    rating: 4,
    review: "Beautiful craftsmanship but the chain is a bit shorter than I expected. Still love it though!",
    reviewer: "Emily R.",
    date: "2023-09-28"
  },
  {
    id: 4,
    product: "Women's Yoga Pants",
    category: "clothing",
    rating: 3.5,
    review: "Very comfortable but the sizing runs small. Had to exchange for a larger size.",
    reviewer: "Jessica L.",
    date: "2023-11-10"
  },
  {
    id: 5,
    product: "Smart Watch",
    category: "electronics",
    rating: 4.5,
    review: "Tracks all my fitness activities accurately. The screen is crisp and battery lasts 3 days with normal use.",
    reviewer: "Michael T.",
    date: "2023-10-22"
  },
  {
    id: 6,
    product: "Diamond Stud Earrings",
    category: "jewelry",
    rating: 5,
    review: "Absolutely stunning! The diamonds sparkle beautifully. Worth every penny for this quality.",
    reviewer: "Olivia S.",
    date: "2023-11-05"
  },
  {
    id: 7,
    product: "Denim Jacket",
    category: "clothing",
    rating: 4,
    review: "Perfect for spring weather. The material is high quality and it has a nice slim fit.",
    reviewer: "David K.",
    date: "2023-09-15"
  },
  {
    id: 8,
    product: "4K Smart TV",
    category: "electronics",
    rating: 5,
    review: "The picture quality is incredible! Setup was easy and the smart features work flawlessly.",
    reviewer: "Robert J.",
    date: "2023-10-30"
  },
  {
    id: 9,
    product: "Gold-plated Bracelet",
    category: "jewelry",
    rating: 3,
    review: "Looks nice but the gold plating started fading after a few weeks of daily wear.",
    reviewer: "Sophia H.",
    date: "2023-11-12"
  },
  {
    id: 10,
    product: "Winter Parka",
    category: "clothing",
    rating: 4.5,
    review: "Kept me warm in -20°C weather! Lots of pockets and the hood provides great protection from wind.",
    reviewer: "Daniel P.",
    date: "2023-10-05"
  }
];


function Review() {
  return (
    <div className="reviews-container" id='reviews'>
      <h2>Product Reviews</h2>
      <div className="reviews-grid">
        {productReviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.product}</h3>
            <p className="category">{review.category}</p>
            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.floor(review.rating) ? '★' : '☆'}</span>
              ))}
              <span>({review.rating})</span>
            </div>
            <p className="review-text">{review.review}</p>
            <p className="reviewer">{review.reviewer} - {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
