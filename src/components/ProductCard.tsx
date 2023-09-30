// ProductCard.tsx

import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  heading: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, heading, description, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={heading} style={{ height: '300px' }} />
      <div className="product-details">
        <h2>{heading}</h2>
        <p>{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
