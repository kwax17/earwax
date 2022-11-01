import React from 'react';
import About from '../components/About'

const Home = () => {
    return (
      <div className='home'>
          <h2>Hey.  This is earwax, the virtual mixed tape. Create a playlist, decorate the cover, and enjoy. Send it to a friend or just remember the color of day. Let's get cooking!</h2>
          <div className='heroBtn'>
            <button>Make a Playlist</button>
          </div>
          <About></About>
      </div>
    );
  };
  
  export default Home;