
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderInner from './Components/Common/HeaderInner';
import Footer from './Components/Common/Footer';
import SizeGuide from './Components/Pages/SizeGuide'; 
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import AllCollections from './Components/Pages/AllCollections';
import HeroBanner from './Components/Hero/ HeroBanner';
import ProductList from './Components/Pages/ProductList';
import products from './Product.json';
const App = () => {
  console.log('Received products:',);
  return (
    <div>
      <BrowserRouter>
        <HeaderInner />
        <HeroBanner />
        <div>
          <h2> Shop Our Collections </h2>
       <ProductList products={products} />
       </div>
       <div className="image-container">
      <img src='/images/ball.jpg' alt="Description" />
      </div>

    
       
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/New in" element={<ShopCategory category="New in" />} />
          <Route path="/shop/Dresses" element={<ShopCategory category="Dresses" />} />
          <Route path="/shop/Trousers" element={<ShopCategory category="Trousers" />} />
          <Route path="/shop/Tops" element={<ShopCategory category="Tops" />} />
          <Route path="/shop/Jumpsuits" element={<ShopCategory category="Jumpsuits" />} />
          <Route path="/shop/Skirts" element={<ShopCategory category="Skirts" />} />
          <Route path="/collections/Rebirth" element={<AllCollections all="Rebirth" />} />      
      
        <Route path="/SizeGuide" element={<SizeGuide />} />
      </Routes>
      
       <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
};

export default App;