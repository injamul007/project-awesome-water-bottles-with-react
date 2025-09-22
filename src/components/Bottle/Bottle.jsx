import React from 'react';
import "./Bottle.css"

const Bottle = ({bottleData,handleAddToCart}) => {
  // console.log(bottleData)
  const {category,img,name,price,stock} = bottleData
  return (
    <div className='bottle_card'>
      <h2>Category: {category}</h2>
      <img src={img} alt='water_bottle_image' />
      <h3>Name: {name}</h3>
      <h3>Price: ${price}</h3>
      <h3>In Stock: {stock}</h3>
      <button onClick={()=>handleAddToCart(bottleData)}>Buy Now</button>
    </div>
  );
};

export default Bottle;