import React from 'react';
import { NavLink } from 'react-router-dom';

const Slider = () => {
  
  return (
    <div className='container-main flex items-center justify-center text-center h-full min-h-screen'>
      <div>
        <h1 className='text-6xl text-red-50 py-3'>Reflecting nature. <br />
          Faux walls and plants.</h1>
        <p className='text-lg font-medium text-red-50 py-3'>EXKLUSIVT UTVALDA KONSTGJORDA VÄXTER, TRÄD OCH VÄXTVÄGGAR.</p>
        <div className='mt-4'>
          <NavLink className="btn btn-pink" to="/" >VÄXTER</NavLink>
          <NavLink className="btn btn-pink sm:ml-2" to="/" >TRÄD</NavLink>
          <NavLink className="btn btn-pink sm:ml-2" to="/" >VÄXTVÄGGAR</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Slider;