import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero__inner hero-banner--full background-colors-default hero__inner--vertical-line" data-header-menu-text-color="#ffffff">
        <div className="media media--16-9 media--overlay hero__media hero__media--desktop">
          <div className="overlay"></div>
          <video playsInline loop autoPlay muted preload="metadata" aria-label="A video showcasing the diverse pieces of the 'Rebirth' collection. The collection features a range of artwork with vibrant colors and intricate designs. Each piece tells a unique story and portrays themes of renewal, growth, and transformation. From abstract paintings to sculptural installations, 'Rebirth' invites viewers to immerse themselves in a visually stunning and thought-provoking artistic journey." poster="//chenemi.com/cdn/shop/files/preview_images/ac4c9214c7f944029b22d63a4b8404d0.thumbnail.0000000000_2048x.jpg?v=1699363197">
            <source src="https://cdn.shopify.com/videos/c/vp/ac4c9214c7f944029b22d63a4b8404d0/ac4c9214c7f944029b22d63a4b8404d0.HD-1080p-4.8Mbps-20367052.mp4" type="video/mp4" />
            <img alt="Video Cover" src="//chenemi.com/cdn/shop/files/preview_images/ac4c9214c7f944029b22d63a4b8404d0.thumbnail.0000000000_2048x.jpg?v=1699363197" loading="lazy" />
          </video>
        </div>
        <div className="hero__content align-center text-center justify-center text-colors-secondary background-colors-default">
          <p className="hero__subtitle">DISCOVER OUR NEW COLLECTION</p>
          <h3 className="hero__title">REBIRTH</h3>
          <div className="hero__button">
            <a href="shop/AllCollection" target="_false" className="button button--outlined button--uppercase">SHOP NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
