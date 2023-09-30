import  ProductCard from "../components/ProductCard";
import React from "react";

function Products() {
    const productProps = {
        imageUrl: "../product.png", 
        heading: "Product Name",
        description: "Product description goes here.",
        price: "49.99",
      };
  return (
    <div>
      <div className="product">
        <h1>New Products</h1>
        <div className="content">
          <div className="details">
            <span>Apparel</span>
            <span>Accessories</span>
            <span>Best sellers</span>
            <span>50% off</span>
          </div>
          <div className="card">
            <ProductCard {...productProps} />
            
          </div>
          <div className="card">
            <ProductCard {...productProps} />
            
          </div>
          <div className="card">
            <ProductCard {...productProps} />
            
          </div>
          <div className="card">
            <ProductCard {...productProps} />
            
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Products;
