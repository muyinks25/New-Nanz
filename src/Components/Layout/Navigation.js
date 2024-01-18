// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isShopOpen, setShopOpen] = useState(false);
  const [isCollectionsOpen, setCollectionsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleShop = () => {
    setShopOpen(!isShopOpen);
  };

  const toggleCollections = () => {
    setCollectionsOpen(!isCollectionsOpen);
  };

  return (
    <div className={`Navigation ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='nav-container'>
        <div className='nav-icon-container' onClick={toggleMenu}>
          {isMenuOpen ? (
            <button className="drawer__button-close header-drawer__button-close svg-color-inherit button-reset small-hide medium-hide no-js-hidden js-btn-close-drawer" aria-label="Close menu drawer" aria-expanded="true" onClick={toggleMenu}>
              <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32H63.3079" stroke="#111111"></path>
                <path d="M49.98 46.9938C53.7027 38.8007 56.6521 35.3612 64 32.0224C56.4879 28.3248 53.5721 24.8728 49.98 17.0059" data-ignore-fill="" stroke="#111111"></path>
              </svg>
            </button>
          ) : (
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H21" stroke="#111111" strokeLinecap="square"></path>
              <path d="M3 12H21" stroke="#111111" strokeLinecap="square"></path>
              <path d="M3 19H21" stroke="#111111" strokeLinecap="square"></path>
            </svg>
          )}
        </div>

        {isMenuOpen && (
          <nav>
            <ul className='nav-menu'>
              <li onClick={toggleShop}>
                Shop
                {isShopOpen && (
                  <ul className='sub-menu'>
                    <li><Link to="/shop/New in">New In</Link></li>
                    <li><Link to="/shop/Dress">Dress</Link></li>
                    <li><Link to="/shop/Tops">Tops</Link></li>
                    <li><Link to="/shop/Trousers">Trousers</Link></li>
                    <li><Link to="/shop/Skirts">Skirts</Link></li>
                    <li><Link to="/shop/Jumpsuits">Jumpsuits</Link></li>
                  </ul>
                )}
              </li>
              <li onClick={toggleCollections}>
                Collections
                {isCollectionsOpen && (
                  <ul className='sub-menu'>
                    <li><Link to="/collections/Rebirth">Rebirth</Link></li>
                  </ul>
                )}
              </li>
              <li><Link style={{ textDecoration: "none" }} to="/Contact">Contact</Link></li>
              <li><Link style={{ textDecoration: "none" }} to="/Shipping">Shipping</Link></li>
              <li><Link style={{ textDecoration: "none" }} to="/sizeGuide">Size Guide</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navigation;
