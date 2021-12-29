import React from 'react';
import { flowers } from '../../fakeData/flowers';
import TopFlower from './TopFlower';
const TopProducts = () => {
  return (
    <div className="container">
      <div className='grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center py-12'>
        {
          flowers?.slice(0, 4).map(flower => (<TopFlower flower={flower} />))
        }
      </div>
    </div>
  );
};

export default TopProducts;