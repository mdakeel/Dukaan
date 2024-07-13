import React, { useState } from 'react';
import {products }from '../../utils/api/productApi'
import MenuContainer from './MenuContainer';
import ProductCard from './ProductCard';
import SearchProduct from './ProductSearchBar';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chicken");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div className="w-full">

        {/* menu container */}
      <MenuContainer onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      

        {/* product card  */}
      <div className="flex flex-wrap justify-center w-full gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
