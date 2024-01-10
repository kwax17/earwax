import React from 'react';
import Hero from '../components/Hero'

const Home = () => {
    return (
      <div>
          <Hero></Hero>
          <div className='home'>
            <h2>Hey.  This is earwax, the virtual mixed tape. Create a playlist, decorate the cover, and enjoy. Send it to a friend or just remember the day. Let's get mixing!</h2>
            <div className='heroBtn'>
              <button><a href="../../PlaylistMaker">Make a Playlist</a></button>
            </div>
          </div>
      </div>
    );
  };
  
  export default Home;