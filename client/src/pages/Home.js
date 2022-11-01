import React from 'react';

const Home = () => {
    return (
      <div className='hero'>
          <h2>Hey.  This is earwax, the music app making listening fun.  Let's get cooking!</h2>
            <div className='divider'></div>
          <h3 className='hero-intro'>First, what do you wanna do today?</h3>
          <div className='heroBtn'>
            <button>The Swiper</button>
            <button>Make a Playlist</button>
            <button>Random Song</button>
          </div>
      </div>
    );
  };
  
  export default Home;