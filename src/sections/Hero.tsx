import Image from "next/image";
import React from "react";
import { FaAngleRight } from 'react-icons/fa';
function Hero() {
  return (
    <div className="hero ">
     <div className="flex">
     <div className="left">
        {" "}
        <h1 className="h1a">Fresh</h1>
        <h1 className="h1b">2022</h1>
        <h1 className="h1c">Look</h1>
        <div className="see-more">
       <div className="hr">   <span><hr /> </span> <span><Image src="/star4.png" alt="ShopKart img"  className="star4" width={50} 
        height={50}/>{" "} </span></div>
      <span>See More</span>
      <FaAngleRight className="arrow-icon" />
    </div>
      </div>
      <div className="right">

        <Image src="/hero.png" alt="ShopKart img"  className="img" width={400} // Set the width of the image
        height={500}/>{" "}
      </div>
     </div>
      <div className="color"></div>
  
</div>
   
  );
}

export default Hero;
