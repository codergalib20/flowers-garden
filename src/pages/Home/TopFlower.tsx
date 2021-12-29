import React, { useState } from 'react';
import { Link } from 'react-router-dom';
type flowerDataType = {
  flower: {
    title: string,
    img1: string,
    img2: string,
    img3: string,
    des: string,
    des2: string,
    id: number
  }
}
const TopFlower = ({ flower }: flowerDataType) => {
  const [showFlower, setShowFlower] = useState(flower.img1);
  return (
    <div>
      <Link to="/">
        <div className='transform scale-100 hover:scale-105 transition-all duration-300 ease-linear topFlowersCard cursor-pointer flex items-center justify-between flex-col' style={{height : '500px'}}>
          <div>
            <div>
              <img className='max-h-full max-w-full mx-auto' src={showFlower ? showFlower : flower?.img1} alt={flower?.title} />
            </div>
          </div>
          <div>
            <h3 className='text-gray-600 font-bold uppercase text-xl'>{flower?.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopFlower;