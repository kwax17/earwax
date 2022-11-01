import React from 'react';
import Nav from '../Nav';

const Header = () => {
  return (
    <header>
      <div className='headerNav'>
        <h2>earwax</h2>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;