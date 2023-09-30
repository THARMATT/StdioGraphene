
import React from 'react';

interface TitleProps {
  wishlistCount: number;
  bagCount: number;
}

const Title: React.FC<TitleProps> = ({ wishlistCount, bagCount }) => {
  return (
    <div className="title">
      <h1>ShopKart</h1>
      <div className="wishlist">
        <span>WISHLIST ({wishlistCount})</span>
        <span>BAG ({bagCount})</span>
      </div>
     
    </div>
  );
};

export default Title;
