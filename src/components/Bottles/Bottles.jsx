import React from 'react';
import { use } from 'react';

const Bottles = ({bottlesPromise}) => {
  const bottlesData = use(bottlesPromise)
  return (
    <div>
      <h2>All the Bottles: {bottlesData.length}</h2>
    </div>
  );
};

export default Bottles;