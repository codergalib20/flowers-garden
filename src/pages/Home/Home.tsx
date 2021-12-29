import React from 'react';
import bannerImage from '../../assets/bannerImage.jpg';
import Header from '../../components/Header';
import Katagol from './Katagol';
import Slider from './Slider';
import Story from './Story';
import TopProducts from './TopFlowers';
import VaxTV from './VaxTV';
const Home = () => {
  const homeBanner = {
    background: `url(${bannerImage}) no-repeat top center`,
    backgroundSize: 'cover',
  }
  return (
    <>
      <div style={homeBanner}>
        <Header />
        <Slider />
      </div>
      <TopProducts />
      <Katagol/>
      <VaxTV/>
      <Story/>
    </>
  );
};

export default Home;