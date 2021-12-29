import React from 'react';
import vaxtvImg from '../../assets/By-Faux-vaxtvagg_komprimerad.jpg';
const VaxTV = () => {
  return (
    <div>
      <div className='container-main py-10 grid grid-cols-2 gap-6'>
        <div className='p-10 shadow-lg'>
          <h1 className='text-gray-900 text-3xl '>VÄXTVÄGGAR</h1>
          <p className='text-lg text-gray-700 py-3'>Med en växtvägg kan du integrera grönska i omgivningen på ett naturligt och effektfullt sätt. Med en känsla för färg, form och inredning är vi på By Faux experter på att skräddarsy växtväggar för att passa in i miljöer och möta specifika önskemål. Vi erbjuder växtväggar med både ljudabsorbenter och olika typer av soundscape. Alla våra växtväggar är designade och inspirerad av vår nordiska grönska.
            <br />
            <br />
            Konstgjorda växtväggar kan användas för att förstärka upplevelsen i ett rum, skapa grönskande och ljudabsorberande rumsavdelare eller för att få in gröna växter på ytor med begränsad golvyta.</p>
          <button className='btn btn-pink'>LAS MER</button>
        </div>
        <div>
          <img src={vaxtvImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VaxTV;