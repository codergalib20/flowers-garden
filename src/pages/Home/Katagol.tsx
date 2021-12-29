import React from 'react';
import katagolBanner from '../../assets/byfaux-konstvaggar-2.jpg';
const Katagol = () => {
  return (
    <div style={{background: `linear-gradient(rgba(0,0,0, 0.6), rgba(0, 0, 0, 0.6)),url(${katagolBanner}) no-repeat center center`, backgroundSize: 'content'}}>
         <div className=" grid grid-cols-12">
             <div className='col-span-8 px-10 py-20'>
               <h1 className='text-red-50 text-4xl font-bold '>UNDERHÅLLSFRIA KONTORSVÄXTER</h1>
               <p className='text-red-50 text-xl font-medium py-4'>Växtinredning, att välja konstgjorda växter och växtväggar till kontor och andra verksamhetslokaler ger ett levande och ombonat intryck, utan att du behöver tänka på skötsel. By Faux hjälper dig att skapa vackra och inspirerande miljöer med ett rikt växtliv som håller sig fint oavsett omständigheter. Och kvaliteten är så bra att du bara vid beröring kan känna skillnaden.</p>
               <button className='btn btn-pink'>LÄS MER</button>
             </div>
             <div className='col-span-4 pr-5 text-center flex items-center py-20 justify-evenly flex-col' style={{background:'#f6eb61'}}>
               <h1 className='text-3xl'>KATALOG</h1>
               <p className='text-xl'>SE VÅRT UTBUD AV VÄXTER, TRÄD OCH VÄXTVÄGGAR.</p>
               <button className='btn btn-black'>LADDA NER</button>
             </div>
         </div>
    </div>
  );
};

export default Katagol;