import React from 'react'
import Navigation from '../Layout/Navigation';
import Cart from '../Pages/Cart';
import Search from '../Layout/Search';
import "./HeaderInner.css"


// Import necessary modules from react-router-dom


const HeaderInner = () => {
  const handleLogoClick = () => {
    // Set the window location to the home page
    window.location.href = '/';
  };

  return (
    <div className='menu'> 
      <Navigation />
      {/* Add an onClick handler to the logo */}
      <div className='logo' onClick={handleLogoClick}> Nanz</div>
      <Cart />
      <Search />
    </div>
  );
}
  


export default HeaderInner;
