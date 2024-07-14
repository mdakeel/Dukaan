import React, { useState } from 'react';
import { products } from '../../utils/api/productApi';
import MenuContainer from './MenuContainer';
import ProductCard from './ProductCard';
import ProductSearchBar from './ProductSearchBar';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chicken");
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => 
    product.category === selectedCategory &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <MenuContainer 
        onCategoryClick={handleCategoryClick} 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex flex-wrap justify-center w-full gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
