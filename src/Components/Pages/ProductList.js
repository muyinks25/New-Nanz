
import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (type) => {
    const filtered = products.filter(product => product.type === type);
    setFilteredProducts(filtered);
    console.log(`Filtered by ${type}:`, filtered);
  };

  const resetFilter = () => {
    setFilteredProducts(products);
    console.log('Filter reset');
  };

  const sortByName = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredProducts(sorted);
    console.log('Sorted by name:', sorted);
  };

  const sortByPrice = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
    console.log('Sorted by price:', sorted);
  };

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary" onClick={() => filterProducts('Top')}>Filter Tops</button>
          <button className="btn btn-primary" onClick={() => filterProducts('Dress')}>Filter Dresses</button>
          <button className="btn btn-primary" onClick={() => filterProducts('Skirt')}>Filter Skirt</button>
          

          <button className="btn btn-secondary" onClick={resetFilter}>Reset Filter</button>
          <button className="btn btn-info" onClick={sortByName}>Sort by Name</button>
          <button className="btn btn-info" onClick={sortByPrice}>Sort by Price</button>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={process.env.PUBLIC_URL + product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
