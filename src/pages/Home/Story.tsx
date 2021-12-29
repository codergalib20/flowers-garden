import React from 'react';
import storyImg from '../../assets/story.jpg';
const Story = () => {
  return (
    <div>
      <div className='container-main py-10 grid grid-cols-2 gap-6'>
      <div>
          <img src={storyImg} alt="" />
        </div>
        <div className='p-10 shadow-lg'>
          <h1 className='text-gray-900 text-3xl '>The Story</h1>
          <p className='text-lg text-gray-700 py-2'>Det var efter en inspirationsresa på Mallorca som jag insåg att det saknades ett utbud av exklusiva och noggrant utvalda konstgjorda  växter och träd på marknaden. Med inspiration av inredning- och modebranschen skapade jag By Faux för att på ett nytt sätt föra in konstgjorda växter och träd in i finrummen igen. Växternas hållbarhet gör att de kan användas och återanvändas i olika konstellationer och former i all oändlighet. Det ger våra produkter en självklar plats på varje modernt företag, hotell, skola, restaurang och inte minst i varje modern människas hem.
            <br />
            Med By Faux ska vi ge nytt ljus åt konstgjorda växter, träd och växtväggar och skapa vackra, tidlösa och hållbara miljöer.</p>
          <p className='text-lg text-gray-700 py-3 italic'>Linda Forsberg</p>
        </div>
       
      </div>
    </div>
  );
};

export default Story;