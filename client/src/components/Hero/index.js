import React from 'react';
import coverImage from '../../assets/mixtapes.png';

const Hero = () => {
    return (
      <div className='hero'>
        <img src={coverImage} style={{ width: "100%" }} alt="cover" ></img>
      </div>
    );
  };
  
  export default Hero;