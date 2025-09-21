import React from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = ({bottlesPromise}) => {
  const bottlesData = use(bottlesPromise)
  return (
    <div>
      <h2>All the Bottles: {bottlesData.length}</h2>
      <div className='bottles_container'>
        {
        bottlesData.map(bottleData => <Bottle 
          key={bottleData.id} 
          bottleData={bottleData}></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;