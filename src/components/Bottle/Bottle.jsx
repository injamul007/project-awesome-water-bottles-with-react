import React from 'react';
import "./Bottle.css"

const Bottle = ({bottleData}) => {
  // console.log(bottleData)
  const {category,img,name,price} = bottleData
  return (
    <div className='bottle_card'>
      <h2>Category: {category}</h2>
      <img src={img} alt='water_bottle_image' />
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
    </div>
  );
};

export default Bottle;