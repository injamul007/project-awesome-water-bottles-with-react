import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = ({bottlesPromise}) => {
  const bottlesData = use(bottlesPromise)

  const [cart, setCart] = useState([])

  const handleAddToCart = (bottleData) => {
    const newCart = [...cart, bottleData]
    setCart(newCart)
  }
  return (
    <div>
      <h2>All the Bottles: {bottlesData.length}</h2>
      <p>Added to Cart: {cart.length}</p>
      <div className='bottles_container'>
        {
        bottlesData.map(bottleData => <Bottle 
          key={bottleData.id} 
          bottleData={bottleData}
          handleAddToCart={handleAddToCart}
          ></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;